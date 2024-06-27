import usericon from "/usericon.svg";
import { FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
const Contacts = ({ listdata, onDeleteData, onEditData }) => {
  const onhandleDel = (index) => {
    onDeleteData(index);
  };

  const onhandleEdit = (index) => {
    onEditData(index);
  };
  return (
    <>
      <div className="col-lg-10 mx-auto">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}
        {listdata.map((item) => {
          return (
            <div className="contact_content" key={item.id}>
              <div className="contact-details">
                <FaStar />
                <img
                  src={item.profileImg || usericon}
                  alt=""
                  className="profile"
                />
                <div className="contact-desc">
                  <p className="name">{item.name}</p>
                  <p className="phone" style={{ opacity: "80%" }}>
                    {item.phone}
                  </p>
                  <p className="mail" style={{ opacity: "50%" }}>
                    {item.email}
                  </p>
                  <p className="location" style={{ opacity: "70%" }}>
                    {item.area}
                  </p>
                </div>
              </div>
              <div className="contact_op">
                <div className="iconbtn">
                  <MdDelete
                    onClick={() => onhandleDel(item.id)}
                    color="#FF6370"
                    className=" icon"
                    style={{ zIndex: "1" }}
                  />
                </div>
                <div className="iconbtn" style={{ marginRight: "30px" }}>
                  <MdEdit
                    className="icon"
                    color="#54eafe"
                    onClick={() => onhandleEdit(item.id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
