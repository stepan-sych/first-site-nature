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
            addErrorClass(field);
            isValid = false;
        } else {
            removeErrorClass(field)
        }
    }
    for (const inputTag of formInputs) {
        if (inputTag.id === "mail") {
            validateField(inputTag, isEmailValid);
        } else if (inputTag.id === "name") {
            validateField(inputTag, isNameValid);
        } else if (inputTag.id === "phone") {
            validateField(inputTag, isTelNumValid);
        }
    }
    return isValid;
}

const isEmailValid = (value) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

const isNameValid = (value) => {
    return /^[0-9,!@#$%^&*)(_/?\-=.`'"|~\]\[₴№;:}{\\><]/.test(value);
}

const isTelNumValid = (value) => {
    return !/^[0-9]*$/.test(value);
}

const addErrorClass = (input) => {
    input.parentElement.classList.add("error");
    input.classList.add("error");
}

const removeErrorClass = (input) => {
    input.parentElement.classList.remove("error");
    input.classList.remove("error");
}
