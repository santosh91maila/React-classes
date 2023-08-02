import logo from './logo.svg';
import './App.css';
import { Hellow } from './Hellow';
import {PropsCheck} from './PropsCheck'
import { CountInc } from './Count';
function App() {
  return (
    <div className="App">
      <Hellow />
      <PropsCheck />
      <PropsCheck name='uv' />
      <CountInc />
    </div>
  );
}

export default App;
