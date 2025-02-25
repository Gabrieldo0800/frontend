function mostrardados(){
    let campos = document.getElementsByClassName("campo-input");
    let campoendereco = document.getElementsByClassName("campo-input-endereco");

    let nome = campos[0].value;
    let email = campos[1].value;
    let telefone = campos[2].value;
    let idade = campos[3].value;
    let estadoCivil = campos[4].value;
    let profissao = campos[5].value;
    let logradouro = campoendereco[0].value;
    let bairro = campoendereco[1].value;
    let numero = campoendereco[2].value;
    let cidade = campoendereco[3].value;
    let estado = campoendereco[4].value;

    if(nome && email && telefone && idade && estadoCivil && profissao && logradouro && bairro && numero && cidade && estado){
        // dados da pessoa
        document.getElementById("nome").textContent = nome;
        document.getElementById("email").textContent = email;
        document.getElementById("telefone").textContent = telefone;
        document.getElementById("idade").textContent = idade;
        document.getElementById("estcivil").textContent = estadoCivil;
        document.getElementById("profissao").textContent = profissao;

        // endereço
        document.getElementById("logradouro").textContent = logradouro;
        document.getElementById("bairro").textContent = bairro;
        document.getElementById("numero").textContent = numero;
        document.getElementById("cidade").textContent = cidade;
        document.getElementById("estado").textContent = estado;
    }else{
        alert("Por favor, preencha todos os campos");
    }

}