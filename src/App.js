import logo from './logo.svg';
import './App.css'
import Greet from './component/1_Greet'
// import {Greet}  from './component/Greet'; // named import
import Welcome from './component/2_Welcome'
import Hello from './component/3_hello'
import Message from './component/4_Message';
import Counter from './component/5_Counter';
import FunctionClick from './component/6_FuntionalClick';
import ClassClick from './component/7_ClassClick';
import BindingEvent from './component/8_BindingEvent';
import ParentComponent from './component/9.1_ParentComponent';
import UserGreeting from './component/10_UserGreeting';
import ListRendering from './component/11_ListRendering';
import NameList from './component/11.1_NameList';
import MyStyleSheet from './component/12_MyStyleSheet';
import InlineStyle from './style/inlineStyle';
import './appStyle.css'
import styless from './appStyle.module.css'
import Form from './component/13_Form';



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
      {/* // setstate counter app example
      <Counter></Counter> */}
      {/* // event handling in function & class
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {  /*  // bind event handling in class
      <BindingEvent>    </BindingEvent>*/}
      {  /* // method as props from child to parent
      <ParentComponent></ParentComponent> */}
      {/* // conditional rendering
      // <UserGreeting></UserGreeting> */}
      {/* <ListRendering></ListRendering>
      // list rendering
      <NameList></NameList> */}
      {/* // style sheet
      <MyStyleSheet primary={true} ></MyStyleSheet>
      //Inline style
      <InlineStyle></InlineStyle>
      // css module
       <h1 className={'error'}>error</h1> 
      <h1 className={styless.success}>Success</h1> */}
      {/* //Form */}
      <Form></Form>
    </div>
  );
}

export default App;