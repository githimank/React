import logo from './logo.svg';
import './App.css';
import Greet  from './component/Greet';
import Welcome from './component/Welcome';
// import {Greet}  from './component/Greet';


function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
