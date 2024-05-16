const PersonForm = ({ addName, newName, handleNameChange }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name:{" "}
        <input name="name-input" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
