const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
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
