function validateName(name, method) {
    if (name.length === 0 || name.length > 10) {
        document.getElementById("Error" + method).innerHTML = "Error name length";

        return false;
    }

    return true;
}

function validateMobilePhone(mobilePhone, method) {
    if (!mobilePhone.match(/^\d{9}$/)) {
        document.getElementById("Error" + method).innerHTML = "Error mobile phone is not valid";

        return false;
    }

    return true;
}

function validateJobTitle(jobTitle, method) {
    if (jobTitle.length === 0 || jobTitle.length > 20) {
        document.getElementById("Error" + method).innerHTML = "Error job title length";

        return false;
    }

    return true;
}

function validateBirthDate(birthDate, method) {
    if (new Date().getFullYear() - new Date(birthDate).getFullYear() < 18) {
        document.getElementById("Error" + method).innerHTML = "Error your age is under 18";

        return false;
    }

    return true;
}

function cancelError(method) {
    document.getElementById("Error" + method).innerHTML = "";

    return true;
}

function validationFields(method) {
    console.log(method);
    let name = document.querySelector(".Name" + method).value;
    let mobilePhone = document.querySelector(".MobilePhone" + method).value;
    let jobTitle = document.querySelector(".JobTitle" + method).value;
    let birthDate = document.querySelector(".BirthDate" + method).value;

    return validateName(name, method) && validateMobilePhone(mobilePhone, method) &&
        validateJobTitle(jobTitle, method) && validateBirthDate(birthDate, method);
}