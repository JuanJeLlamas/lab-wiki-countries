import React, { useState } from 'react';
import { useEffect } from "react"
import './App.css'
import  {Route , Routes} from "react-router-dom"
// import countries from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountriesDetails';
// import axios, { all } from "axios"
import countries from "./countries.json"
function App() {


  const [allCountries, setallCountries] = useState(countries);

//   useEffect(() => {
//     // buscar la info de la API
//     // usaremos axios para buscar la data (podrias usar fetch)
//     // el momento en el que SIEMPRE debemos contactar a una API para recibir data es componentDidMount
//     axios.get("https://ih-countries-api.herokuapp.com/countries")
//     .then((response) => {
//       console.log(response.data)
//       setallCountries(response.data.name)
//     })
//     .catch(() => {

//     })
//   }, [])



//   return (
//     <div className="App">
      
//       <Navbar/>
//       <CountriesList allCountries={allCountries}/>
//     </div>
//   );
// }


return (
<div>
<Navbar/>
<CountriesList allCountries={allCountries}/>

<CountryDetails/>

</div>



)
}
export default App;
