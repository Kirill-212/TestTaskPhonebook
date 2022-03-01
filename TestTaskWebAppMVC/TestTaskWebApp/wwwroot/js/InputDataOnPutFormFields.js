function inputDataOnPutFormFields(name, mobilePhone, jobTitle, birthDate) {
    document.querySelector(".NamePut").value = name;
    document.querySelector(".MobilePhonePut").value = mobilePhone;
    document.querySelector(".JobTitlePut").value = jobTitle;
    document.querySelector(".BirthDatePut").value = formatDate(birthDate);

    return true;
}