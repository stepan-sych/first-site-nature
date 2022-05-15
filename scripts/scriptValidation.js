const EnableDisable = () => {
    let elements = document.querySelectorAll("#name, #mail, #phone");
    let submitBtn = false;
    for (const el of elements) {
        if (el.value.trim() === "") {
            submitBtn = true;
            break;
        }
    }
    document.getElementById("submitBtn").disabled = submitBtn;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const formSend = async (e) => {
        e.preventDefault();
        let isValidForm = formValidate();
        if (isValidForm === true) {
            form.submit();
        }
        form.addEventListener('submit', formSend);
    }
});

const formValidate = () => {
    let isValid = true;
    let formReq = document.querySelectorAll('#email, #name, #tel'); //Todo leave class or ids

    const validateField = (field, fieldHasError) => {
        if (fieldHasError) {
            formAddError(field);
            isValid = false;
        } else {
            formRemoveError(field)
        }
    }

    for (const inputTag of formReq) {
        formRemoveError(inputTag); //Todo remove

        if (inputTag.classList.contains('_email')) {
            let hasError = emailTest(inputTag);
            validateField(inputTag, hasError);
        } else if (inputTag.classList.contains('_name')) {
            if (nameTest(inputTag)) {
                formAddError(inputTag);
                isValid = false;
            }
        } else if (inputTag.classList.contains('_tel')) {
            if (telNumTest(inputTag)) {
                formAddError(inputTag);
                isValid = false;
            }
        } else {
            if (inputTag.value === "") { //Todo remove
                formAddError(inputTag);
                isValid = false;
            }
        }
    }
    return isValid;
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
