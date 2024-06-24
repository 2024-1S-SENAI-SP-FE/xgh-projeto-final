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

// Funcionalidade do botão de duvidas
// document.querySelector('#btn-duvida').addEventListener('click', ()=>{
//     const respostaSuporte = document.querySelector('#resposta1-suporte');
//     if (respostaSuporte.style.display === 'none' || respostaSuporte.style.display === '') {
//         respostaSuporte.style.display = 'block';
//         document.querySelector('#btn-duvida').setAttribute('disabled', '');
//         document.querySelector('#btn-sugestao').setAttribute('disabled', '');

//         resposta(respostaSuporte);
//     } else {
//         respostaSuporte.style.display = 'none';
//     }

// })

// Funcionalidade do botão de sugestões
// document.querySelector('#btn-sugestao').addEventListener('click', ()=>{
//     const respostaSuporte = document.querySelector('#resposta2-suporte');
//     if (respostaSuporte.style.display === 'none' || respostaSuporte.style.display === '') {
//         respostaSuporte.style.display = 'block';
//         document.querySelector('#btn-sugestao').setAttribute('disabled', '');
//         document.querySelector('#btn-duvida').setAttribute('disabled', '');

//         resposta(respostaSuporte);
//     } else {
//         respostaSuporte.style.display = 'none';
//     }

// })

// Resposta do chat após seleção de botão
// document.querySelector('#btn-duvida').addEventListener('click',() => {
//     const respostaCliente1 = document.querySelector('#resposta-duvida');
//     const respostaCliente2 = document.querySelector('#resposta-sugestao');
//     const respostaSuporte = document.querySelector('#resposta1-suporte');
//     // respostaCliente1.style.display = 'block';
//     // respostaSuporte.style.display = 'block';
//     // document.querySelector('#btn-duvida').setAttribute('disabled', '');
//     // document.querySelector('#load').style.display = 'none';
//     const botaoClicado = event.target
//     if(botaoClicado === respostaCliente1){
//         respostaCliente1.style.display = 'block';
//         respostaSuporte.style.display = 'block';
//         document.querySelector('#load').style.display = 'none'
//     }else{
//         respostaCliente2.style.display = 'block';
//         respostaSuporte.style.display = 'block';
//     }
// })

document.querySelector('.btn-duvida').addEventListener('click',() => {
    const btnDuvida = document.querySelector('#btn-duvida');
    const btnSugestao = document.querySelector("#btn-sugestao");
    const respostaCliente1 = document.querySelector('#resposta-duvida');
    const respostaCliente2 = document.querySelector('#resposta-sugestao');
    const respostaSuporte = document.querySelector('#resposta1-suporte');
    const botaoClicado = event.target;  // Pega o botão que foi clicado
    clickBotao(botaoClicado, btnDuvida, btnSugestao, respostaCliente1, respostaCliente2, respostaSuporte);   
})

function clickBotao(botaoClicado, btnDuvida, btnSugestao, respostaCliente1, respostaCliente2, respostaSuporte) {
if (botaoClicado === btnDuvida) {
    respostaCliente1.style.display = 'block';
    respostaSuporte.style.display = 'block';
    btnDuvida.disabled = true;
    btnSugestao.disabled = true;
    } else if (botaoClicado === btnSugestao) {
        respostaCliente2.style.display = 'block';
        respostaSuporte.style.display = 'block';
        btnDuvida.disabled = true;
        btnSugestao.disabled = true;
        }
    }

    