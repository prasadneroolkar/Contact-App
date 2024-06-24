// import { useState } from "react";
import Container from "./components/Container";
import "./App.css";
import blob1 from "/blob1.svg";
import blob2 from "/blob2.svg";
import Contacts from "./components/Contacts";
import AddComponent from "./components/AddComponent";
import { useState } from "react";

function App() {
  const contacts = [];

  const [cont, setContact] = useState(contacts);

  const handleAdd = (contname, contphone, email, area) => {
    const newContacts = [
      ...cont,
      { name: contname, phone: contphone, email: email, area: area },
    ];
    setContact(newContacts);
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
        <Contacts listdata={cont} />
      </Container>
    </>
  );
}

export default App;
