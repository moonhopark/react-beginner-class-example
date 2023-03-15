import React, { useState } from 'react';

const initialState = ['Moonho', 'Park'];

const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);

  const handleClick = () => {
    // persons.push('Gildong');
    // persons.push('Hong');
    // setPersons(persons);
    const newPersons = [...persons];
    newPersons.push('Gildong');
    newPersons.push('Hong');
    setPersons(newPersons);
  };

  console.log('ArrayUseState Render');

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};

export default ArrayUseState;
