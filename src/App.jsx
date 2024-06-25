// import { useState } from "react";
import Container from "./components/Container";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import blob1 from "/blob1.svg";
import blob2 from "/blob2.svg";
import Contacts from "./components/Contacts";
import AddComponent from "./components/AddComponent";
import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  // const contacts = [];

  const [cont, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem("ContactList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("ContactList", JSON.stringify(cont));
  }, [cont]);

  const handleAdd = (contname, contphone, email, area) => {
    const newContacts = [
      ...cont,
      {
        id: uuidv4(),
        name: contname,
        phone: contphone,
        email: email,
        area: area,
      },
    ];
    setContact(newContacts);
  };

  const handleDel = (ide) => {
    const deletedData = cont.filter((ele) => {
      return ele.id !== ide;
    });
    setContact(deletedData);
  };

  return (
    <>
      <nav>
        <p>Contact App</p>
      </nav>
      <Container>
        <AddComponent onAddCont={handleAdd} />
      </Container>
      <Container>
        <Contacts listdata={cont} onDeleteData={handleDel} />
      </Container>

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
