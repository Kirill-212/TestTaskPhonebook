export default function validationFields(
  name,
  mobilePhone,
  jobTitle,
  birthDate
) {
  if (new Date().getFullYear() - new Date(birthDate).getFullYear() < 18) {
    return { status: false, mes: "Error your age is under 18" };
  } else if (jobTitle.length === 0 || jobTitle.length > 20) {
    return { status: false, mes: "Error job title length [1,20]" };
  } else if (!mobilePhone.match(/^\d{9}$/)) {
    return {
      status: false,
      mes: "Error mobile phone is not valid(Exapmle: 297699607(9))",
    };
  } else if (name.length === 0 || name.length > 10) {
    return { status: false, mes: "Error name length [1,10]" };
  }
  return { status: true, mes: "Operation completed successfully" };
}
