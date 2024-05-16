import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    console.log(persons.some((p) => p.name === newName));
    if (persons.some((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
      };
      setPersons(persons.concat(personObject));
      console.log(persons);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
