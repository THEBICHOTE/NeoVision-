// Animación simple al enviar el formulario
document.querySelector("#contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
  this.reset();
});
