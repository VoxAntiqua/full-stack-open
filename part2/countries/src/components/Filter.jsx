const Filter = ({ searchQuery, handleInputChange }) => {
  return (
    <div>
      find countries{" "}
      <input value={searchQuery} onChange={handleInputChange}></input>
    </div>
  );
};

export default Filter;
