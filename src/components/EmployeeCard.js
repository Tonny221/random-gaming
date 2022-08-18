import styles from './EmployeeCard.module.css';
import profilePic from '../imgs/user-line.png';
import ModalComponent from "../components/ModalComponent";
import { useState } from 'react';

function EmployeeCard() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    }



    return (
        <div className={styles.box} onClick={openModal}>
            <img src={profilePic} alt='profile-pic' className={styles.profilePic} />
            <span>Nome</span>
            <div className={styles.viewButton}>
                <span>Vizualizar</span>
            </div>
            <ModalComponent
                showModal={showModal}
                setShowModal={setShowModal}
                name="SWER"  
              />
        </div>
    );
}

export default EmployeeCard;