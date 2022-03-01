import axios from "axios";

async function PutContact(name, mobilePhone, jobTitle, birthDate) {
  try {
    const response = await axios.put(
      require("../../../package.json").backEndUrl,
      {
        Name: name,
        MobilePhone: mobilePhone,
        JobTitle: jobTitle,
        BirthDate: birthDate,
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
export default PutContact;
