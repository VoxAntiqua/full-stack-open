const Person = ({ person, handleRemove }) => {
  return (
    <div>
      {person.name} {person.number}{" "}
      <button onClick={handleRemove}>delete</button>
    </div>
  );
};

export default Person;
