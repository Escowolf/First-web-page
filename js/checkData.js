function checkData(name, cpf, email, date) {
    var name = document.getElementById(name);
    var date = document.getElementById(date);
    var cpf = document.getElementById(cpf);
    var email = document.getElementById(email);

    alert("Nome: " + nome + "\n Data de nascimento: " + date + "\n CPF: " + cpf + "\n E-mail: " + email);
    console.log()
}