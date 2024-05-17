import React, { useEffect, useState } from 'react';

const B1 = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    document.title = inputValue;
  }, [inputValue]); 

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
        <h1>bt1</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập tiêu đề mới"
      />
    </div>
  );
};

export default B1;
