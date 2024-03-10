import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
      const [countries, setCountries] = useState([]);
      const [visitedCountries, setVisitedCountries] = useState([]);
      useEffect(() =>{
            fetch('https://restcountries.com/v3.1/all')
            .then (res => res.json())
            .then (data => setCountries(data));
      },[])

      
      const handleVisitedCountries = country => {
            console.log('add this to your country visited');
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);

      }




      
      return (
            <div>
                  <h3>Countries {countries.length}</h3>
                  <div>
                        <h3>visited Countries {visitedCountries.length}</h3>
                        <ul>
                              {
                                    visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                              }

                        </ul>
                  </div>
                  <div className='country-container'>
                  {
                        countries.map(country => <Country 
                              key={country.cca3} 
                              country = {country}
                              handleVisitedCountries ={handleVisitedCountries}
                              />)
                  }
                  </div>
            </div>
      );
};

export default Countries;