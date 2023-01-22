const botaoTrailer = document.querySelector(".botao-trailer"); // pegar o elemento que representa o botão na tela usando o js
const botaoFecharModal = document.querySelector(".fechar-modal"); // pegar o elemento de fechar modal usando o js
const video = document.getElementById("video");
const modal = document.querySelector(".modal"); // pegar o elemento da modal no js
const linkDoVideo = video.src;

// identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    // abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

// identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // fechar o modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});





