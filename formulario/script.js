function mostrarDados(){
    let campos = document.getElementsByClassName("campo-input");

    let nome = campos[0].value;
    let email = campos[1].value;
    let telefone = campos[2].value;

    if (nome && email && telefone !== " "){
        document.getElementById("nomeexibido").textContent = nome;
        document.getElementById("emailexibido").textContent = email;
        document.getElementById("telefoneexibido").textContent = telefone;

    }else {
        alert("por favor preencha todos os campos");
    }
}