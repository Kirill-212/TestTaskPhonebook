import React from "react";
import DeleteContactService from "../../Services/Contact/DeleteContactService";

const RemoveContact = (props) => {
  async function Remove() {
    let response = await DeleteContactService(props.mobilePhone);
    if (response === undefined) {
      alert("Cheack back-end connection");
    } else if (response.status !== 200) {
      alert(response.statusText);
    } else {
      props.GetContacts();
    }
  }

  return (
    <button type="button" className="btn btn-primary" onClick={Remove}>
      Remove
    </button>
  );
};

export default RemoveContact;
