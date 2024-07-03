const inputs = document.querySelectorAll('.grupo-input input');

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

document.querySelector('#btn-cadastrar').addEventListener('click', function () {
    inputs.forEach(input => {
        checarInput(input);
    });

    const nome = document.querySelector('#nome-cadastro');
    const email = document.querySelector('#email-cadastro');
    const senha = document.querySelector('#senha-cadastro');
    const confirmaSenha = document.querySelector('#confirmaSenha-cadastro');

    pErro(nome, email, senha, confirmaSenha);
});

function pErro(nome, email, senha, confirmaSenha) {
    if (nome.classList.contains('error')) {
        document.querySelector('#msg1').innerText = 'Introduza um nome válido';
    } else {
        document.querySelector('#msg1').innerText = '';
    }

    if (email.classList.contains('error')) {
        document.querySelector('#msg2').innerText = 'Introduza um email válido';
    } else {
        document.querySelector('#msg2').innerText = '';
    }

    if (senha.classList.contains('error')) {
        document.querySelector('#msg3').innerText = 'Introduza uma senha válida';
    } else {
        document.querySelector('#msg3').innerText = '';
    }

    if (confirmaSenha.classList.contains('error')) {
        document.querySelector('#msg4').innerText = 'As senhas não coincidem';
    } else {
        document.querySelector('#msg4').innerText = '';
    }
}