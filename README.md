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

- No `body` incluimos um `header`, para que seja feito a navegação da página.

Dentro do `header` foi inserido um logo no formato `svg`, seguido por uma lista não ordenada contendo as `ancoras` de navegação : `Veiculos`, `Comemoração`, `Sobre Nós`, e finalizando com dois icones também em formato `svg` no qual o primeiro é para a tradução da página, e o segundo para que seja feito o `login` do usuário.

![Ilustração do Header](/src/img/img-doc/ilustracao-header.jpeg)

~~~html
<header>
    <nav class="menu-navegacao">
        <div class="logo-menu">
            <a href=".">
                <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 250 129.4" width="25">
                    <path class="cls-1" d="M96.4,79.8c1.2,1.8,3.8,5.7,4.3,6.6.5.9,1.4,2.3-1.2,2.6-2.6.3-6.1.8-7.5.5-1.6-.3-2.7-1-1.6-2.9.8-1.4,3.8-6,4.2-6.6.4-.6,1.1-1.4,1.9-.1M116.8,81.8c-.3,1.8-2.1,1.9-3.9,2-2.3-3-3.5-5.7-4.1-7.5.3-.8,1-2.8,1.4-3.8.4-1,1.5-.6,2.7-.4,8.2,1.4,16.7-4.4,23.7-5.6,2.6-.4,2,1.1,1.7,2.7-.3,1.6-2.5,9.6-4.2,13.7-1.4,3.3-4.2,4.4-7.6,5-4.1.7-5.1,3.4-7.2,4.4-.9-.6-1.9-1.8-2.3-2.6.4-1.4,1.7-1.4,3.2-2,2.7-.9,3.4-2.1,4.6-2.9,3.7-2.7,2.9-4.8.8-4.6-2,.2-5.8.2-7,0-1-.1-1.6-.1-1.9,1.6M17,56.8c-.8,1.1-.5,1.3-.5,2.5,0,1.6,1.7,1.9,2.9,4.3.6,1.3,1.1,2.1,2.6,2.5,1.5.4,5.3-.5,6.8-2.1,1.6-1.7.4-3.8,1.1-5.1,1.7-3.1,4.7-4.2,6-5.4,1.3-1.1,2.7-1.6,4.6-2,5.1-1.3,5.7-3.9,7.6-6.5,1.8-2.5,2.9-2.1,3.6-1.9,7.9,1.9,17.2,5.5,21.5,8.1,7.3,4.5,10.3,9.6,11.7,17.6-3.5,5.7-2,7.5-1.9,9.8.3,6.1-2.1,9.1-2.6,10.7-.6,1.5-.5,2.2.3,3.1.8.9,1.8,2.5,3,3.6,1.2,1.1,2.4.6,3.6.3,6.3-1.6,11.3-2.3,17.5-2.5,4.1-.2,7.9,3.9,9,5,1,1.1-.5,1.8-1.4,2.4-2.4,1.6-3.4,3.5-5.4,4.4-2,.9-3.9,1.5-4.9,3.6-.7,1.5.2,2.8,1,3.4-1,.6-3.2,2.3-4.3,3.3-1,.9-1.3,2.9.2,3.4,1.4.5,4,1.1,5.4,1.3,1.8.2,2-1,2.3-1.5,1.6-2.3,5-5.8,8-6.6,5.3-1.3,5.6-4.1,9-7.1,2-1.8,2.3-.3,4.7,1.7,4.7,3.8,4.9.7,9.1,3.3,6.9,4.3,7.2,1.6,6.8.5-.4-1.1-1.2-2.8-2.9-6.2-1.9-3.8-4.7-.6-7.2-2.7-1.9-1.7-3.3-4-3.3-4,3.4-3.6,4.2-1.7,10.9-2,6.2-.3,6.5-2.4,7.9-6.7,3.7-11.1,9.8-13.7,18.5-19.5,7.3-4.8,4.2-7.2,8.6-11.5,2.3-2.2,2.3-3.6,2.8-5.9.5-2.4.8-2.4,2.9-2.7,2.1-.3,10.3-1.2,14.4-4.8,4.5-3.9,4.6-2.3,9.9-2.1,17.2.8,27.8-11.2,28.1-17.4.2-3.4-1.6-4.1-3.4-2.5-1.8,1.7-7,5.6-15,6.4-10.7,1.1-14.5-1.7-17.8-1.1-6.5,1.2-6.2,4-9.8,9.5-2.1,3.2-14.9-2.3-16.7-3.2-8.1-4.1-17.2-9.6-32.4-7.2-17.6,2.7-30.7-.4-37.3-2.8-5.1-1.8-2.6-2.2-1.4-3.1,1.2-.9,4.9-3.5,4.1-5.1-1.1-2.4-14.3,4.8-16.4,2.2-1-1.2,9-6.1,6.7-9-2.4-2.9-5.5,3-13.7,5.3-4.6,1.3-6.2,1.9-6.8,1.1-1.2-1.5,1.2-2.6,0-3.7-1.6-1.4-6.1,1.9-9.9,3.6-4.1,1.8.3-4.9-6.9,0-5.3,3.6-8.9,4.1-12.8,4.1-2.6,0-1.6-.8-2-2.7-.4-1.8-1.4-7.2-2.7-8.1-2.7-1.7-3.1,4.2-3.9,8.5-.8,4.3-2.7,7.4-7.4,11.6-3.7,3.3-3.2,5.5-4.2,8.7-1.7,5.5-3.3,11.9-8.1,18.7" />
                </svg>
            </a>
        </div>

        <ul>
            <li><a href=".">Veículos</a></li>
            <li><a href=".">Comemoração</a></li>
            <li><a href=".">Sobre nós</a></li>
        </ul>

        <div class="icones-menu">
            <button type="button" id="troca-idioma">
            <svg viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg">
                <path fill="black" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z">
                </path>
            </svg>
            </button>
            
            <a href="">
                <svg class="tds-icon tds-icon-person" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="25">
                    <path fill="black" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z">
                    </path>
                </svg>
            </a>
        </div>
    </nav>
</header>
~~~

- No `body` incluimos uma `main`, cuja responsabilidade é conter as `section` de cada modelo de carro.

1º section: modelo mustang 2024 ||  `class` = "geracao" ||    `id` = "model-7"

~~~html
<main>
    <section class="geracao" id="model-7">
        <h2 class="titulo-model">Mustang Geração 7º</h2>
        <h3 class="sub-model">A partir de US$ 30.000</h3>
        <img src="/src/img/model-7.png" alt="" />
        <button type="button" class="btSaibaMais">Saiba Mais</button>
    </section>
</main>
~~~

2º section: modelo mustang 2014 ||  `class` = "geracao" ||    `id` = "model-6"

~~~html
<div class="geracao" id="model-6">
    <h2 class="titulo-model">Mustang 6º Geração </h2>
    <h3 class="sub-model"> A partir de US$ 20,000</h3>
    <img src="/src/img/model-6.png" alt="">
    <button type="button" class="btSaibaMais">Saiba Mais</button>
</div>
~~~

4º section: modelo mustang 1994 ||  `class` = "geracao" ||    `id` = "model-4"

~~~html
<div class="geracao" id="model-4">
    <h2 class="titulo-model">Mustang 4º Geração</h2>
    <h3 class="sub-model">A partir de US$ 25.000</h3>
    <img src="/src/img/model-4.png" alt="">
    <button type="button" class="btSaibaMais">Saiba Mais</button>
</div>
~~~