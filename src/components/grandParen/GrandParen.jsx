import React from 'react';
import Parent from '../Parent/Parent';

const GrandParen = ({handleClick}) => {
      return (
            <div>
                  <h1>this is GrandParen</h1>
                  <Parent
                  handleClick = {handleClick}/>
            </div>
      );
};

export default GrandParen;