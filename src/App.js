import React, { useState, useEffect, Fragment } from 'react';

 const App = () => {
 const [value, setValue] = useState(0);

 useEffect(() => {
   console.log("useEffect")
   console.log(value);
  //  document.title = `${value}`;
  if(value >= 1) {
    document.title = `${value}`;
  }
  else {
    document.title = "Count";
  }
 })

 console.log("render component");


  return (
    <Fragment>
   <h3>useEffect Example</h3>
   <h2>{value}</h2>
   <div>
   <button onClick = {() => setValue(value + 1)} type="button">Increase</button>
   </div>
   
    </Fragment>

  );
}

export default App;
