import React, { useState, useEffect } from 'react';


const  App = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async() => {
    const ftch = await fetch("https://api.randomuser.me/");
    const data = await ftch.json();
    const item = data.results[0]
    // console.log(item);
    setPerson(item)
    setLoading(false);
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
     {loading ? <div>loading</div> : person && <div>{person.name.first}</div>}
    </div>
  );
}

export default App;