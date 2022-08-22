import EmployeeCard from "../components/EmployeeCard";
import styles from './Employees.module.css';
import { Link } from 'react-router-dom';

function Employees (){ 
    return (
        <section>
            <h2>Funcionários cadastrados</h2>
            
            <div className={styles.div}>
                <EmployeeCard />
            </div>

            <Link to="/formulario" className={styles.formLink}>Cadastrar novo funcionário</Link>
        </section>
    );
}

export default Employees;