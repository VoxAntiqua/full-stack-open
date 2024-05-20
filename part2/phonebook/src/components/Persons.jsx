import Person from "./Person";

const Persons = ({ persons, handleRemove }) => {
  return persons.map((person) => (
    <Person person={person} handleRemove={handleRemove} key={person.name} />
  ));
};

export default Persons;
