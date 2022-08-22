import styles from './Modal.module.css';

function ModalComponent(props) {
    return (
        <>
            {props.showModal ? <div className={styles.modal}>
                <div className={styles.overlay}
                    onClick={() => props.setShowModal(!props.showModal)}>
                </div>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <h2 className={styles.nome}>{props.nome} {props.sobrenome}</h2>
                        <div className={styles.personalData}>
                            <div className={styles.profilePic}>
                                <img src="#" alt='profile-pic' />
                            </div>
                            <div>
                                <h4>Cargo: <span className={styles.spanDiv}>{props.cargo}</span></h4>
                                <h4>Email: <span className={styles.spanDiv}>{props.email}</span></h4>
                                <h4>CPF: <span className={styles.spanDiv}>{props.cpf}</span></h4>
                                <h4>Data de nascimento: <span className={styles.spanDiv}>{props.data}</span></h4>
                                <h4>Celular: <span className={styles.spanDiv}>{props.celular}</span></h4>
                            </div>
                        </div>

                        <h2>Endereço</h2>

                        <div className={styles.adress}>
                            <h4>CEP: <span className={styles.spanDiv}>{props.cep}</span></h4>
                            <h4>Estado: <span className={styles.spanDiv}>{props.estado}</span></h4>
                            <h4>Cidade: <span className={styles.spanDiv}>{props.cidade}</span></h4>
                            <h4>Bairro: <span className={styles.spanDiv}>{props.bairro}</span></h4>
                            <h4>Rua: <span className={styles.spanDiv}>{props.rua}</span></h4>
                            <h4>Número: <span className={styles.spanDiv}>{props.numero}</span></h4>
                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.editBtn}>Editar</button>
                            <div className={styles.sideBtn}>
                                <button className={styles.btn}>Excluir</button>
                                <button className={styles.btn} onClick={() => props.setShowModal(!props.showModal)}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    );
}

export default ModalComponent;
