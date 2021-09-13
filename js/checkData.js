function ValidarNome(name) {
    console.log(name);
    if (name == "") {
        return false;
    }
    return true;
}
let name = "";
console.log(ValidarNome(name));