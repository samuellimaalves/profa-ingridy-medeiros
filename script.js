const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
    alert("A página no YouTube foi aberta em outra aba!");

	document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
	});
