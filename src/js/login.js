document.addEventListener('DOMContentLoaded', function () {
    const botoesPreco = document.querySelectorAll('.opcoes-preco button');
    const opcoesTracao = document.querySelectorAll('.opcoes-tracao .opcao');
    const opcoesPintura = document.querySelectorAll('.opcoes-pintura .pintura');

    botoesPreco.forEach(botao => {
        botao.addEventListener('click', function () {
            botoesPreco.forEach(btn => btn.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });

    opcoesTracao.forEach(opcao => {
        opcao.addEventListener('click', function () {
            opcoesTracao.forEach(opt => opt.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });

    opcoesPintura.forEach(pintura => {
        pintura.addEventListener('click', function () {
            opcoesPintura.forEach(pnt => pnt.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });
});
