document.querySelectorAll('.conteudo-cores > div').forEach(div => {
    div.addEventListener('click', function() {
      document.querySelectorAll('.conteudo-cores > div').forEach(d => {
        d.classList.remove('active');
      });
      this.classList.add('active');
    });
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
document.querySelector('#btnCompra').addEventListener('click', ()=>{
    document.querySelector('#forma-pagamento').style.display = 'block';
});

// Seleção pagamento

// Boleto
document.querySelector('#btnBoleto').addEventListener('click', ()=>{
  document.querySelector('#pag-boleto').style.display = 'block'
  document.querySelector('#pag-cartao').style.display = 'none'
  document.querySelector('#btnRevizarBoleto').style.display = 'block'
  document.querySelector('#nome').focus();
})

// Cartão
document.querySelector('#btnCartao').addEventListener('click', ()=>{
  document.querySelector('#pag-boleto').style.display = 'none'
  document.querySelector('#pag-cartao').style.display = 'block'
  document.querySelector('#btnRevizarCartao').style.display = 'block'
  document.querySelector('#nome-cartao').focus();
  
})


// Botão de Finalizar Compra
document.querySelector('#btnRevizarBoleto').addEventListener('click',()=>{
  const pagBoleto = document.querySelector('#pag-boleto').style.display;

  const nomeBoleto = document.querySelector('#nome').value;
  const cpfBoleto = document.querySelector('#cpf').value;
  const emailBoleto = document.querySelector('#email').value;


  // verificar correção de erro
  if (nomeBoleto !== '' && cpfBoleto !== '' && emailBoleto !== '') {
    window.alert('Compra realizada com sucesso!');
  } else {
    window.alert('Preencha todos os campos para finalizar a compra!');
    document.querySelector('#nome').focus();
    }
  });

  // Botão de Finalizar Cartao
  document.querySelector('#btnRevizarCartao').addEventListener('click', ()=>{
    const pagCartao = document.querySelector('#pag-cartao').style.display;

    const nomeCartao = document.querySelector('#nome-cartao').value;
    const numeroCartao = document.querySelector('#numero-cartao').value;
    const mesCartao = document.querySelector('#mes').value;
    const anoCartao = document.querySelector('#ano').value;
    const cvvCartao = document.querySelector('#cvv').value;

    // verificar correção de erro
    if((nomeCartao !== '') && (numeroCartao !== '') && (mesCartao !== '') && (anoCartao !== '') && (cvvCartao !== '')){
      window.alert('Compra realizada com sucesso!');
    } else {
      window.alert('Preencha todos os campos para finalizar a compra!');
      document.querySelector('#nome-cartao').focus();
    }
  });