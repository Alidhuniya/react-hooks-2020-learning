import React, { useState, useEffect, Fragment } from 'react';

 const App = () => {
   const [peoples, setPeoples] = useState ([
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
   ])

   const removePeople = (id) => {
     let peopleRemoved = peoples.filter((person) => person.id !== id);
     setPeoples(peopleRemoved);
   }

  return (
    <Fragment>
   <h1>Array of Peoples</h1>
   {
     peoples.map(people => {
       const { id, name } = people;
       return (
         <div key={id}>
          <h3>{name}</h3>
          <button type="button" onClick={() => removePeople(id)}>Clear People</button>
         </div>
         
       )
     })
   }
   <button type="button" onClick={() => setPeoples([])}>Clear All Peoples</button>
    </Fragment>

  );
}

export default App;
