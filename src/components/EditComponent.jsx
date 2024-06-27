import { useState, useEffect } from "react";
import usericonedit from "/usericon.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditComponent = ({ onAddeditCont, contact, onCancel, verifyEdit }) => {
  const [editname, seteditname] = useState("");
  const [editphone, seteditphone] = useState("");
  const [editemail, seteditEmail] = useState("");
  const [editaddress, seteditAddress] = useState("");
  const [profileEditImage, setProfileEditImage] = useState(null);
  const [profileEditImageUrl, setProfileEditImageUrl] = useState(null);

  useEffect(() => {
    if (contact) {
      seteditname(contact.name || "");
      seteditphone(contact.phone || "");
      seteditEmail(contact.email || "");
      seteditAddress(contact.area || "");
      setProfileEditImage(contact.profileImg || null);
      setProfileEditImageUrl(contact.profileImg || usericonedit);
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

  const onhandleEdit = (e) => {
    e.preventDefault();

    if (editname === "" || editemail === "" || editphone === "") {
      toast.error("Please fill all details.");
      return;
    }

    // Check if email is being updated and already exists
    if (
      editemail !== contact.email &&
      verifyEdit.some((cont) => cont.email === editemail)
    ) {
      toast.error("Email is already in use.");
      return;
    }

    // Check if phone number is being updated and already exists
    if (
      editphone !== contact.phone &&
      verifyEdit.some(
        (cont) => cont.phone === editphone && cont.id !== contact.id
      )
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
        profileEditImageBase64
      );
      seteditname("");
      seteditphone("");
      seteditEmail("");
      seteditAddress("");
      setProfileEditImage(null);
      setProfileEditImageUrl(null);
      toast.success("Contact updated successfully!");
    };
    if (profileEditImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const profileEditImageBase64 = reader.result;
        addContactEdit(profileEditImageBase64);
      };
      reader.readAsDataURL(profileEditImage);
    } else {
      // Handle case where no profile image is selected
      addContactEdit(contact.profileImg); // or null, or any default value you want to use
    }
  };
  return (
    <>
      {" "}
      <div className="col-lg-6 mx-auto">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
      <img src={blob2} alt="blob2" className="cirlce2" /> */}

        <div className="add_content">
          <form onSubmit={onhandleEdit}>
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
