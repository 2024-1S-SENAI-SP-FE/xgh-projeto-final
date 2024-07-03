// obtendo click de botão para chamar a função validLogin
document.querySelector('#btnLogin').addEventListener('click', () => {
  validLogin();
})

function validLogin() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  let loginSucess = false;

  // Criando requisição e suas especificações
  const requisicaoGet = new Request('http://localhost:3000/usuarios', {
    "method": "GET",
    "headers": {
      "Content-type": "application/json"
    }
  });

  // responsável pelo envio da requisição para o servidor
  fetch(requisicaoGet)
    // 1° then responsável por tratar a resposta como json
    .then(resposta => resposta.json())
    // 2° then responsável por verificar se o login é válido
    .then(resposta => {
      for (let i = 0; i < resposta.length; i++) {
        if (resposta[i].email === email && resposta[i].senha === password) {
          loginSucess = true;
          break;
        }
      }
      // caso login seja válido essa condição emitirá um alerta e encaminha o usuário para a HOME
      if (loginSucess) {
        // resultElement.innerHTML= "Login bem sucedido"
        window.alert('Login bem-sucedido');
        // trocar endereço de acordo com a máquina
        window.location.href = "http://127.0.0.1:5501/index.html"
        // ====================linha a verificar
        document.querySelector('#divLogado').style.display = "block"
      } else {
        window.alert('Email ou Senha inválido')
      }
    })
    .catch(erro => console.log(erro));
}

// Botão de visualização de senha
document.querySelector('#olhoAberto').addEventListener('click', () => {

  const passwordInput = document.querySelector('#password');
  const btnSenha = document.querySelector('#olhoAberto');
  const btnOcultaSenha = document.querySelector('#olhoFechado');

  if (passwordInput.type === 'password') {
    passwordInput.setAttribute('type', 'text')
    btnSenha.style.display = 'none'
    btnOcultaSenha.style.display = 'inline-flex'
  }
});

document.querySelector('#olhoFechado').addEventListener('click', () => {
  const passwordInput = document.querySelector('#password');
  const btnSenha = document.querySelector('#olhoAberto');
  const btnOcultaSenha = document.querySelector('#olhoFechado');

  if (passwordInput.type === 'text') {
    passwordInput.setAttribute('type', 'password')
    btnSenha.style.display = 'inline-flex'
    btnOcultaSenha.style.display = 'none'
  }
});

// Muda cor dos inputs para vermelho, caso não tenha nada dentro do input

const inputs = document.querySelectorAll('.elementos input');

function checarInput(input) {
  if (input.value.trim() === '') {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}

inputs.forEach(input => {
  input.addEventListener('input', function () {
    checarInput(input);
  });
});

document.querySelector('#btnLogin').addEventListener('click', function () {
  inputs.forEach(input => {
    checarInput(input);
  });

  const email = document.querySelector('#email');
  const senha = document.querySelector('#password');

  pErro(email, senha);
});

// Adiciona mensagem de erro, caso não tenha nada dentro do input

function pErro(email, senha) {
  if (email.classList.contains('error')) {
      document.querySelector('#msg1').innerText = 'Introduza um email válido';
  } else {
      document.querySelector('#msg1').innerText = '';
  }

  if (senha.classList.contains('error')) {
      document.querySelector('#msg2').innerText = 'Introduza uma senha válida';
  } else {
      document.querySelector('#msg2').innerText = '';
  }
}


// Muda cor dos inputs para verde, caso o usuário esteja logado

function checarInput2(input2) {
  if (input2.value.trim() !== '') {
    input2.classList.add('logado');
  } else {
    input2.classList.remove('logado');
  }
}

inputs.forEach(input2 => {
  input2.addEventListener('input', function () {
    checarInput2(input2);
  });
});

document.querySelector('#btnLogin').addEventListener('click', function () {
  inputs.forEach(input2 => {
    checarInput2(input2);
  });
});


