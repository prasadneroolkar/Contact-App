import { useState } from "react";
import usericon from "/usericon.svg";

const AddComponent = ({ onAddCont }) => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const onHandeleName = (e) => {
    setname(e.target.value);
  };

  const onHandelePhone = (e) => {
    setphone(e.target.value);
  };

  const onHandeleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandeleAddr = (e) => {
    setAddress(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    name === "" || email === "" || phone === "" || address === ""
      ? alert("Please fill details")
      : (onAddCont(name, phone, email, address),
        setname(""),
        setphone(""),
        setEmail(""),
        setAddress(""));
  };

  return (
    <>
      <div className="col-lg-6 mx-auto">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}

        <div className="add_content">
          <form onSubmit={handleAdd}>
            <label htmlFor="imagepicker" className="">
              <img src={usericon} alt="" className="profile" />
            </label>

            <input
              className="input"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={onHandeleName}
            />
            <input
              className="input mt-2"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={onHandeleEmail}
            />
            <input
              className="input mt-2 mb-2"
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={phone}
              placeholder="phone number"
              onChange={onHandelePhone}
            />
            <input
              type="textarea"
              name="area"
              id="area"
              placeholder="address"
              value={address}
              className="input"
              onChange={onHandeleAddr}
            />
            <label>
              <input className="checkmark" type="checkbox" />
              <span className="text-right">Mark as Star</span>
            </label>
            <button
              className="text-uppercase button mt-5"
              type="submit"
              color="primary "
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
