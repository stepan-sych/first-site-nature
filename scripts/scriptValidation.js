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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const formSend = async (e) => {
        e.preventDefault();
        let isValidForm = formValidate();
        if (isValidForm === true) {
            form.submit();
        }
    }
    form.addEventListener("submit", formSend);
});

const formValidate = () => {
    let isValid = true;
    let formReq = document.querySelectorAll("#mail, #name, #phone"); //Todo leave class or ids

    const validateField = (field, checkFieldCallback) => {
        if (checkFieldCallback(field)) {
            formAddError(field);
            isValid = false;
        } else {
            formRemoveError(field)
        }
    }
    for (const inputTag of formReq) {
        if (inputTag.classList.contains("-email")) {
            validateField(inputTag, emailValidation);
        } else if (inputTag.classList.contains("-name")) {
            validateField(inputTag, nameValidation);
        } else if (inputTag.classList.contains("-tel")) {
            validateField(inputTag, telNumValidation);
        } else if (inputTag.value === "") { //Todo remove
            formAddError(inputTag);
            isValid = false;
        }
    }
    return isValid;
}

const formAddError = (input) => {
    input.parentElement.classList.add('-error');
    input.classList.add('-error');
}

const formRemoveError = (input) => {
    input.parentElement.classList.remove('-error');
    input.classList.remove('-error');
}

const emailValidation = (input) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

const nameValidation = (input) => {
    return /^[0-9,!@#$%^&*)(_/?\-=.`'"|~\]\[₴№;:}{\\><]/.test(input.value);
}

const telNumValidation = (input) => {
    return !/^[0-9]*$/.test(input.value);
}
