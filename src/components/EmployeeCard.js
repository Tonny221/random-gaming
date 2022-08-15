import styles from './EmployeeCard.module.css';
import profilePic from '../imgs/user-line.png';

function EmployeeCard() {
    return (
        <div className={styles.box}>
            <img src={profilePic} alt='profile-pic' className={styles.profilePic} />
            <span>Nome</span>
            <div className={styles.viewButton}>
                <span>Vizualizar</span>
            </div>
        </div>
    );
}

export default EmployeeCard;