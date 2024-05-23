import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const displayMessage = (message, isError) => {
    setMessage(message);
    setIsError(isError);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleRemove = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
          displayMessage(`Removed ${person.name}`, false);
        })
        .catch((error) => {
          displayMessage(
            `${person.name} has already been removed from server`,
            true
          );
          // local state mismatch with server, so reload data from server
          personService
            .getAll()
            .then((initialPersons) => setPersons(initialPersons));
        });
    }
  };

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    // Check if name exists in phonebook
    const personToUpdate = persons.find((p) => p.name === newName);
    if (personToUpdate !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        // id stays the same between updates
        personObject.id = personToUpdate.id;
        personService
          .update(personToUpdate.id, personObject)
          .then(() => {
            setPersons(
              Object.assign([], persons, {
                [persons.indexOf(personToUpdate)]: personObject,
              })
            );
            setNewName("");
            setNewNumber("");
            displayMessage(`Updated ${personObject.name}`, false);
          })
          .catch((error) => {
            setNewName("");
            setNewNumber("");
            displayMessage(
              `${personObject.name} has already been removed from server`,
              true
            );
            // local state mismatch with server, so reload data from server
            personService
              .getAll()
              .then((initialPersons) => setPersons(initialPersons));
          });
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        displayMessage(`Added ${returnedPerson.name}`, false);
      });
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={isError} />
      <Filter
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
