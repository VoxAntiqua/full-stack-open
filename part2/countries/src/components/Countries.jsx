import CountryData from "./CountryData";

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 1) {
    return <CountryData country={countries[0]} />;
  }
  return (
    <ul>
      {countries.map((c) => (
        <li key={c.cca2}>{c.name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
