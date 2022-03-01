import axios from "axios";

async function PostContact(name, mobilePhone, jobTitle, birthDate) {
  try {
    const response = await axios.post(
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
export default PostContact;
