document.querySelector('#btnRecuperar').addEventListener('click', () =>{
    document.querySelector('#senhaRecuperada').innerHTML = '';
    consultaReq();
})

function consultaReq() {
    const email = document.querySelector('#email').value;

    const requisicaoGet = new Request('http://localhost:3000/usuarios', {
        "method": "GET",
        "headers": {
            "Content-type": "application/json"
        }
    })

    fetch(requisicaoGet)
    .then (resposta => resposta.json())
    .then (resposta => {
        for(let i = 0; i < resposta.length; i++){
            if(resposta[i].email === email){
                const emailRecuperado = resposta[i].email;
                const senhaRecuperada = resposta[i].senha;
                window.alert('Senha recuperada com sucesso!');
                document.querySelector('#senhaRecuperada').value = `${senhaRecuperada};`
            }
            // }else{
            //     window.alert('Email não encontrado')
            // }
        }
    })
}