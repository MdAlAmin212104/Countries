import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
      // console.log(country);
      const {name, flags,population, area, ccn3} = country;

      const [visited, setVisited] = useState(false)


      const handleVisited = () => {
            setVisited(!visited);
      }
      console.log(handleVisitedCountries);
      return (
            <div className={`country ${visited && 'visited'}`}>
                  <h2 style={{color : visited ? 'purple': 'red'}}>Name : {name.common}</h2>
                  <img src={flags.png} alt="flags" />
                  <p>Population : {population}</p>
                  <p>Area : {area}</p>
                  <p><small>Code : {ccn3}</small></p>
                  <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
                  <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
                  {visited && "I have visited this country"}
            </div>
      );
};

export default Country;