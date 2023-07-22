import "./Comando.css";
import { Link } from "react-router-dom";

function Comando(props) {
    return (
            <Link to={props.link}
            className="enlace">
                {props.texto}
            </Link>
        );
}

export default Comando;