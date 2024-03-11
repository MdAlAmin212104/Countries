import React, { useState } from 'react';

const Parent = ({handleClick}) => {
      const [score, setScore] = useState(12);
      console.log(handleClick);
      return (
            <div>
                 <h2>this is Parent</h2>
                 <button onClick={()=> handleClick(score)}>Click Here</button> 
            </div>
      );
};

export default Parent;