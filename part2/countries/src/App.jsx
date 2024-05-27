import { useEffect, useState } from "react";
import countryService from "./services/countries";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    countryService.getAll().then((countryData) => {
      setCountries(countryData);
    });
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCountries = countries
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div>
      <Filter searchQuery={searchQuery} handleInputChange={handleInputChange} />
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;
