import styles from './EmployeeCard.module.css'

function EmployeeCard (){
    return(
        <div className={styles.box}>
            <img alt='profile-pic'/>

            <span>Nome</span>
            <div>
                <span>Vizualizar</span>
            </div>
        </div>
    );
}

export default EmployeeCard;