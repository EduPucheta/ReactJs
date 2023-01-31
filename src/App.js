import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar/>
      <ItemListContainer greeting="Esta es mi primera App con React JS!"/>
    </div>
  );
}

export default App;
