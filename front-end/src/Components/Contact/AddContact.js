import React from "react";
import PostContact from "../../Services/Contact/PostContactService";
import ValidationFields from "../../Validation/FieldValidation";

const AddContact = (props) => {
  const [messageError, setMessageError] = React.useState("");
  const [name, setName] = React.useState("");
  const [mobilePhone, setMobilePhone] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");

  async function Add(event) {
    event.preventDefault();
    let resutValid = ValidationFields(name, mobilePhone, jobTitle, birthDate);
    if (!resutValid.status) {
      setMessageError(resutValid.mes);

      return false;
    }
    let response = await PostContact(name, mobilePhone, jobTitle, birthDate);
    if (response === undefined) {
      alert("Cheack back-end connection");
    } else if (response.status !== 200) {
      if (response.statusText === "") {
        setMessageError(response.data);
      } else {
        setMessageError(response.statusText);
      }
    } else {
      props.GetContacts();
      setMessageError(resutValid.mes);
    }
  }

  function CleanErrorMesField() {
    setMessageError("");
  }

  return (
    <>
      <div className="row text-dark">
        <div className="py-3 text-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalAdd"
          >
            Add
          </button>
        </div>
      </div>
      <div
        className="modal fade text-dark"
        id="modalAdd"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Post your contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={Add}>
                <div className="form-group">
                  <label> Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mobile phone(+375):</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile phone"
                    onChange={(e) => setMobilePhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Job title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job title"
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Birth date:</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setBirthDate(e.target.value)}
                    placeholder="Birth date"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="submit"
                      className="btn btn-success w-100 mt-2"
                      value="Submit"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="reset"
                      className="btn btn-danger w-100 mt-2"
                      value="Reset"
                      onClick={CleanErrorMesField}
                    />
                  </div>
                </div>
                <div className="row mt-2">{messageError}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
