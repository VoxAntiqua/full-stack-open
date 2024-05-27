import CountryData from "./CountryData";
import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const [countryToShow, setCountryToShow] = useState(null);

  const handleShowHide = (country) => {
    if (country === countryToShow) {
      setCountryToShow(null);
    } else {
      setCountryToShow(country);
    }
  };

  useEffect(() => {
    if (countries.length === 1) {
      setCountryToShow(countries[0]);
    } else {
      setCountryToShow(null);
    }
  }, [countries]);

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countryToShow && countries.length > 1) {
    return (
      <div>
        <ul>
          {countries.map((c) => (
            <Country
              country={c}
              key={c.cca2}
              countryToShow={countryToShow}
              handleShowHide={handleShowHide}
            />
          ))}
        </ul>
        <CountryData country={countryToShow} />
      </div>
    );
  } else if (!countryToShow && countries.length > 1) {
    return (
      <ul>
        {countries.map((c) => (
          <Country
            country={c}
            key={c.cca2}
            countryToShow={countryToShow}
            handleShowHide={handleShowHide}
          />
        ))}
      </ul>
    );
  } else if (countryToShow && countries.length === 1) {
    return <CountryData country={countryToShow} />;
  }
};

export default Countries;
