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
document.querySelector('#btn-duvida').addEventListener('click', ()=>{
    const respostaSuporte = document.querySelector('#resposta1-suporte');
    if (respostaSuporte.style.display === 'none' || respostaSuporte.style.display === '') {
        respostaSuporte.style.display = 'block';
        document.querySelector('#btn-duvida').setAttribute('disabled', '');
        document.querySelector('#btn-sugestao').setAttribute('disabled', '');

        resposta(respostaSuporte);
    } else {
        respostaSuporte.style.display = 'none';
    }

})

// Funcionalidade do botão de sugestões
document.querySelector('#btn-sugestao').addEventListener('click', ()=>{
    const respostaSuporte = document.querySelector('#resposta2-suporte');
    if (respostaSuporte.style.display === 'none' || respostaSuporte.style.display === '') {
        respostaSuporte.style.display = 'block';
        document.querySelector('#btn-sugestao').setAttribute('disabled', '');
        document.querySelector('#btn-duvida').setAttribute('disabled', '');

        resposta(respostaSuporte);
    } else {
        respostaSuporte.style.display = 'none';
    }

})

// Resposta do chat após seleção de botão
function resposta(respostaSuporte){
    
    if(respostaSuporte.style.display === 'block'){
        document.querySelector('#resposta1-chat').innerHTML = 'Em caso de dúvidas...'
    }
}
