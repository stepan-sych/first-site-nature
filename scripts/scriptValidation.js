document.addEventListener("DOMContentLoaded", () => {
    let elements = document.querySelectorAll("#name, #mail, #phone");
    for (const element of elements) {
        element.addEventListener("keyup", () => {
            let submitBtn = false;
            for (const el of elements) {
                if (el.value.trim() === "") {
                    submitBtn = true;
                }
                document.getElementById("submitBtn").disabled = submitBtn;
            }
        });

    }

    const form = document.getElementById("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let isValidForm = formValidate();
        if (isValidForm === true) {
            form.submit();
        }
    });
});

const formValidate = () => {
    let isValid = true;
    let formInputs = document.querySelectorAll("#mail, #name, #phone");

    const validateField = (field, checkFieldCallback) => {
        if (checkFieldCallback(field.value)) {
            formAddError(field);
            isValid = false;
        } else {
            formRemoveError(field)
        }
    }
    for (const inputTag of formInputs) {
        console.log("inputTeg");
        console.log(inputTag);
        console.log("formInputs");
        console.log(formInputs);
        if (inputTag.id === "mail") {
            validateField(inputTag, isEmailValidation); //todo rename
        } else if (inputTag.id === "name") {
            validateField(inputTag, isNameValidation);
        } else if (inputTag.id === "phone") {
            validateField(inputTag, isTelNumValidation);
        }
    }
    return isValid;
}

const isEmailValidation = (value) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

const isNameValidation = (value) => {
    return /^[0-9,!@#$%^&*)(_/?\-=.`'"|~\]\[₴№;:}{\\><]/.test(value);
}

const isTelNumValidation = (value) => {
    return !/^[0-9]*$/.test(value);
}

const formAddError = (input) => {
    console.log("input");
    console.log(input.value);
    input.parentElement.classList.add("error");
    input.classList.add("error");
}

const formRemoveError = (input) => {
    input.parentElement.classList.remove("error");
    input.classList.remove("error");
}
