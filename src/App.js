import logo from './logo.svg';
import './App.css'
import Greet  from './component/1_Greet'
// import {Greet}  from './component/Greet'; // named import
import Welcome from './component/2_Welcome'
import Hello from './component/3_hello'
import Message from './component/4_Message';
import Counter from './component/5_Counter';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Tarun">
        <p1>THis is children props</p1>
      </Greet>
      <Welcome name="Himank" superName="Red Ranger">
        <button>Action</button>
      </Welcome>
      <Welcome name="Pawan" superName="Blue Ranger">
        <button>Action</button>
      </Welcome>
      <Hello/> */}
      {/* // state example
      <Message >onClick</Message> */}
      // setstate counter app example
      <Counter></Counter>
    </div>
  );
}

export default App;