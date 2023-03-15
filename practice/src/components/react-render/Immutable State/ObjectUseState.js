import React, { useState } from 'react';

const initialState = {
  firstName: 'Moonho',
  lastName: 'Park',
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const handleClickChangeName = () => {
    // person.fname = 'Gildong';
    // person.lane = 'Hong';
    // setPerson(person);
    const newPerson = { ...person };
    newPerson.firstName = 'Gildong';
    newPerson.lastName = 'Hong';
    setPerson(newPerson);
  };

  console.log('ObjectUseState Render');

  return (
    <div>
      <button onClick={handleClickChangeName}>
        {person.firstName} {person.lastName}
      </button>
    </div>
  );
};

export default ObjectUseState;
