import React, { useEffect } from "react";
import GetContactListService from "../../Services/Contact/GetAllContactService";
import AddContact from "../Contact/AddContact";
import PutContact from "../Contact/PutContact";
import RemoveContact from "./RemoveContact";

const ContactList = () => {
  const [MessageError, setMessageError] = React.useState("");
  const [listContact, setListContact] = React.useState([]);

  async function GetContacts() {
    let response = await GetContactListService();
    if (response === undefined) {
      alert("Cheack back-end connection");
    } else if (response.status !== 200) {
      setMessageError(response.statusText);
    } else {
      setListContact(
        response.data.map((element) => {
          return (
            <tr key={element.mobilePhone}>
              <td>{element.name}</td>
              <td>(+375) {element.mobilePhone}</td>
              <td>{element.jobTitle}</td>
              <td>{element.birthDate}</td>
              <td>
                <div className="row">
                  <div className="row">
                    <RemoveContact
                      mobilePhone={element.mobilePhone}
                      GetContacts={GetContacts}
                    ></RemoveContact>
                  </div>
                  <div className="row pt-1">
                    <PutContact
                      name={element.name}
                      mobilePhone={element.mobilePhone}
                      jobTitle={element.jobTitle}
                      birthDate={element.birthDate}
                      GetContacts={GetContacts}
                    ></PutContact>
                  </div>
                </div>
              </td>
            </tr>
          );
        })
      );
    }
  }

  useEffect(() => {
    GetContacts();
  }, []);

  return (
    <div className="row mt-5">
      <div className="row">
        <h1 className="d-flex justify-content-center align-items-center ">
          Contact List
        </h1>
      </div>
      <div className="row">
        <p>{MessageError}</p>
      </div>
      <div className="row mb-1">
        <AddContact GetContacts={GetContacts}></AddContact>
      </div>
      <div className="row">
        <div className="col align-self-center">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">MobilePhone</th>
                <th scope="col">JobTitle</th>
                <th scope="col">BirthDate</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>{listContact}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
