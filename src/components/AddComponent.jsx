import { useState } from "react";
import usericon from "/usericon.svg";

const AddComponent = ({ onAddCont }) => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");

  const onHandeleName = (e) => {
    setname(e.target.value);
    console.log(e.target.value);
  };

  const onHandelePhone = (e) => {
    setphone(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    onAddCont(name, phone);
  };

  return (
    <>
      <div className="col-lg-6 mx-auto">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}

        <div className="add_content">
          <form action="">
            <label htmlFor="imagepicker" className="">
              <img src={usericon} alt="" className="profile" />
            </label>

            <input
              className="input"
              type="text"
              id="name"
              placeholder="Name"
              onChange={onHandeleName}
            />
            <input
              className="input mt-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="input mt-2 mb-2"
              type="number"
              id="phonenumber"
              placeholder="phone number"
              onChange={onHandelePhone}
            />
            <input
              type="textarea"
              name="area"
              id="area"
              placeholder="address"
              className="input"
            />
            <label>
              <input className="checkmark" type="checkbox" />
              <span className="text-right">Mark as Star</span>
            </label>
            <button
              className="text-uppercase button mt-5"
              type="submit"
              color="primary "
              onClick={handleAdd}
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
