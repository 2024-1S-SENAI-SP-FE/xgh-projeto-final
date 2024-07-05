// Evento de abertura Aba de Suporte
document.querySelector('#btn-suporte').addEventListener('click', ()=>{
    const suporte = document.querySelector('#suporte');
    if (suporte.style.display === 'none' || suporte.style.display === '') {
        suporte.style.display = 'block';
    } else {
        suporte.style.display = 'none';
    }
})

// Funcionalidade do botão close da janela
document.querySelector('#bt-close').addEventListener('click', ()=>{
    const suporte = document.querySelector('#suporte');
    suporte.style.display = 'none';
    
})

// Funcionalidade ao clicar no botão de dúvida
document.querySelector('#btn-duvida').addEventListener('click',() => {
    const btnDuvida = document.querySelector('#btn-duvida');
    const btnSugestao = document.querySelector("#btn-sugestao");
    const respostaCliente1 = document.querySelector('#resposta-duvida');
    const respostaCliente2 = document.querySelector('#resposta-sugestao');
    const respostaSuporte = document.querySelector('#resposta1-suporte');
    const botaoClicado = event.target;  // Pega o botão que foi clicado
    clickBotao(botaoClicado, btnDuvida,btnSugestao, respostaCliente1, respostaCliente2, respostaSuporte);   
})

function clickBotao(botaoClicado, btnDuvida, btnSugestao, respostaCliente1, respostaCliente2, respostaSuporte) {
if (botaoClicado === btnDuvida) {
    respostaCliente1.style.display = 'block';
    respostaSuporte.style.display = 'block';
    btnDuvida.disabled = true;
    btnSugestao.disabled = true;
    }
}

    