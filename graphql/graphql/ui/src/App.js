import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [name,setName]=useState('Good Morning');
  const query = `
  query ExampleQuery($name:String) {
    hello(name:$name)
    }
`;
  const fnClick=async()=>{
    const response = await fetch('http://localhost:2020/graphql', {
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
        query,
        variables: { name:'Sachin' }
    })
   })
   const rsponseBody = await response.text();
   setName(rsponseBody)
  }

  return (
    <div className="App">
        <h1>{name}</h1>
        <button onClick={fnClick}>click</button>
    </div>
  );

}

export default App;
