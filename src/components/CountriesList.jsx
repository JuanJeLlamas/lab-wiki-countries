import { Link } from 'react-router-dom';

function CountriesList({ allCountries }) {
    console.log(allCountries)
  return (
    <div>
      <p>Probando CountriesList</p>
  
      {allCountries.map((eachCountry) => {
        return (
          <div key={eachCountry.alpha3Code}> 
            <Link 
              className="list"
              to={`/${eachCountry.alpha3Code}`}
            >
              {eachCountry.name.official }
              <br/>
              <img  src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt={eachCountry.alpha2Code} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;

 
 
 
  




