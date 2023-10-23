const imagem = document.getElementById("imagem");
const titulo = document.getElementById("titulo");

onload = () => {
    imagem.src = "img/janelafechada.png";
    titulo.innerHTML = "Janela Fechada";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janelaaberta.png";
    titulo.innerHTML = "Janela Aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janelafechada.png";
    titulo.innerHTML = "Janela Fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janelaquebra.png";
    titulo.innerHTML = "Janela Quebrada";
});