// obtendo click de botão para chamar a função validLogin
document.querySelector('#btnLogin').addEventListener('click', ()=>{
    validLogin();
})

// Função reponsável pela aquisição dos inputs e chamada de requisição do tipo POST
function validLogin(){
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
        for(let i = 0; i < resposta.length; i++){
            if(resposta[i].email === email && resposta[i].senha === password){
                loginSucess = true;
                break;
            }
        }
        // caso login seja válido essa condição emitirá um alerta e encaminha o usuário para a HOME
        if(loginSucess){
            // resultElement.innerHTML= "Login bem sucedido"
            window.alert('Login bem-sucedido');
            window.location.href = "http://127.0.0.1:5501/index.html"
            // ====================linha a verificar
            document.querySelector('#divLogado').style.display = "block"
        }else{
            window.alert('Email ou Senha inválido')
        }
    })
    .catch(erro => console.log(erro));
}

// Botão de visualização de senha
document.querySelector('#btSenha').addEventListener('click', () => {
    const passwordInput = document.querySelector('#password');
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        }else{
            passwordInput.type = 'password';
            }
})