
const usuarios = [
    {
        "id": "test@test.com", 
        "senha": "senha1"
    },
    {
        "id": "user2", 
        "senha": "senha2"
    },
    {
        "id": "user3", 
        "senha": "senha3"
    }
];

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

document.querySelector('#btSenha').addEventListener('click', () => {
    const passwordInput = document.querySelector('#password');
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        }else{
            passwordInput.type = 'password';
            }
})