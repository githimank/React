import logo from './logo.svg';
import './App.css'
import Greet  from './component/1_Greet'
// import {Greet}  from './component/Greet'; // named import
import Welcome from './component/2_Welcome'
import Hello from './component/3_hello'

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;