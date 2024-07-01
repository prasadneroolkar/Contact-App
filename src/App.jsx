import Container from "./components/Container";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./components/Contacts";
import AddComponent from "./components/AddComponent";
import { useEffect, useState } from "react";
import EditComponent from "./components/EditComponent";
import nocontact from "/nocontacts.jpg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  // const contacts = [];

  const [cont, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem("ContactList")) || [];
  });

  const [editContact, setEditContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("ContactList", JSON.stringify(cont));
  }, [cont]);

  const handleAdd = (contname, contphone, email, area, profile, star) => {
    console.log(star);
    const newContacts = [
      ...cont,
      {
        id: uuidv4(),
        name: contname,
        phone: contphone,
        email: email,
        area: area,
        profileImg: profile,
        star: star,
      },
    ];
    setContact(newContacts);
    // console.log(newContacts);
    // toast.success("Contact added successfully!");
  };

  const updateEdit = (cid, contname, contphone, email, area, prof, star) => {
    const updatedCont = cont.map((elem) => {
      console.log(elem);

      return elem.id === cid
        ? {
            ...elem,
            name: contname,
            phone: contphone,
            email,
            area,
            profileImg: prof,
            star: star,
          }
        : elem;
    });

    setContact(updatedCont);
    setEditContact(null);
  };

  const handleDel = (ide) => {
    const deletedData = cont.filter((ele) => {
      return ele.id !== ide;
    });
    setContact(deletedData);
  };

  const handleEdit = (ide) => {
    const editedData = cont.find((ele) => {
      return ele.id === ide;
    });
    setEditContact(editedData);
    // console.log(editedData);
  };
  const cancelEdit = () => {
    setEditContact([]);
    navigate("/contacts");
  };

  return (
    <>
      <nav className="nav">
        <p>Contact App</p>
        {/* <Link to="/">Home</Link> <Link to="/contacts">Contacts</Link> */}
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <AddComponent onAddCont={handleAdd} verify={cont} />
            </Container>
          }
        />
        <Route
          path="/edit/:edit"
          element={
            <Container>
              <EditComponent
                contact={editContact}
                onAddeditCont={updateEdit}
                onCancel={cancelEdit}
                verifyEdit={cont}
              />
            </Container>
          }
        />
        <Route
          path="/contacts"
          element={
            <Container>
              {cont.length === 0 ? (
                <img
                  src={nocontact}
                  alt="No Contacts"
                  style={{
                    margin: "auto",
                    width: "500px",
                    height: "100%",
                  }}
                />
              ) : (
                <Contacts
                  listdata={cont}
                  onDeleteData={handleDel}
                  onEditData={handleEdit}
                />
              )}
            </Container>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
