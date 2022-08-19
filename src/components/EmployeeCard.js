import styles from './EmployeeCard.module.css';
import profilePic from '../imgs/user-line.png';
import ModalComponent from "../components/ModalComponent";
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, doc } from 'firebase/firestore';

function EmployeeCard() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    }

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getUsers();
    });

    return (
        <>
            <div className={styles.box} onClick={openModal}>
                <img src={profilePic} alt='profile-pic' className={styles.profilePic} />
                <span>Nome</span>
                <div className={styles.viewButton}>
                    <span>Vizualizar</span>
                </div>
            </div>
            {users.map((users) => {
                return (
                    <>
                        <ModalComponent
                            showModal={showModal}
                            setShowModal={setShowModal}
                            nome={users.nome}
                            sobrenome={users.sobrenome}
                            cargo={users.cargo}
                            email={users.email}
                            numero={users.numero}
                            cep={users.CEP}
                            cpf={users.cpf}
                            data={users.date}
                            estado={users.estado}
                            rua={users.rua}
                            bairro={users.bairro}
                            cidade={users.cidade}
                            celular={users.celular}
                        />
                    </>
                );
            })}
        </>
    );
}

export default EmployeeCard;