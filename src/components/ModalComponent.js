import styles from './Modal.module.css';

function ModalComponent(props) {
    return (
        <>
            {props.showModal ? <div className={styles.modal}>
                <div className={styles.overlay}
                    onClick={() => props.setShowModal(!props.showModal)}>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.nome}>{props.nome} {props.sobrenome}</h2>
                    <div className={styles.personalData}>
                        <div className={styles.profilePic}>
                            <img src="#" alt='profile-pic' />
                        </div>
                        <div>
                            <h4>Cargo: {props.cargo}</h4>
                            <h4>Email: {props.email}</h4>
                            <h4>CPF: {props.cpf}</h4>
                            <h4>Data de nascimento: {props.data}</h4>
                            <h4>Celular: {props.celular}</h4>
                        </div>
                    </div>

                    <h2>Endereço</h2>

                    <div className={styles.adress}>
                        <h4>CEP: {props.cep}</h4>
                        <h4>Estado: {props.estado}</h4>
                        <h4>Cidade: {props.cidade}</h4>
                        <h4>Bairro: {props.bairro}</h4>
                        <h4>Rua: {props.rua}</h4>
                        <h4>Número: {props.numero}</h4>
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
