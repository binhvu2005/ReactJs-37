import React, { useEffect, useState } from 'react';

const B2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'so lan da click'+count;
  }, [count]); 
const handleClick = () => {
    setCount(count + 1);
    
}
 

  return (
    <div>
        <h1>bt2</h1>
     <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default B2;
