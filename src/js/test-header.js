
// Criar função header
function createHeader() {

    // criar a tag header
    const header = document.createElement('header');

    // criar a tag nav
    const nav = document.createElement('nav');
    nav.classList = 'menu-navegacao';

    // criar a div-logo-menu
    const divLogoMenu = document.createElement('div');
    divLogoMenu.classList = 'logo-menu';

    // criar a div-nome-mustang
    const divNomeMustang = document.createElement('div');
    divNomeMustang.classList = 'nome-mustang';

    //menu hamburguer

    // const menuHamburguer = document.createElement('button');
    // menuHamburguer.id = 'menu-hamburguer';
    // menuHamburguer.className = 'menu-hamburguer';
    // menuHamburguer.innerHTML = `
    // <span></span>
    // <span></span>
    // <span></span>
    // `;

    // document.body.appendChild(menuHamburguer);

    // document.querySelector('#menu-hamburguer').addEventListener('click', () => {
        
        //menu-navegacao
        // const menu = document.createElement('div');
        // menu.id = 'menu';
        // menu.className = 'menu';
        // const menuContent = document.createElement('div');
        // menuContent.className = 'menu-conteudo';
        // menu.appendChild(menuContent);

        // menu aberto
    //     const ul = document.createElement('ul')
    //     const itensMenu = []
    // })

    // criar ancora-home
    const ancoraHome = document.createElement('a');
    ancoraHome.setAttribute('href', '../../../index.html');

    // criar svg-logo
    const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgLogo.setAttribute('id', 'Camada_1');
    svgLogo.setAttribute('data-name', 'Camada 1');
    svgLogo.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgLogo.setAttribute('version', '1.1');
    svgLogo.setAttribute('viewBox', '0 0 250 129.4');
    svgLogo.setAttribute('width', '80');

    // criar path-logo
    const pathLogo = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathLogo.classList = 'cls-1';
    pathLogo.setAttribute('d', 'M96.4,79.8c1.2,1.8,3.8,5.7,4.3,6.6.5.9,1.4,2.3-1.2,2.6-2.6.3-6.1.8-7.5.5-1.6-.3-2.7-1-1.6-2.9.8-1.4,3.8-6,4.2-6.6.4-.6,1.1-1.4,1.9-.1M116.8,81.8c-.3,1.8-2.1,1.9-3.9,2-2.3-3-3.5-5.7-4.1-7.5.3-.8,1-2.8,1.4-3.8.4-1,1.5-.6,2.7-.4,8.2,1.4,16.7-4.4,23.7-5.6,2.6-.4,2,1.1,1.7,2.7-.3,1.6-2.5,9.6-4.2,13.7-1.4,3.3-4.2,4.4-7.6,5-4.1.7-5.1,3.4-7.2,4.4-.9-.6-1.9-1.8-2.3-2.6.4-1.4,1.7-1.4,3.2-2,2.7-.9,3.4-2.1,4.6-2.9,3.7-2.7,2.9-4.8.8-4.6-2,.2-5.8.2-7,0-1-.1-1.6-.1-1.9,1.6M17,56.8c-.8,1.1-.5,1.3-.5,2.5,0,1.6,1.7,1.9,2.9,4.3.6,1.3,1.1,2.1,2.6,2.5,1.5.4,5.3-.5,6.8-2.1,1.6-1.7.4-3.8,1.1-5.1,1.7-3.1,4.7-4.2,6-5.4,1.3-1.1,2.7-1.6,4.6-2,5.1-1.3,5.7-3.9,7.6-6.5,1.8-2.5,2.9-2.1,3.6-1.9,7.9,1.9,17.2,5.5,21.5,8.1,7.3,4.5,10.3,9.6,11.7,17.6-3.5,5.7-2,7.5-1.9,9.8.3,6.1-2.1,9.1-2.6,10.7-.6,1.5-.5,2.2.3,3.1.8.9,1.8,2.5,3,3.6,1.2,1.1,2.4.6,3.6.3,6.3-1.6,11.3-2.3,17.5-2.5,4.1-.2,7.9,3.9,9,5,1,1.1-.5,1.8-1.4,2.4-2.4,1.6-3.4,3.5-5.4,4.4-2,.9-3.9,1.5-4.9,3.6-.7,1.5.2,2.8,1,3.4-1,.6-3.2,2.3-4.3,3.3-1,.9-1.3,2.9.2,3.4,1.4.5,4,1.1,5.4,1.3,1.8.2,2-1,2.3-1.5,1.6-2.3,5-5.8,8-6.6,5.3-1.3,5.6-4.1,9-7.1,2-1.8,2.3-.3,4.7,1.7,4.7,3.8,4.9.7,9.1,3.3,6.9,4.3,7.2,1.6,6.8.5-.4-1.1-1.2-2.8-2.9-6.2-1.9-3.8-4.7-.6-7.2-2.7-1.9-1.7-3.3-4-3.3-4,3.4-3.6,4.2-1.7,10.9-2,6.2-.3,6.5-2.4,7.9-6.7,3.7-11.1,9.8-13.7,18.5-19.5,7.3-4.8,4.2-7.2,8.6-11.5,2.3-2.2,2.3-3.6,2.8-5.9.5-2.4.8-2.4,2.9-2.7,2.1-.3,10.3-1.2,14.4-4.8,4.5-3.9,4.6-2.3,9.9-2.1,17.2.8,27.8-11.2,28.1-17.4.2-3.4-1.6-4.1-3.4-2.5-1.8,1.7-7,5.6-15,6.4-10.7,1.1-14.5-1.7-17.8-1.1-6.5,1.2-6.2,4-9.8,9.5-2.1,3.2-14.9-2.3-16.7-3.2-8.1-4.1-17.2-9.6-32.4-7.2-17.6,2.7-30.7-.4-37.3-2.8-5.1-1.8-2.6-2.2-1.4-3.1,1.2-.9,4.9-3.5,4.1-5.1-1.1-2.4-14.3,4.8-16.4,2.2-1-1.2,9-6.1,6.7-9-2.4-2.9-5.5,3-13.7,5.3-4.6,1.3-6.2,1.9-6.8,1.1-1.2-1.5,1.2-2.6,0-3.7-1.6-1.4-6.1,1.9-9.9,3.6-4.1,1.8.3-4.9-6.9,0-5.3,3.6-8.9,4.1-12.8,4.1-2.6,0-1.6-.8-2-2.7-.4-1.8-1.4-7.2-2.7-8.1-2.7-1.7-3.1,4.2-3.9,8.5-.8,4.3-2.7,7.4-7.4,11.6-3.7,3.3-3.2,5.5-4.2,8.7-1.7,5.5-3.3,11.9-8.1,18.7');

    // criar img-nome
    const imgNome = document.createElement('img');
    imgNome.setAttribute('src', '/src/img/mustang-name-white.png');
    imgNome.setAttribute('alt', 'nome da logo mustang');
    imgNome.classList = 'img-header';

    // Appendes do logo-menu
    svgLogo.append(pathLogo);
    ancoraHome.append(svgLogo);
    divNomeMustang.append(ancoraHome, imgNome);
    divLogoMenu.append(divNomeMustang);

    // criar ul
    const ul = document.createElement('ul');

    // criar div-dropdown
    const divDropdown = document.createElement('div');
    divDropdown.classList = 'dropdown';

    // criar botao-dropbtn
    const botaoDropbtn = document.createElement('button');
    botaoDropbtn.classList = 'dropbtn';
    botaoDropbtn.innerHTML = 'Veículos';

    // criar div dropdown-content
    const divDropdownContent = document.createElement('div');
    divDropdownContent.classList = 'dropdown-content';

    //função para estilizar internamente o dropdown  ~~ramonespier da silva & alves da silva
    botaoDropbtn.addEventListener('mouseenter', () => {
        document.querySelector('.menu-navegacao').classList.add('active');
        document.querySelector('.img-header').classList.add('active');
    });

    divDropdownContent.addEventListener('mouseenter', () => {
        document.querySelector('.menu-navegacao').classList.add('active');
        document.querySelector('.img-header').classList.add('active');
    });

    divDropdownContent.addEventListener('mouseleave', () => {
        document.querySelector('.menu-navegacao').classList.remove('active');
        document.querySelector('.img-header').classList.remove('active');
    });

    botaoDropbtn.addEventListener('mouseleave', () => {
        document.querySelector('.menu-navegacao').classList.remove('active');
        document.querySelector('.img-header').classList.remove('active');
    });


    // criar div car-item 1
    const divCarItem = document.createElement('div');
    divCarItem.classList = 'car-item';

    // criar img Car 1
    const imgCar1 = document.createElement('img');
    imgCar1.setAttribute('src', '/src/img/dropdown-veiculos/1964.png');
    imgCar1.setAttribute('alt', 'Carro mustang 1964 todo preto');

    // criar h3-1960
    const h3Car1 = document.createElement('h3');
    h3Car1.classList = 'font-1960';
    h3Car1.innerHTML = 'Mustang 1964';

    // criar div buttons
    const divButtons = document.createElement('div');
    divButtons.classList = 'buttons';

    // criar button details
    const buttonDetails = document.createElement('button');
    buttonDetails.classList = 'details';
    buttonDetails.setAttribute('onclick', 'details64()');
    buttonDetails.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy = document.createElement('button');
    buttonBuy.classList = 'buy';
    buttonBuy.setAttribute('onclick', 'buy64()');
    buttonBuy.innerHTML = 'Comprar';

    // Appende car item 1
    divButtons.append(buttonDetails, buttonBuy);
    divCarItem.append(imgCar1, h3Car1, divButtons);

    // criar div car-item2
    const divCarItem2 = document.createElement('div');
    divCarItem2.classList = 'car-item';

    // criar img Car 2
    const imgCar2 = document.createElement('img');
    imgCar2.setAttribute('src', '/src/img/dropdown-veiculos/1974.png');
    imgCar2.setAttribute('alt', 'Carro mustang 1974 todo preto');

    // criar h3-1970
    const h3Car2 = document.createElement('h3');
    h3Car2.classList = 'font-1970';
    h3Car2.innerHTML = 'Mustang 1974';

    // criar div buttons
    const divButtons2 = document.createElement('div');
    divButtons2.classList = 'buttons';

    // criar button details
    const buttonDetails2 = document.createElement('button');
    buttonDetails2.classList = 'details';
    buttonDetails2.setAttribute('onclick', 'details74()');
    buttonDetails2.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy2 = document.createElement('button');
    buttonBuy2.classList = 'buy';
    buttonBuy2.setAttribute('onclick', 'buy74()');
    buttonBuy2.innerHTML = 'Comprar';

    // appendes car-item2
    divButtons2.append(buttonDetails2, buttonBuy2);
    divCarItem2.append(imgCar2, h3Car2, divButtons2);

    // criar div car-item3
    const divCarItem3 = document.createElement('div');
    divCarItem3.classList = 'car-item';

    // criar img Car 3
    const imgCar3 = document.createElement('img');
    imgCar3.setAttribute('src', '/src/img/dropdown-veiculos/1984.png');
    imgCar3.setAttribute('alt', 'Carro mustang 1984 todo preto');

    // criar h3-1980
    const h3Car3 = document.createElement('h3');
    h3Car3.classList = 'font-1980';
    h3Car3.innerHTML = 'Mustang 1984';

    // criar div buttons
    const divButtons3 = document.createElement('div');
    divButtons3.classList = 'buttons';

    // criar button details
    const buttonDetails3 = document.createElement('button');
    buttonDetails3.classList = 'details';
    buttonDetails3.setAttribute('onclick', 'details84()');
    buttonDetails3.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy3 = document.createElement('button');
    buttonBuy3.classList = 'buy';
    buttonBuy3.setAttribute('onclick', 'buy84()');
    buttonBuy3.innerHTML = 'Comprar';

    // appendes car-item3
    divButtons3.append(buttonDetails3, buttonBuy3);
    divCarItem3.append(imgCar3, h3Car3, divButtons3);

    // criar div car-item4
    const divCarItem4 = document.createElement('div');
    divCarItem4.classList = 'car-item';

    // criar img Car 4
    const imgCar4 = document.createElement('img');
    imgCar4.setAttribute('src', '/src/img/dropdown-veiculos/1994(2).png');
    imgCar4.setAttribute('alt', 'Carro mustang 1994 todo preto');

    // criar h3-1990
    const h3Car4 = document.createElement('h3');
    h3Car4.classList = 'font-1990';
    h3Car4.innerHTML = 'Mustang 1994';

    // criar div buttons
    const divButtons4 = document.createElement('div');
    divButtons4.classList = 'buttons';

    // criar button details
    const buttonDetails4 = document.createElement('button');
    buttonDetails4.classList = 'details';
    buttonDetails4.setAttribute('onclick', 'details94()');
    buttonDetails4.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy4 = document.createElement('button');
    buttonBuy4.classList = 'buy';
    buttonBuy4.setAttribute('onclick', 'buy94()');
    buttonBuy4.innerHTML = 'Comprar';

    // appendes car-item4
    divButtons4.append(buttonDetails4, buttonBuy4);
    divCarItem4.append(imgCar4, h3Car4, divButtons4);

    // criar div car-item5
    const divCarItem5 = document.createElement('div');
    divCarItem5.classList = 'car-item';

    // criar img Car 5
    const imgCar5 = document.createElement('img');
    imgCar5.setAttribute('src', '/src/img/dropdown-veiculos/2004.png');
    imgCar5.setAttribute('alt', 'Carro mustang 2004 todo preto');

    // criar h3-2000
    const h3Car5 = document.createElement('h3');
    h3Car5.classList = 'font-2000';
    h3Car5.innerHTML = 'Mustang 2004';

    // criar div buttons
    const divButtons5 = document.createElement('div');
    divButtons5.classList = 'buttons';

    // criar button details
    const buttonDetails5 = document.createElement('button');
    buttonDetails5.classList = 'details';
    buttonDetails5.setAttribute('onclick', 'details04()');
    buttonDetails5.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy5 = document.createElement('button');
    buttonBuy5.classList = 'buy';
    buttonBuy5.setAttribute('onclick', 'buy04()');
    buttonBuy5.innerHTML = 'Comprar';

    // appendes car-item5
    divButtons5.append(buttonDetails5, buttonBuy5);
    divCarItem5.append(imgCar5, h3Car5, divButtons5);

    // criar div car-item6
    const divCarItem6 = document.createElement('div');
    divCarItem6.classList = 'car-item';

    // criar img Car 6
    const imgCar6 = document.createElement('img');
    imgCar6.setAttribute('src', '/src/img/dropdown-veiculos/2014.png');
    imgCar6.setAttribute('alt', 'Carro mustang 2014 todo preto');

    // criar h3-2010
    const h3Car6 = document.createElement('h3');
    h3Car6.classList = 'font-2010';
    h3Car6.innerHTML = 'Mustang 2014';

    // criar div buttons
    const divButtons6 = document.createElement('div');
    divButtons6.classList = 'buttons';

    // criar button details
    const buttonDetails6 = document.createElement('button');
    buttonDetails6.classList = 'details';
    buttonDetails6.setAttribute('onclick', 'details14()');
    buttonDetails6.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy6 = document.createElement('button');
    buttonBuy6.classList = 'buy';
    buttonBuy6.setAttribute('onclick', 'buy14()');
    buttonBuy6.innerHTML = 'Comprar';

    // appendes car-item6
    divButtons6.append(buttonDetails6, buttonBuy6);
    divCarItem6.append(imgCar6, h3Car6, divButtons6);

    // criar div car-item7
    const divCarItem7 = document.createElement('div');
    divCarItem7.classList = 'car-item';

    // criar img Car 7
    const imgCar7 = document.createElement('img');
    imgCar7.setAttribute('src', '/src/img/dropdown-veiculos/2024.png');
    imgCar7.setAttribute('alt', 'Carro mustang 2024 todo preto');

    // criar h3-2020
    const h3Car7 = document.createElement('h3');
    h3Car7.classList = 'font-2020';
    h3Car7.innerHTML = 'Mustang 2024';

    // criar div buttons
    const divButtons7 = document.createElement('div');
    divButtons7.classList = 'buttons';

    // criar button details
    const buttonDetails7 = document.createElement('button');
    buttonDetails7.classList = 'details';
    buttonDetails7.setAttribute('onclick', 'details24()');
    buttonDetails7.innerHTML = 'Detalhes';

    // criar button buy
    const buttonBuy7 = document.createElement('button');
    buttonBuy7.classList = 'buy';
    buttonBuy7.setAttribute('onclick', 'buy24()');
    buttonBuy7.innerHTML = 'Comprar';

    // appendes car-item7
    divButtons7.append(buttonDetails7, buttonBuy7);
    divCarItem7.append(imgCar7, h3Car7, divButtons7);

    
    // criar div car-item8
    const divCarItem8 = document.createElement('div');
    divCarItem8.classList = 'car-item';

    // criar img Car 8
    const imgCar8 = document.createElement('img');
    imgCar8.setAttribute('src', '/src/img/dropdown-veiculos/Mustang-60-Anos_2024_-Logo (1).png');
    imgCar8.setAttribute('alt', 'imagem do logo comemoração mustang');

    // criar ancora car 8
    const ancora8 = document.createElement('a');
    ancora8.classList = 'comemora60-anos';
    ancora8.setAttribute('href','/src/html/navegacao/comemoracao.html');

    // appendes car-item8
    ancora8.append(imgCar8);
    divCarItem8.append(ancora8);
    
    // Appendes no dropdown-content
    divDropdownContent.append(divCarItem, divCarItem2, divCarItem3, divCarItem4, divCarItem5, divCarItem6, divCarItem7,divCarItem8);

    // Append no dropdown
    divDropdown.append(botaoDropbtn, divDropdownContent);

    // criar li1 - comemoração
    const li1 = document.createElement('li');

    // criar ancora li1 - comemoração
    const ancoraLi1 = document.createElement('a');
    ancoraLi1.setAttribute('href', '/src/html/navegacao/comemoracao.html');
    ancoraLi1.classList = 'comemoracao'
    ancoraLi1.innerHTML = 'Comemoração';

    // criar li2 - sobre nós
    const li2 = document.createElement('li');
    // criar ancora li2 - sobre nós
    const ancoraLi2 = document.createElement('a');
    ancoraLi2.setAttribute('href', '/src/html/navegacao/sobrenos.html');
    ancoraLi2.classList = 'sobre-nos';
    ancoraLi2.innerHTML = 'Sobre Nós';

    // append das li
    li1.append(ancoraLi1);
    li2.append(ancoraLi2);


    // Appende na Ul
    ul.append(divDropdown, li1, li2);

    // criar div icones-menu
    const divIconesMenu = document.createElement('div');
    divIconesMenu.classList = 'icones-menu';
    
    // criar div translate
    const divTranslate = document.createElement('div');
    divTranslate.setAttribute('id', 'google_translate_element');
    divTranslate.setAttribute('class', 'invisivel');
    
    // criar button troca-idioma
    const buttonTrocaIdioma = document.createElement('button');
    buttonTrocaIdioma.setAttribute('type', 'button');
    buttonTrocaIdioma.setAttribute('id', 'troca-idioma');

    
    // criar svg idioma
    const svgIdioma = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIdioma.setAttribute('viewBox', '0 0 24 24');
    svgIdioma.setAttribute('width', '25');
    svgIdioma.setAttribute('xmlns', 'http://www.w3.org/2000/svg');  

    // criar path idioma
    const pathIdioma = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // pathIdioma.setAttribute('fill','black');
    pathIdioma.setAttribute('d', 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z');

    // appendes do button troca-idioma
    svgIdioma.append(pathIdioma);
    buttonTrocaIdioma.append(svgIdioma);

    // criar ancora login
    const ancoraLogin = document.createElement('a');
    ancoraLogin.setAttribute('href', '/src/html/navegacao/login.html');

    // criar svg login
    const svgLogin = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgLogin.classList = 'tds-icon tds-icon-person'
    svgLogin.setAttribute('viewBox', '0 0 24 24');
    svgLogin.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgLogin.setAttribute('width', '25');

    // criar path login
    const pathLogin = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // pathLogin.setAttribute('fill','black');
    pathLogin.setAttribute('d', 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z');

    // appendes do login
    svgLogin.append(pathLogin);
    ancoraLogin.append(svgLogin);

    // appendes do icones-menu
    divIconesMenu.append(divTranslate, buttonTrocaIdioma, ancoraLogin);

    // Appendes no nav
    nav.append(divLogoMenu, ul, divIconesMenu);

    // Appendes no header
    header.append(nav)

    // inserir o header no html
    const headerTest = document.querySelector('#header')
    headerTest.append(header)
}
document.addEventListener('DOMContentLoaded', createHeader)