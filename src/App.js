import React, { useState, useEffect, Fragment } from 'react';

 const App = () => {
   const [value, setValue] = useState("change me");

   const handleClick = () => {
    //  if(value === "change me") {
    //    setValue("changed");
    //  }
    //  else {
    //    setValue("don't changed");
    //  }
    
     value ? setValue("changed") : setValue("don't change")
   }

  return (
    <Fragment>
    <h3>{value}</h3>
    <button type="button" onClick={handleClick}>Click to Change</button>
    </Fragment>

  );
}

export default App;
