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
  document.querySelector('#btnFinalizar').style.display = 'block'
  document.querySelector('#nome').focus();
})

// Cartão
document.querySelector('#btnCartao').addEventListener('click', ()=>{
  document.querySelector('#pag-boleto').style.display = 'none'
  document.querySelector('#pag-cartao').style.display = 'block'
  document.querySelector('#btnFinalizar').style.display = 'block'
  document.querySelector('#nome-cartao').focus();
  
})


// Botão de Finalizar Compra
document.querySelector('#btnFinalizar').addEventListener('click',()=>{
  const pagBoleto = document.querySelector('#pag-boleto').innerHTML;
  const pagCartao = document.querySelector('#pag-cartao').innerHTML;

  const nomeBoleto = document.querySelector('#nome').innerHTML;
  const cpfBoleto = document.querySelector('#cpf').innerHTML;
  const emailBoleto = document.querySelector('#email').innerHTML;
  
  const nomeCartao = document.querySelector('#nome-cartao').innerHTML;
  const numeroCartao = document.querySelector('#numero-cartao').innerHTML;
  const mesCartao = document.querySelector('#mes').innerHTML;
  const anoCartao = document.querySelector('#ano').innerHTML;
  const cvvCartao = document.querySelector('#cvv').innerHTML;

  // verificar correção de erro
  if(pagBoleto != ''){
    if(nomeBoleto, cpfBoleto, emailBoleto !== ''){
      window.alert('Compra realizada com sucesso!');
    }else{
      window.alert('Preencha todos os campos para finalizar a compra!');
      document.querySelector('#nome').focus();
    }
  }else{
    if(pagCartao !== ''){
      if(nomeCartao, numeroCartao, mesCartao, anoCartao, cvvCartao != ''){
        window.alert('Compra realizada com sucesso!');
        }else{
          window.alert('Preencha todos os campos para finalizar a compra!');
          document.querySelector('#nome-cartao').focus();
        }
      }
  }
}) 