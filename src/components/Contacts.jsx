import usericon from "/usericon.svg";
import { FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
const Contacts = ({ listdata }) => {
  return (
    <>
      <div className="col-lg-12">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}
        {listdata.map((item, index) => {
          return (
            <div className="contact_content" key={index}>
              <div className="contact-details">
                <FaStar />
                <img src={usericon} alt="" className="profile" />
                <div className="contact-desc">
                  <p>{item.name}</p>
                  <p>{item.phone}</p>
                  {/* <p>walter homes</p> */}
                </div>
              </div>
              <div className="contact_op">
                <button>
                  <MdDelete />
                </button>
                <button>
                  <MdEdit className="icon " color="#54eafe" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
