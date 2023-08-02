import logo from './logo.svg';
import './App.css';
import React from 'react';
import NitList from 'nit-list'
import TableOne,{TableTwo} from 'my-own-table'
function App() {
  const student={
    name:'s1',
    marks:300,
    rno:1
  }
  const players=[
    {
      name:'Sachin',
      runs:20000
    },
    {
      name:'Dhoni',
      runs:10000
    }
  ]
  return (
    <div className="App">
        <NitList title="Students" data={['S1','S2','S3']} />
        <TableTwo title="My Details" data={student} />
        <TableOne title="Players" data={players} headers={['Name','Runs']} columns={['name','runs']} />
    </div>
  );
}

export default App;
