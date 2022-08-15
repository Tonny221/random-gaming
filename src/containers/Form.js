function Form (){
    return(
        <div>
            <h1>Cadastro</h1>
            <h3>Dados pessoais</h3>

            <div>
                <label>Nome:</label>
                <input type="text" />

                <label>Sobrenome:</label>
                <input type="text" />

                <label>Celular:</label>
                <input type="text" />

                <label>Cargo:</label>
                <input type="text" />
            </div>
        </div>
    );
}

export default Form;