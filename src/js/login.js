// JSON de usuários
const usuarios = [
    {
        "id": "test@test.com", 
        "nome": "",
        "senha": "senha1"
    },
    {
        "id": "", 
        "nome": "",
        "senha": ""
    },
    {
        "id": "", 
        "nome": "",
        "senha": ""
    }
];

// Validação de Login
document.querySelector('#btnLogin').addEventListener('click', ()=>{
    validLogin();
})

function validLogin(){
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    let loginSucess = false;

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].id === email && usuarios[i].senha === password){
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
