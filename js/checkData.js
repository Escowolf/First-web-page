<script language="javascript" type="text/javascript">
function validar() {
  var nome = form1.nome.value;
  var email = form1.email.value;
  
  if (nome == "") {
    alert('Preencha o campo com seu nome');
    form1.nome.focus();
    return false;
  }
}
</script>
