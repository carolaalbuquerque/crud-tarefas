import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    
      <nav>
        <Link className="btn btn-outline-primary me-2" to="/">Inicio</Link>
        <Link className="btn btn-outline-primary me-2" to= "/nova">Nova Tarefa</Link>
        <Link className="btn btn-outline-primary me-2" to="/listar">Listar</Link>
      
        <hr/>
      </nav>
  
  )
}