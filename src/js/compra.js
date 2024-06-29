// Seleciona todos os elementos com a classe 'span-cor'
const elements = document.querySelectorAll('.span-cor');

// Aplica display 'none' a cada um dos elementos com a classe span-cor
elements.forEach(element => {
  element.style.display = 'none';
});

function pegaCor() {
  let activeElement = document.querySelector('.conteudo-cores > div.active > div > span');
  if (activeElement) {
    if (activeElement.innerHTML === 'Branco'){
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'block';
      console.log(`${activeElement}`)
      return activeElement.innerHTML;
    }else if(activeElement.innerHTML === 'Azul'){
      document.querySelector('.mustang-troca').style.display = 'block';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'none';
      return activeElement.innerHTML;
    }else if(activeElement.innerHTML === 'Preto'){
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'block';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'none';
      
      return activeElement.innerHTML;
    }else if(activeElement.innerHTML === 'Vermelho'){
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'block';
      document.querySelector('.mustang-cor4').style.display = 'none';
      
      return activeElement.innerHTML;
    }else if(activeElement.innerHTML === 'Cinza'){
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'block';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'none';

      return activeElement.innerHTML;
    }
  }
  return null;
}

// Adiciona evento de clique aos divs de cores
document.querySelectorAll('.conteudo-cores > div').forEach(div => {
  div.addEventListener('click', function () {
    document.querySelectorAll('.conteudo-cores > div').forEach(d => {
      d.classList.remove('active');
    });
    this.classList.add('active');
    let activeElement = pegaCor();
    console.log(`${activeElement}`);
  });
});

// Revisão de compra
document.querySelector('#btnCompra').addEventListener('click', () => {

  const cor = pegaCor();
  const frete = document.querySelector('#frete').innerHTML;
  console.log(`${cor}`);
  document.querySelector('#cor-selecionada').innerHTML = `${cor}`;
  document.querySelector('#valor-de-frete').innerHTML = `R$${frete}`;

});

// Div forma de pagamento OFICIAL 
// document.querySelector('#btnCompra').addEventListener('click', ()=>{
//   const frete = document.querySelector('#frete').innerHTML;
//   if(frete != '')
//     document.querySelector('#forma-pagamento').style.display = 'block';
//   else{
//     window.alert('Digite o CEP para o calculo de frete');
//     document.querySelector('#CEP').focus();
//   }
// })

// Div forma de pagamento TEMPORARIA
document.querySelector('#btnCompra').addEventListener('click', () => {
  document.querySelector('#forma-pagamento').style.display = 'block';
});

// Seleção pagamento

// Boleto
document.querySelector('#btnBoleto').addEventListener('click', () => {
  document.querySelector('#pag-boleto').style.display = 'block'
  document.querySelector('#pag-cartao').style.display = 'none'
  document.querySelector('#btnRevizarBoleto').style.display = 'block'
  document.querySelector('#nome').focus();
})

// Cartão
document.querySelector('#btnCartao').addEventListener('click', () => {
  document.querySelector('#pag-boleto').style.display = 'none'
  document.querySelector('#pag-cartao').style.display = 'block'
  document.querySelector('#btnRevizarCartao').style.display = 'block'
  document.querySelector('#nome-cartao').focus();

})


// Botão de Revizar Compra
document.querySelector('#btnRevizarBoleto').addEventListener('click', () => {
  const pagBoleto = document.querySelector('#pag-boleto').style.display;

  const nomeBoleto = document.querySelector('#nome').value;
  const cpfBoleto = document.querySelector('#cpf').value;
  const emailBoleto = document.querySelector('#email').value;


  // verificar correção de erro
  if (nomeBoleto !== '' && cpfBoleto !== '' && emailBoleto !== '') {
    // window.alert('Compra realizada com sucesso!');
    document.querySelector('#resumo-compra').style.display = 'block';
  } else {
    window.alert('Preencha todos os campos para finalizar a compra!');
    document.querySelector('#nome').focus();
  }
});

// Botão de Revizar Cartao
document.querySelector('#btnRevizarCartao').addEventListener('click', () => {
  const pagCartao = document.querySelector('#pag-cartao').style.display;

  const nomeCartao = document.querySelector('#nome-cartao').value;
  const numeroCartao = document.querySelector('#numero-cartao').value;
  const mesCartao = document.querySelector('#mes').value;
  const anoCartao = document.querySelector('#ano').value;
  const cvvCartao = document.querySelector('#cvv').value;

  // verificar correção de erro
  if ((nomeCartao !== '') && (numeroCartao !== '') && (mesCartao !== '') && (anoCartao !== '') && (cvvCartao !== '')) {
    // window.alert('Compra realizada com sucesso!');
    document.querySelector('#resumo-compra').style.display = 'block';
  } else {
    window.alert('Preencha todos os campos para finalizar a compra!');
    document.querySelector('#nome-cartao').focus();
  }
});

// Finalizar
document.querySelector('#btnFinalizar').addEventListener('click', () => {
  document.querySelector('#finaliza-compra').style.display = 'flex';
})

document.querySelector('#btnFinalizar').addEventListener('click', function () {
  var conteudo = document.querySelector('.container-finalizar');
  conteudo.style.display = 'flex';

  var classAtual = document.querySelector('#finaliza-compra');
  setTimeout(function () {
    classAtual.classList.toggle('hover-finaliza');
  }, 600);

  setTimeout(function() {
    var container = document.querySelector('.hover-finaliza')
      container.style.display = 'none';
  }, 7000); 
});

//Adicionando Blur
document.querySelector('#btnFinalizar').addEventListener('click', function() {
  var blur = document.querySelector('.container-geral');
  setTimeout(function(){
    blur.classList.toggle('blur-geral'); 
  },100);

  setTimeout(function () {
    blur.classList.remove('blur-geral'); 
  }, 7000);
})


// // Muda cor svg 
// document.querySelector('#btnFinalizar').addEventListener('click', function () {
//   var classAtual = document.querySelector('#Capa_1');
//   setTimeout(function () {
//     classAtual.classList.toggle('hover-svg');
//   }, 600);
// });

