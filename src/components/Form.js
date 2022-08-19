import styles from './Form.module.css';
import { useRef, useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

function Form() {
    const fileInputRef = useRef();
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const [newName, setNewName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newCell, setNewCell] = useState(0);
    const [newDate, setNewDate] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newCPF, setNewCPF] = useState(0);
    const [newCargo, setNewCargo] = useState("");
    const [newCEP, setNewCEP] = useState(0);
    const [newState, setNewState] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newBairro, setNewBairro] = useState("");
    const [newRua, setNewRua] = useState("");
    const [newNumber, setNewNumber] = useState(0);

    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            nome: newName,
            sobrenome: newLastName,
            celular: newCell,
            date: newDate,
            email: newEmail,
            cpf: newCPF,
            cargo: newCargo,
            CEP: newCEP,
            estado: newState,
            cidade: newCity,
            bairro: newBairro,
            rua: newRua,
            numero: newNumber
        });
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => { setPreview(reader.result); };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    return (
        <div className={styles.box}>
            <h2>Cadastro</h2>
            <h1>Dados pessoais</h1>
            <form className={styles.form}>
                <div className={styles.formData}>
                    <div className={styles.dataDiv}>
                        <label>Nome:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewName(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Data de nascimento:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewDate(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Sobrenome:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewLastName(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Email:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewEmail(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Celular:</label>
                        <input type="number" required
                            onChange={(event) => {
                                setNewCell(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>CPF:</label>
                        <input type="number" required onChange={(event) => {
                                setNewCPF(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Cargo:</label>
                        <select required onChange={(event) => {setNewCargo(event.currentTarget.value);}}>
                            <option>Selecionar cargo</option>
                            <option value="Toplaner">Toplaner</option>
                            <option value="Jungler">Jungler</option>
                            <option value="Midlaner">Midlaner</option>
                            <option value="Adcarry">Adcarry</option>
                            <option value="Suport">Suport</option>
                            <option value="Coach">Coach</option>
                        </select>
                    </div>

                    <div>
                        <div className={styles.dataDiv}>
                            <label>Foto de perfil:</label>
                            {preview ? (<img src={preview} alt="preview" className={styles.previewImg} />) :
                                (<button onClick={(event) => {
                                    event.preventDefault();
                                    fileInputRef.current.click();
                                }}>
                                </button>)}
                            <input type="file" accept="image/*" className={styles.fileInput} ref={fileInputRef}
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    if (file && file.type.substr(0, 5) === "image") {
                                        setImage(file);
                                    } else {
                                        setImage(null);
                                    }
                                }} />
                        </div>
                    </div>

                    <div className={styles.dataDiv}>
                        <label>CEP:</label>
                        <input type="number" required
                            onChange={(event) => {
                                setNewCEP(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Estado:</label>
                        <select required
                            onChange={(event) => {
                                setNewState(event.currentTarget.value);
                            }}>
                            <option>Selecionar estado</option>
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>DF</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                        </select>
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Cidade:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewCity(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Bairro:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewBairro(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Rua:</label>
                        <input type="text" required
                            onChange={(event) => {
                                setNewRua(event.currentTarget.value);
                            }} />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Número:</label>
                        <input type="number" required
                            onChange={(event) => {
                                setNewNumber(event.currentTarget.value);
                            }} />
                    </div>
                </div>

                <input className={styles.btn} type="submit" onClick={createUser}/>
            </form>
        </div>
    );
}

export default Form;