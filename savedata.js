function enviar(){
    var nome = document.getElementById("txtnome").value;
    var data = document.getElementById("date").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
                 
    var texto = "Nome: " +nome + "; Data de Nascimento: "+ data + "; Email: "+email;
      console.log(texto);            
    return true;
   }