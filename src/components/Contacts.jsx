import usericon from "/usericon.svg";
import { FaStar } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
const Contacts = ({ listdata, onDeleteData }) => {
  const onhandleDel = (index) => {
    onDeleteData(index);
  };
  return (
    <>
      <div className="col-lg-12">
        {/* <img src={blob1} alt="blob1" className="cirlce1" />
            <img src={blob2} alt="blob2" className="cirlce2" /> */}
        {listdata.map((item) => {
          return (
            <div className="contact_content" key={item.id}>
              <div className="contact-details">
                <FaStar />
                <img src={usericon} alt="" className="profile" />
                <div className="contact-desc">
                  <p>{item.name}</p>
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                  <p>{item.area}</p>
                </div>
              </div>
              <div className="contact_op">
                <button onClick={() => onhandleDel(item.id)}>
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
