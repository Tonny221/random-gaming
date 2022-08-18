import styles from './Modal.module.css';

function ModalComponent(props) {
    return (
        <>
            {props.showModal ? <div className={styles.modal}>
                <div className={styles.overlay}>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.nome}>{props.name}</h2>
                    <div className={styles.personalData}>
                        <div className={styles.profilePic}>
                            <img src="#" alt='profile-pic' />
                        </div>
                        <div>
                            <h4>Cargo:</h4>
                            <h4>Email:</h4>
                            <h4>CPF:</h4>
                            <h4>Data de nascimento:</h4>
                            <h4>Celular:</h4>
                        </div>
                    </div>

                    <h2>Endereço</h2>

                    <div className={styles.adress}>
                        <h4>CEP:</h4>
                        <h4>Estado:</h4>
                        <h4>Cidade:</h4>
                        <h4>Bairro:</h4>
                        <h4>Rua:</h4>
                        <h4>Número:</h4>
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.editBtn}>Editar</button>
                        <div className={styles.sideBtn}>
                            <button className={styles.btn}>Excluir</button>
                            <button className={styles.btn}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    );
}

export default ModalComponent;
