import styles from './Form.module.css'
import { useRef, useState, useEffect } from 'react'

function Form() {   
    return (
        <div className={styles.box}>
            <h2>Cadastro</h2>
            <h1>Dados pessoais</h1>
            <form className={styles.form}>
                <div className={styles.formData}>
                    <div className={styles.dataDiv}>
                        <label>Nome:</label>
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Data de nascimento:</label>
                        <input type="date" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Sobrenome:</label>
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Celular:</label>
                        <input type="tel" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>CPF:</label>
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Cargo:</label>
                        <select required>
                            <option>Toplaner</option>
                            <option>Jungler</option>
                            <option>Midlaner</option>
                            <option>Adcarry</option>
                            <option>Suport</option>
                            <option>Coach</option>
                        </select>
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Foto de perfil:</label>
                        <button onClick={(event) =>{
                            event.preventDefault();
                        }}></button>
                        <input type="file" accept="image/*" className={styles.fileInput}/>
                    </div>

                    <div className={styles.dataDiv}>
                        <label>CEP:</label>
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Estado:</label>
                        <select required>
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
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Bairro:</label>
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Rua:</label>
                        <input type="text" required />
                    </div>

                    <div className={styles.dataDiv}>
                        <label>Número:</label>
                        <input type="text" required />
                    </div>
                </div>

                <input className={styles.btn} type="submit" value="enviar" />
            </form>
        </div>
    );
}

export default Form;