import axios from "axios";

async function DeleteContact(mobilePhone) {
  try {
    const response = await axios.delete(
      require("../../../package.json").backEndUrl +
        "?mobilePhone=" +
        mobilePhone
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
export default DeleteContact;
