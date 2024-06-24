import { useState } from "react";
import usericon from "/usericon.svg";

const AddComponent = () => {
  const contacts = [];

  const [cont, setcontact] = useState();
  const [name, setname] = useState("");
  const [phone, setphone] = useState();

  const handleAdd = () => {};

  const onHandeleChange = (e) => {
    setname(e.target.value);
    console.log(e.target.value);
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
              name="name"
              id="name"
              value={name}
              placeholder="Name"
              onChange={onHandeleChange}
            />
            {/* <input
              className="input mt-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            /> */}
            <input
              className="input mt-2 mb-2"
              type="tel"
              name="number"
              id="phonenumber"
              placeholder="phone number"
            />
            {/* <input
              type="textarea"
              name="area"
              id="area"
              placeholder="address"
              className="input"
            /> */}
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
