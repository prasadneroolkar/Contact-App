import { useState, useEffect } from "react";
import usericon from "/usericon.svg";
const EditComponent = ({ onAddeditCont, contact, onCancel }) => {
  const [editname, seteditname] = useState(contact.name || "");
  const [editphone, seteditphone] = useState(contact.phone || "");
  const [editemail, seteditEmail] = useState(contact.email || "");
  const [editaddress, seteditAddress] = useState(contact.area || "");

  useEffect(() => {
    seteditname(contact.name || "");
    seteditphone(contact.phone || "");
    seteditEmail(contact.email || "");
    seteditAddress(contact.area || "");
  }, [contact]);

  const onHandeleeditName = (e) => {
    seteditname(e.target.value);
    // console.log(e.target.value);
  };

  const onHandeleeditPhone = (e) => {
    seteditphone(e.target.value);
  };

  const onHandeleeditEmail = (e) => {
    seteditEmail(e.target.value);
  };

  const onHandeleeditAddr = (e) => {
    seteditAddress(e.target.value);
  };

  const onhandleEdit = (e) => {
    e.preventDefault();
    editname === "" ||
    editemail === "" ||
    editphone === "" ||
    editaddress === ""
      ? alert("Please fill details")
      : (onAddeditCont(contact.id, editname, editphone, editemail, editaddress),
        seteditname(""),
        seteditphone(""),
        seteditEmail(""),
        seteditAddress(""));
  };
  return (
    <>
      {" "}
      <div className="col-lg-6 mx-auto">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
      <img src={blob2} alt="blob2" className="cirlce2" /> */}

        <div className="add_content">
          <form onSubmit={onhandleEdit}>
            <label htmlFor="imagepicker" className="">
              <img src={usericon} alt="" className="profile" />
            </label>

            <input
              className="input"
              type="text"
              name="editname"
              value={editname}
              placeholder="Name"
              onChange={onHandeleeditName}
            />
            <input
              className="input mt-2"
              type="email"
              name="editemail"
              id="editemail"
              value={editemail}
              placeholder="Email"
              onChange={onHandeleeditEmail}
            />
            <input
              className="input mt-2 mb-2"
              type="number"
              name="editphonenumber"
              id="editphonenumber"
              value={editphone}
              placeholder="phone number"
              onChange={onHandeleeditPhone}
            />
            <input
              type="textarea"
              name="area"
              id="area"
              placeholder="address"
              value={editaddress}
              className="input"
              onChange={onHandeleeditAddr}
            />
            {/* <label>
              <input className="checkmark" type="checkbox" />
              <span className="text-right">Mark as Star</span>
            </label> */}
            <button
              className="text-uppercase button mt-5"
              type="submit"
              color="primary "
            >
              Update Contact
            </button>

            <button
              className="text-uppercase button mt-5"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditComponent;
