import {useState, useEffect} from "react";

export default function ListarTarefa() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/tarefas')
            .then(resposta => resposta.json())
            .then(conteudo => setTarefas(conteudo));
    }, []);

    
    const LinhaDaTabela = ({titulo, prioridade}) => {

        return (
            <tr>
                <td>{titulo}</td>
                <td>{prioridade}</td>
            </tr>
        )
    };

    return(
        <div>
            <h1> Listar Tarefa </h1>
            <table className="table table-hover table-striped">
                <tbody>
                    {tarefas.map(cadaTarefa => <LinhaDaTabela {...cadaTarefa}/>)}
                    
                </tbody>
            </table>

        </div>
        
    )
}