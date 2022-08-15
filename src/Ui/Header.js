import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
                <h1>Random.</h1>
                <Link to="/formulario" className={styles.h3}>Cadastrar novo funcionário</Link>   
        </header>
    );
}

export default Header;