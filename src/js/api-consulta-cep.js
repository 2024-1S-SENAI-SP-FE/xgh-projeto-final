document.querySelector('#btnConsulta').addEventListener('click', function(){
    const cep = document.querySelector('#CEP').value.replace(/\D/g, '');
    // condição para campo em branco
    if(cep != ""){
        const validaCep = /^[0-9]{8}$/;
        // condição para certificar que o cep tenha apenas numeros e até 8 caracteres
        if(validaCep.test(cep)){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                let outLogradouro = "";
                outLogradouro += JSON.stringify(data.logradouro, null, 2);
                document.getElementById("logradouro").innerHTML = outLogradouro;

                let outBairro = "";
                outBairro += JSON.stringify(data.bairro, null, 2);
                document.getElementById("bairro").innerHTML = outBairro;

                let outLocalidade = "";
                outLocalidade += JSON.stringify(data.localidade, null, 2);
                document.getElementById("localidade").innerHTML = outLocalidade;

                let outUf = "";
                outUf += JSON.stringify(data.uf, null, 2);
                document.getElementById("uf").innerHTML = outUf;
            })
        }else{
            alert("CEP inválido");
        }
    }else{
        alert('Preencha o campo "CEP"');
    }

});

document.querySelector('#btnConsulta').addEventListener('click', function() {
    const myToken = '7de32f21d1de7895a4bd24232e759e599eeb8397'; 
    const cep = document.querySelector('#CEP').value;


    fetch(`https://www.cepcerto.com/ws/json-frete-personalizado/04266060/${cep}/5.0/7de32f21d1de7895a4bd24232e759e599eeb8397`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${myToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let outFrete = "";
        outFrete += JSON.stringify(data.valorFrete, null, 2);
        const frete = document.querySelector('#frete');
        frete.innerHTML = outFrete;

        document.querySelector('#frete').innerHTML = JSON.stringify(data.valorFrete, null, 2);
    })
    .catch(error => console.error('Error:', error));
});