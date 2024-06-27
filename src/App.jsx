import Container from "./components/Container";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
// import blob1 from "/blob1.svg";
// import blob2 from "/blob2.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./components/Contacts";
import AddComponent from "./components/AddComponent";
import { useEffect, useState } from "react";
import EditComponent from "./components/EditComponent";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  // const contacts = [];

  const [cont, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem("ContactList")) || [];
  });

  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    localStorage.setItem("ContactList", JSON.stringify(cont));
  }, [cont]);

  const handleAdd = (contname, contphone, email, area, profile) => {
    const newContacts = [
      ...cont,
      {
        id: uuidv4(),
        name: contname,
        phone: contphone,
        email: email,
        area: area,
        profileImg: profile,
      },
    ];
    setContact(newContacts);

    // toast.success("Contact added successfully!");
  };

  const updateEdit = (cid, contname, contphone, email, area, prof) => {
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
    console.log(editedData);
  };
  const cancelEdit = () => {
    setEditContact([]);
  };

  return (
    <>
      <nav>
        <p>Contact App</p>
      </nav>
      <Container>
        <AddComponent onAddCont={handleAdd} verify={cont} />
        <EditComponent
          contact={editContact}
          onAddeditCont={updateEdit}
          onCancel={cancelEdit}
          verifyEdit={cont}
        />
      </Container>
      <Container>
        <Contacts
          listdata={cont}
          onDeleteData={handleDel}
          onEditData={handleEdit}
        />
      </Container>
      <ToastContainer />
      {/* <Router>
        <nav>
          <Link to="/">Add Contact</Link>
          <Link to="/contacts">View Contacts</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <AddComponent onAddCont={handleAdd} />
              </Container>
            }
          />
          <Route
            path="/contacts"
            element={
              <Container>
                <Contacts listdata={cont} onDeleteData={handleDel} />
              </Container>
            }
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
