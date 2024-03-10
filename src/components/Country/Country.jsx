import React from 'react';
import './Country.css'

const Country = ({country}) => {
      // console.log(country);
      const {name, flags,population, area, ccn3} = country;
      return (
            <div className='country'>
                  <h5>Name : {name.common}</h5>
                  <img src={flags.png} alt="flags"  style={{height:'300px'}}/>
                  <p>Population : {population}</p>
                  <p>Area : {area}</p>
                  <p><small>Code : {ccn3}</small></p>
                  <button>Visited</button>
            </div>
      );
};

export default Country;