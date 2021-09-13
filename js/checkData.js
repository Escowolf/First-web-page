function validar(name) {
    var name = form.name.value;

    if (name == "") {
        alert('Preencha o campo com seu nome');
        form.name.focus();
        return false;
    }
}