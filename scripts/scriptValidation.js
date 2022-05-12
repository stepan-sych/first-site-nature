const EnableDisable = () => {
    let elements = document.querySelectorAll("#name, #mail, #phone");
    let submitBtn = document.getElementById("submitBtn");
    let nameInput = document.getElementById("name");
    let mailInput = document.getElementById("mail");
    let phoneInput = document.getElementById("phone");
    submitBtn.disabled = true;
    for (const element of elements) {
        element.addEventListener("keyup", () =>
            submitBtn.disabled = nameInput.value.trim() === ""
                || mailInput.value.trim() === ""
                || phoneInput.value.trim() === "");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            form.submit();
        }
    }

    const formValidate = () => {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_name')) {
                if (nameTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_tel')) {
                if (telNumTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    const formAddError = (input) => {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    const formRemoveError = (input) => {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    const emailTest = (input) => {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const nameTest = (input) => {
        return /^[0-9,!@#$%^&*)(_/?\-=.`'"|~\]\[₴№;:}{\\><]/.test(input.value);
    }

    const telNumTest = (input) => {
        return !/^[0-9]*$/.test(input.value);
    }
});
