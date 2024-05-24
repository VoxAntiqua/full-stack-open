const Countries = ({ countries }) => {
  return (
    <ul>
      {countries.map((c) => (
        <li key={c.cca2}>{c.name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
