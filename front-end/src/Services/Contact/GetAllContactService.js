import axios from "axios";

async function GetAllContact() {
  try {
    const response = await axios.get(
      require("../../../package.json").backEndUrl
    );
    return response;
  } catch (error) {
    return error.response;
  }
}
export default GetAllContact;
