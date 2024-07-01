// Seleciona todos os elementos com a classe 'span-cor'
const elements = document.querySelectorAll('.span-cor');

// Aplica display 'none' a cada um dos elementos com a classe span-cor
elements.forEach(element => {
  element.style.display = 'none';
});

function pegaCor() {
  let activeElement = document.querySelector('.conteudo-cores > div.active > div > span');
  if (activeElement) {
    if (activeElement.innerHTML === 'Branco') {
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'block';
      console.log(`${activeElement}`)
      return activeElement.innerHTML;
    } else if (activeElement.innerHTML === 'Azul') {
      document.querySelector('.mustang-troca').style.display = 'block';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'none';
      return activeElement.innerHTML;
    } else if (activeElement.innerHTML === 'Preto') {
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'block';
      document.querySelector('.mustang-cor3').style.display = 'none';
      document.querySelector('.mustang-cor4').style.display = 'none';

      return activeElement.innerHTML;
    } else if (activeElement.innerHTML === 'Vermelho') {
      document.querySelector('.mustang-troca').style.display = 'none';
      document.querySelector('.mustang-cor1').style.display = 'none';
      document.querySelector('.mustang-cor2').style.display = 'none';
      document.querySelector('.mustang-cor3').style.display = 'block';
      document.querySelector('.mustang-cor4').style.display = 'none';

      return activeElement.innerHTML;
    } else if (activeElement.innerHTML === 'Cinza') {
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
    document.querySelector('#nome-cartao').focus();
  }
});

// checa se os inputs do boleto têm algo, se não tiver a borda e a sombra ficam vermelhos


const inputsBoleto = document.querySelectorAll('#boleto-form input');

function checarInput(input) {
  if (input.value.trim() === '') {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}

inputsBoleto.forEach(input => {
  input.addEventListener('input', function () {
    checarInput(input);
  });
});

document.querySelector('#btnRevizarBoleto').addEventListener('click', function () {
  inputsBoleto.forEach(input => {
    checarInput(input);
  });
});

// checa se os input tem algo, se não tiver a borda e a sombra ficam vermelhos

const inputsCartao = document.querySelectorAll('#cartao-form input');

inputsCartao.forEach(input => {
  input.addEventListener('input', function () {
    checarInput(input);
  });
});

inputsCartao.forEach(input => {
  input.addEventListener('input', function () {
    checarInput(input);
  });
});

document.querySelector('#btnRevizarCartao').addEventListener('click', function () {
  inputsCartao.forEach(input => {
    checarInput(input);
  });
});


// checa se os selects tem algo, se não tiver a borda e a sombra ficam vermelhos

const selectsCartao = document.querySelectorAll('.validade-cartao select');

function checarSelect(select) {
  if (select.value === '') {
    select.classList.add('error');
  } else {
    select.classList.remove('error');
  }
}

document.querySelector('#btnRevizarCartao').addEventListener('click', function() {
  selectsCartao.forEach(select => {
    checarSelect(select);
  });
});

selectsCartao.forEach(select => {
  select.addEventListener('change', function() {
    if (select.classList.contains('error') && select.value !== '') {
      select.classList.remove('error');
    }
  });
});

// Finalizar
document.querySelector('#btnFinalizar').addEventListener('click', () => {
  document.querySelector('#finaliza-compra').style.display = 'flex';
})

document.querySelector('#btnFinalizar').addEventListener('click', function () {
  const conteudo = document.querySelector('.container-finalizar');
  conteudo.style.display = 'flex';

  const classAtual = document.querySelector('#finaliza-compra');
  setTimeout(function () {
    classAtual.classList.toggle('hover-finaliza');
  }, 600);

  setTimeout(function () {
    const container = document.querySelector('.hover-finaliza')
    container.style.display = 'none';
  }, 7000);
});

//Adicionando Blur
document.querySelector('#btnFinalizar').addEventListener('click', function () {
  const blur = document.querySelector('.container-geral');
  setTimeout(function () {
    blur.classList.toggle('blur-geral');
  }, 100);

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

