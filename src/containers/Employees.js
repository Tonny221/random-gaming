import EmployeeCard from "../components/EmployeeCard";
import styles from './Employees.module.css';

function Employees (){ 
    return (
        <section>
            <h2>Funcionários cadastrados</h2>
            
            <div className={styles.div}>
                <EmployeeCard />
            </div>
        </section>
    );
}

export default Employees;