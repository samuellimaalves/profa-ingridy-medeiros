document.addEventListener('DOMContentLoaded', () => {
  // Alerta do botão do YouTube
  const botao = document.getElementById("meuBotao");
  if (botao) {
    botao.addEventListener("click", function() {
      alert("A página no YouTube foi aberta em outra aba!");
    });
  }

  // Abre e fecha o menu mobile
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
