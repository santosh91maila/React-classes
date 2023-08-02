import logo from './logo.svg';
import './App.css';
import { Hero } from './Hero';
import HandleExceptions from './HandleExceptions';
import { Salary } from './Salary';
function App() {
  const data=['SuperMan','SpiderMan','Joker']
  return (
    <div className="App">
      {
        data.map((v)=>{
          return  <HandleExceptions>
                <Hero name={v} />
              </HandleExceptions>
        })
      }
     
    
      <HandleExceptions>
      <Salary name='E1' sal={20000} />
      </HandleExceptions>
      
        
      <HandleExceptions>
      <Salary name='E2' sal={-30000} />
      </HandleExceptions>
      

    </div>
  );
}

export default App;
