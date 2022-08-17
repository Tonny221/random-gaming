import styles from './EmployeeCard.module.css';
import profilePic from '../imgs/user-line.png';
import Modal from "../components/Modal";
import { useState } from 'react';

function EmployeeCard() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className={styles.box} onClick={toggleModal}>
            <img src={profilePic} alt='profile-pic' className={styles.profilePic} />
            <span>Nome</span>
            <div className={styles.viewButton}>
                <span>Vizualizar</span>
            </div>
            {modal && (
                <Modal />
            )}
        </div>
    );
}

export default EmployeeCard;