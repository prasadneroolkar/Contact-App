// import { useState } from "react";

import "./App.css";
import blob1 from "/blob1.svg";
import blob2 from "/blob2.svg";
import usericon from "/usericon.svg";

import { FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

function App() {
  return (
    <>
      <nav>
        <p>Contact App</p>
      </nav>
      <div className="container">
        <div className="row">
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
                  placeholder="Name"
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
                  name="number"
                  id="phonenumber"
                  placeholder="phone number"
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
                >
                  Add Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}

            <div className="contact_content">
              <div className="contact-details">
                <FaStar />
                <img src={usericon} alt="" className="profile" />
                <div className="contact-desc">
                  <p>walter homes</p>
                  <p>walter homes</p>
                  <p>walter homes</p>
                </div>
              </div>
              <div className="contact_op">
                <MdDelete />
                <MdEdit className="icon " color="#54eafe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
