import React from "react";
import { useParams } from "react-router-dom";

function CountryDetails(allCountries) {
  const params = useParams();
  let alpha = params
  console.log("HELLO", alpha)

  return (
    <div>
      {/* <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
     */}
    </div>
  );
}

export default CountryDetails;
