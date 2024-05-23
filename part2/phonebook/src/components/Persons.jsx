import Person from "./Person";

const Persons = ({ persons, handleRemove }) => {
  if (persons) {
    return persons.map((person) => (
      <Person person={person} handleRemove={handleRemove} key={person.name} />
    ));
  }
};

export default Persons;
