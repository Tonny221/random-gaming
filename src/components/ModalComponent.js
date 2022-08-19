import styles from './Modal.module.css';
import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

function ModalComponent(props) {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data()})));
        }

        getUsers();
    });

    return (
        <>
            {props.showModal ? <div className={styles.modal}>
                <div className={styles.overlay}
                    onClick={() => props.setShowModal(!props.showModal)}>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.nome}>{users.map((users) => users.nome)} {users.map((users) => users.sobrenome)}</h2>
                    <div className={styles.personalData}>
                        <div className={styles.profilePic}>
                            <img src="#" alt='profile-pic' />
                        </div>
                        <div>
                            <h4>Cargo: {users.map((users) => users.cargo)}</h4>
                            <h4>Email: {users.map((users) => users.email)}</h4>
                            <h4>CPF: {users.map((users) => users.cpf)}</h4>
                            <h4>Data de nascimento: {users.map((users) => users.date)}</h4>
                            <h4>Celular: {users.map((users) => users.celular)}</h4>
                        </div>
                    </div>

                    <h2>Endereço</h2>

                    <div className={styles.adress}>
                        <h4>CEP: {users.map((users) => users.CEP)}</h4>
                        <h4>Estado: {users.map((users) => users.estado)}</h4>
                        <h4>Cidade: {users.map((users) => users.cidade)}</h4>
                        <h4>Bairro: {users.map((users) => users.bairro)}</h4>
                        <h4>Rua: {users.map((users) => users.rua)}</h4>
                        <h4>Número: {users.map((users) => users.numero)}</h4>
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.editBtn}>Editar</button>
                        <div className={styles.sideBtn}>
                            <button className={styles.btn}>Excluir</button>
                            <button className={styles.btn} onClick={() => props.setShowModal(!props.showModal)}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    );
}

export default ModalComponent;
