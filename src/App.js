import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Compus from "./pages/Compus";
import Celulares from "./pages/Celulares";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categoria/stands-para-celulares" element={<Celulares/>}/>
        <Route path="/categoria/stands-para-computadoras" element={<Compus/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/> }/>
      </Routes>
    </div>
  );
}

export default App;
