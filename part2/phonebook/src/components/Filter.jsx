const Filter = ({ searchQuery, handleSearchChange }) => {
  return (
    <div>
      filter shown with{" "}
      <input
        name="search-query-input"
        value={searchQuery}
        onChange={handleSearchChange}
      ></input>
    </div>
  );
};

export default Filter;
