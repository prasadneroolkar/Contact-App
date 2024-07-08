import usericon from "/usericon.svg";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import blob1 from "/blob1.svg";
import blob2 from "/blob2.svg";
import { useState } from "react";
import { useContext } from "react";
import { contextCreate } from "../context";

const Contacts = ({ onDeleteData, onEditData }) => {
  const { cont } = useContext(contextCreate);
  const [searchTerm, setSearchTerm] = useState("");

  const searchItem = cont.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const onhandleDel = (index) => {
    onDeleteData(index);
  };

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const linkText = isMobile ? "+" : "Add Contact";

  const onhandleEdit = (index) => {
    onEditData(index);
  };
  return (
    <>
      <div className="col-lg-9 mx-auto add_content">
        <div className="d-flex justify-content-center">
          <input
            className="input w-50 mb-5"
            type="text"
            placeholder="Search.."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <img src={blob1} alt="blob1" className="cirlce4" />
        {searchItem.length === 0 && (
          <div className="no-results w-75 m-auto">
            <p>No contacts found matching {searchTerm}</p>
          </div>
        )}
        {searchItem.map((item) => {
          return (
            <div className="contact_content mb-4" key={item.id}>
              <div className="contact-details">
                {item.star === false ? <FaRegStar /> : <FaStar />}

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

                <div className="iconbtn">
                  <Link
                    to={`/edit/${item.id}`}
                    // style={{ marginRight: "30px" }}
                    onClick={() => onhandleEdit(item.id)}
                  >
                    <MdEdit className="icon" color="#54eafe" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <img src={blob2} alt="blob2" className="cirlce3" />

        <Link to="/" className="fab sticky-bottom d-print-inline-flex">
          {linkText}
        </Link>
      </div>
    </>
  );
};

export default Contacts;
