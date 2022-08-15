import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
                <Link to="/" className={styles.h1}>Random.</Link>
                <Link to="/formulario" className={styles.h3}>Cadastrar novo funcionário</Link>   
        </header>
    );
}

export default Header;