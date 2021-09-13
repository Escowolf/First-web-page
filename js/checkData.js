function validar() {
    var nome = form.name.value;

    if (nome == "") {
        alert('Preencha o campo com seu nome');
        form.name.focus();
        return false;
    }
}