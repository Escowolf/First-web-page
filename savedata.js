<<<<<<< Updated upstream
<script>
 function enviar(){
    var nome = document.getElementById("txtnome").value;
    var telefone = document.getElementById("txttelefone").value;
    var email = document.getElementById("txtemail").value;
                 
    var texto = "Nome: " +nome + "; Telefone: "+ telefone + "; Email: "+email;
                 
    return true;
                 
    }
 </script>
=======
function enviar() {
    var nome = document.getElementById("txtnome").value;
    var data = document.getElementById("date").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;

    var texto = "Nome: " + nome + ";/n Data de Nascimento: " + data + "; /n CPF: " +
        cpf + "; Email: " + email;
    console.log(texto);
    return true;
}
>>>>>>> Stashed changes
