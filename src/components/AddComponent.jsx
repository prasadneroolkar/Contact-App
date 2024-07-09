import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import usericon from "/usericon.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blob1 from "/blob1.svg";
import blob2 from "/blob2.svg";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { useContext } from "react";
import { contextCreate } from "../context";

const AddComponent = () => {
  const { cont, handleAdd } = useContext(contextCreate);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const navigate = useNavigate();

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const checkRef = useRef(false);
  const profimgRef = useRef();

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageUrl(URL.createObjectURL(file));
    } else {
      setProfileImageUrl(null);
    }
  };

  const handleAddsubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const check = checkRef.current.checked;
    const file = profimgRef.current.files[0];

    // Check if any field is empty
    if (name === "" || phone === "" || email === "") {
      toast.error("Please fill all details.");
      return;
    }

    // Check for existing email or phone number
    if (cont.some((contact) => contact.email === email)) {
      toast.error("Email is already in use.");
      return;
    }
    if (cont.some((contact) => contact.phone === phone)) {
      toast.error("Phone number is already in use.");
      return;
    }
    const addContact = (profileImageBase64) => {
      handleAdd(name, phone, email, address, profileImageBase64, check);

      nameRef.current.value = "";
      phoneRef.current.value = "";
      emailRef.current.value = "";
      addressRef.current.value = "";
      checkRef.current.checked = "false";
      profimgRef.current.value = "";

      setProfileImageUrl(null);

      toast.success("Contact added successfully!");

      navigate("/contacts");
    };
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const profileImageBase64 = reader.result;
        addContact(profileImageBase64);
      };
      reader.readAsDataURL(file);
    } else {
      addContact(null);
    }
  };

  return (
    <>
      <div className="col-lg-5 mx-auto">
        <div className="add_content">
          <img src={blob1} alt="blob1" className="cirlce1" />
          <form className="formcard" onSubmit={handleAddsubmit}>
            <label htmlFor="imagepicker" className="">
              <img
                src={profileImageUrl || usericon}
                alt=""
                className="profile"
              />
              <input
                ref={profimgRef}
                type="file"
                name="image"
                id="imagepicker"
                accept="image/*"
                multiple={false}
                onChange={handleProfileImageChange}
                className="hidden"
              />
            </label>

            <input
              className="input mt-4"
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="input mt-3"
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="Email"
            />
            <input
              className="input mt-3"
              type="tel"
              name="phonenumber"
              id="phonenumber"
              ref={phoneRef}
              placeholder="phone number"
            />
            <input
              type="textarea"
              name="area"
              id="area"
              placeholder="address"
              ref={addressRef}
              className="input mt-3 mb-2"
              style={{ height: "80px" }}
            />
            <label className="mt-2">
              <input className="checkmark" type="checkbox" ref={checkRef} />
              <span
                className="text-right"
                style={{
                  color: "#f9f9f9",
                  fontWeight: "400",
                  letterSpacing: "1px",
                }}
              >
                Mark as Star
              </span>
            </label>

            <button
              className="text-uppercase button mt-5"
              type="submit"
              color="primary "
              style={{
                padding: "15px",
                fontSize: "18px",
              }}
            >
              Add Contact
            </button>
          </form>
          <img src={blob2} alt="blob2" className="cirlce2" />
          <Link to="/contacts" className="view-contacts-link">
            <GrView /> View Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
