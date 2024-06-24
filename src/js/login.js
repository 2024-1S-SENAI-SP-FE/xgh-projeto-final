document.querySelector('#btnLogin').addEventListener('click', ()=>{
    validLogin();
})

function validLogin(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    let loginSucess = false;

    const requisicaoGet = new Request('http://localhost:3000/usuarios', {
            "method": "GET",
            "headers": {
                "Content-type": "application/json"
            }
        });

    fetch(requisicaoGet)
    .then(resposta => resposta.json())
    .then(resposta => {
        for(let i = 0; i < resposta.length; i++){
            if(resposta[i].email === email && resposta[i].senha === password){
                loginSucess = true;
                break;
            }
        }
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