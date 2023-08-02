import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from './Test';
function App() {
  const [name,setName]=useState<string>('Sachin')
  const obj={
    name:'Sachin',
    runs:2000
  }
  const fn1=(eve:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(eve.target)
  }
  const fn2=(eve:any)=>{

  }
  return (
    <div className="App">
       Hellow {name}
       <Test 
          name='Sachin'
          amount='Sachin' 
          opt="S"
          isShow={true}
          sachinObj={obj}
          players={[10,20,'Sachin']}
          data={[obj]}
          f1={fn1}
          f2={fn2}
          myStyles={{color:'red',fontSize:'30px'}}
          ></Test>
    </div>
  );
}

export default App;
