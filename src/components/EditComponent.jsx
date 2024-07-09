import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usericonedit from "/usericon.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blob1 from "/blob1.svg";
import blob2 from "/blob2.svg";
import { useContext } from "react";
import { contextCreate } from "../context";

const EditComponent = ({ onAddeditCont, contact, onCancel }) => {
  const { cont } = useContext(contextCreate);

  const [editname, seteditname] = useState("");
  const [editphone, seteditphone] = useState("");
  const [editemail, seteditEmail] = useState("");
  const [editaddress, seteditAddress] = useState("");
  const [profileEditImage, setProfileEditImage] = useState();
  const [profileEditImageUrl, setProfileEditImageUrl] = useState(null);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (contact) {
      seteditname(contact.name || "");
      seteditphone(contact.phone || "");
      seteditEmail(contact.email || "");
      seteditAddress(contact.area || "");
      setProfileEditImage(contact.profileImg || null);
      setProfileEditImageUrl(contact.profileImg || usericonedit);
      setCheck(contact.star || "");
    }
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
  const handleProfileImageEdit = (e) => {
    const fileEdit = e.target.files[0];
    if (fileEdit) {
      setProfileEditImage(fileEdit);
      setProfileEditImageUrl(URL.createObjectURL(fileEdit));
    }
  };

  const onHandeleeditCheck = () => {
    setCheck(!check);
    // setCheck(e, target);
  };

  const onhandleEdit = (e) => {
    e.preventDefault();

    if (editname === "" || editemail === "" || editphone === "") {
      toast.error("Please fill all details.");
      return;
    }

    // Check if email is being updated and already exists
    if (
      editemail !== contact.email &&
      cont.some((conti) => conti.email === editemail)
    ) {
      toast.error("Email is already in use.");
      return;
    }

    // Check if phone number is being updated and already exists
    if (
      editphone !== contact.phone &&
      cont.some((conti) => conti.phone === editphone && conti.id !== contact.id)
    ) {
      toast.error("Phone number is already in use.");
      return;
    }

    const addContactEdit = (profileEditImageBase64) => {
      onAddeditCont(
        contact.id,
        editname,
        editphone,
        editemail,
        editaddress,
        profileEditImageBase64,
        check
      );
      seteditname("");
      seteditphone("");
      seteditEmail("");
      seteditAddress("");
      setProfileEditImage(null);
      setProfileEditImageUrl(null);
      setCheck("");
      toast.success("Contact updated successfully!");
      navigate("/contacts");
    };
    if (profileEditImage) {
      if (profileEditImage instanceof Blob) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const profileEditImageBase64 = reader.result;
          addContactEdit(profileEditImageBase64);
        };
        reader.readAsDataURL(profileEditImage);
      } else {
        toast.error("Invalid image file.");
      }
    } else {
      addContactEdit(contact.profileImg); // or null, or
    }
  };
  return (
    <>
      <div className="col-lg-5 mx-auto">
        <div className="add_content">
          <img src={blob1} alt="blob1" className="cirlce1" />
          <form onSubmit={onhandleEdit} className="formcard">
            <label htmlFor="imagepickerEdit" className="">
              <img
                src={profileEditImageUrl || usericonedit}
                alt=""
                className="profile"
              />
              <input
                type="file"
                name="Editimage"
                id="imagepickerEdit"
                accept="image/*"
                multiple={false}
                onChange={handleProfileImageEdit}
                className="hidden"
              />
            </label>

            <input
              className="input  mt-4"
              type="text"
              name="editname"
              value={editname}
              placeholder="Name"
              onChange={onHandeleeditName}
            />
            <input
              className="input mt-3"
              type="email"
              name="editemail"
              id="editemail"
              value={editemail}
              placeholder="Email"
              onChange={onHandeleeditEmail}
            />
            <input
              className="input mt-3"
              type="tel"
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
              style={{ height: "80px" }}
              className="input mt-3 mb-2"
              onChange={onHandeleeditAddr}
            />
            <label className="mt-2">
              <input
                className="checkmark"
                type="checkbox"
                onChange={onHandeleeditCheck}
                checked={check}
                // {(!check) ? "checked" :"unchecked"}
              />
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
            <div
              className="d-flex w-100 justify-content-evenly"
              style={{ "column-gap": "50px" }}
            >
              <button
                className="text-uppercase button mt-5"
                type="submit"
                color="primary "
                style={{
                  padding: "15px",
                  fontSize: "18px",
                }}
              >
                Update
              </button>
              <button
                className="text-uppercase button mt-5"
                type="button"
                onClick={onCancel}
                style={{
                  padding: "15px",
                  fontSize: "18px",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
          <img src={blob2} alt="blob2" className="cirlce2" />
        </div>
      </div>
    </>
  );
};

export default EditComponent;
