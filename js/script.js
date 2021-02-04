document.getElementById("botao-enviar").addEventListener("click", validaForm)

function validaForm() {
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("mensagem").value != "") {
    alert("Pronto! Sua mensagem foi enviada.")
  } else {
    alert("Por favor, preencha os campos nome, e-mail e mensagem!")
  }
}