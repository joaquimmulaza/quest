// Selecione o botão de hambúrguer e o menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Adiciona o evento de clique no ícone de hambúrguer
hamburger.addEventListener('click', () => {
    // Alterna a visibilidade do menu ao adicionar/remover a classe .show
    navMenu.classList.toggle('show');
});
