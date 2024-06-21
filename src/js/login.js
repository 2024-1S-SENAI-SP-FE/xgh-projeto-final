// document.addEventListener('DOMContentLoaded', function () {
//     const botoesPreco = document.querySelectorAll('.opcoes-preco button');
//     const opcoesTracao = document.querySelectorAll('.opcoes-tracao .opcao');
//     const opcoesPintura = document.querySelectorAll('.opcoes-pintura .pintura');

//     botoesPreco.forEach(botao => {
//         botao.addEventListener('click', function () {
//             botoesPreco.forEach(btn => btn.classList.remove('ativo'));
//             this.classList.add('ativo');
//         });
//     });

//     opcoesTracao.forEach(opcao => {
//         opcao.addEventListener('click', function () {
//             opcoesTracao.forEach(opt => opt.classList.remove('ativo'));
//             this.classList.add('ativo');
//         });
//     });

//     opcoesPintura.forEach(pintura => {
//         pintura.addEventListener('click', function () {
//             opcoesPintura.forEach(pnt => pnt.classList.remove('ativo'));
//             this.classList.add('ativo');
//         });
//     });
// });


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