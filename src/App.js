import {BrowserRouter,Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTarefa from "./pages/AddTarefa";
import ListarTarefa from "./pages/ListarTarefas";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/nova" element= {<AddTarefa/>}/>
        <Route path="/listar" element= {<ListarTarefa/>}/>
      </Routes>
        
    </BrowserRouter>
  )
}

