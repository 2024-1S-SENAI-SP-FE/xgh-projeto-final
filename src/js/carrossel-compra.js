let posicaoAtual = 0;

function ImagensSlide(indice) {
    const CarrosselInner = document.querySelector('.carousel-inner');
    const CarrosselItems = document.querySelectorAll('.carousel-item').length;

    if (indice >= CarrosselItems) {
        posicaoAtual = 0;
    } else if (indice < 0) {
        posicaoAtual = CarrosselItems - 1;
    } else {
        posicaoAtual = indice;
    }
    const offset = -posicaoAtual * 100;
    CarrosselInner.style.transform = `translateX(${offset}%)`;
}

function proximoSlide() {
    ImagensSlide(posicaoAtual + 1);
}

function anteriorSlide() {
    ImagensSlide(posicaoAtual - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    ImagensSlide(posicaoAtual);
});