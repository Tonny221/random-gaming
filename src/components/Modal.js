import styles from './Modal.module.css';

function Modal() {
    return (
        <div className={styles.modal}>
            <div className={styles.overlay}>
            </div>
            <div className={styles.content}>
                <h2>Nome</h2>
                <div>
                    <div>
                        <img src="#" alt='profile-pic' />
                    </div>
                    <h4>Cargo:</h4>
                    <h4>Email:</h4>
                    <h4>CPF:</h4>
                    <h4>Data de nascimento:</h4>
                    <h4>Celular:</h4>
                </div>

                <h2>Endereço</h2>

                <div>
                    <h4>CEP:</h4>
                    <h4>Estado:</h4>
                    <h4>Cidade:</h4>
                    <h4>Bairro:</h4>
                    <h4>Rua:</h4>
                    <h4>Número:</h4>
                </div>

            </div>
        </div>
    );
}

export default Modal;
