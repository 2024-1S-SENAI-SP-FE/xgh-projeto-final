# Iniciando projeto 

## index.html
Neste arquivo está o corpo da página.

- No `head` da página linkamos os seguintes arquivos:
~~~html
<head>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
~~~

`reset.css` para que seja feito o reset da página web, eliminando qualquer edição do navegador;
`style.css` para que seja efetuado as alterações de estilização da página.

- No `body` incluimos uma `main`, cuja responsabilidade é conter as `div` de cada modelo de carro:

~~~html
<main>
    <div class="geracao" id="model-4">
        <h2 class="titulo-model">Mustang 4º Geração</h2>
        <h3 class="sub-model">A partir de US$ 25.000</h3>
        <img src="/img/model-4.png" alt="">
    <button type="button" class="btMais">Saiba Mais</button>
    </div>
</main>
~~~