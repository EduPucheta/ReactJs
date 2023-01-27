import logo from './logo.svg';
import './App.css';
import Button from './components/button';  
import Button2 from './components/button2';
import Modal from "./components/modal";
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <h3>
          Hola, esta es mi primera app de React Js.
        </h3>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        <Modal/>
        <Button title={"Hacé click"}/>
        <Button title={"Hacé click acá"}/>
        <Button2/>
        <Button2/>
        <Button2/>
        <Button2/>
        <Counter initialCount={5}/> 
        <Counter initialCount={7}/> 
        <Counter initialCount={10}/>
        <Counter initialCount={500}/>  
      </header>
    </div>
  );
}

export default App;
