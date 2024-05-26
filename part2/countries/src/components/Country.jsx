const Country = ({ country, countryToShow, handleShowHide }) => {
  return (
    <li>
      {country.name.common + " "}
      <button onClick={() => handleShowHide(country)}>
        {countryToShow === country ? "hide" : "show"}
      </button>
    </li>
  );
};

export default Country;
