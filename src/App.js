import React, { useState, useEffect, Fragment } from 'react';

 const App = () => {
   const [user, setUser] = useState (
     {
       name: "Ali Dhuniya",
       age: 19,
       message: "random message"
     }
   )

   const { name, age, message} = user;

   const handleMessageChange = () => {
      setUser({...user, message: "Hello World"});
   }

  return (
    <Fragment>
   <h1>Spread Operator - objects with useState</h1>
   <div>
     <h1>Name: {name}</h1>
     <h2>Age: {age}</h2>
     <h3>Message: {message}</h3>
   </div>
   <button onClick = {handleMessageChange} type="button">Change Message</button>
    </Fragment>

  );
}

export default App;
