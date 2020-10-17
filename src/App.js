import React, { useState, useEffect, Fragment } from 'react';

 const App = () => {
 const [value, setValue] = useState(0);

 const reset = () => {
   setValue(0);
 }

 const complexIncrease =()=> {
  //  if you click two times, then it's only increase one time +1 because it doesn't have old state preserve
  //  setTimeout(() => {
  //    setValue(value+1)
  //  }, 2000)

  // preserve old state 

  setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      } )
  }, 2000)
 }

  return (
    <Fragment>
   <h3>Counter Example with useState</h3>
   <h2>{value}</h2>
   <div>
   <button onClick = {() => setValue(value - 1)} type="button">Decrease</button>
   <button onClick = {reset} type="button">Reset</button>
   <button onClick = {() => setValue(value + 1)} type="button">Increase</button>
   <button onClick = {complexIncrease} type="button">Complex Increase</button>
   </div>
   
    </Fragment>

  );
}

export default App;
