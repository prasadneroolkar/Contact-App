import { useState } from "react";
import usericon from "/usericon.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddComponent = ({ onAddCont, verify }) => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);

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
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setProfileImageUrl(URL.createObjectURL(file));
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // Check if any field is empty
    if (name === "" || phone === "" || email === "") {
      toast.error("Please fill all details.");
      return;
    }

    // Check for existing email or phone number
    if (verify.some((contact) => contact.email === email)) {
      toast.error("Email is already in use.");
      return;
    }
    if (verify.some((contact) => contact.phone === phone)) {
      toast.error("Phone number is already in use.");
      return;
    }
    const addContact = (profileImageBase64) => {
      onAddCont(name, phone, email, address, profileImageBase64);

      setname(""); // Clear name field
      setphone(""); // Clear phone field
      setEmail(""); // Clear email field
      setAddress(""); // Clear area field
      setProfileImage(null);
      setProfileImageUrl(null);
      toast.success("Contact added successfully!");
    };
    if (profileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const profileImageBase64 = reader.result;
        addContact(profileImageBase64);
      };
      reader.readAsDataURL(profileImage);
    } else {
      addContact(null);
    }
  };

  return (
    <>
      <div className="col-lg-6 mx-auto">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}

        <div className="add_content">
          <form onSubmit={handleAdd}>
            <label htmlFor="imagepicker" className="">
              <img
                src={profileImageUrl || usericon}
                alt=""
                className="profile"
              />
              <input
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
              type="tel"
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
