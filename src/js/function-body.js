function criaLink(){
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '/src/styles/reset.css');
    
    const linkStyle = document.createElement('link');
    linkStyle.setAttribute('rel', 'stylesheet');
    linkStyle.setAttribute('href', '/src/styles/header-footer.css');

    const linkStyleDrop = document.createElement('link');
    linkStyleDrop.setAttribute('rel', 'stylesheet');
    linkStyleDrop.setAttribute('href', '/src/styles/dropdown.css');

    // const tradutor = document.createElement('script');
    // tradutor.setAttribute('type', 'text/javascript');
    // tradutor.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');

    document.head.append( linkStyle, linkStyleDrop);
    document.querySelector('title').insertAdjacentElement('beforebegin', link);
    corpo();
}

function corpo(){
    const divHeader= document.createElement('div');
    divHeader.setAttribute('id','header');

    const divFooter = document.createElement('div');
    divFooter.setAttribute('id','footer');

    // const scriptFooter = document.createElement('script');
    // scriptFooter.setAttribute('src','/src/js/footer.js');

    const scriptButtonDrop = document.createElement('script');
    scriptButtonDrop.setAttribute('src','/src/js/botoes-dropdown.js');

    document.body.append(divHeader,divFooter,scriptButtonDrop);

    createFooter();
}

// Função para criar o footer
function createFooter() {
    // Criar o elemento footer
    const footer = document.createElement('footer');
    footer.classList = 'footer-design';

    // Criar o container do logo
    const logoContainer = document.createElement('div');
    logoContainer.classList = 'logo-conteiner';

    // Criar o elemento SVG logo
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'Camada_1');
    svg.setAttribute('data-name', 'Camada 1');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('viewBox', '0 0 250 129.4');
    svg.setAttribute('width', '110');
    svg.setAttribute('fill', 'white');

    // Criar o caminho do SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.classList = 'cls-1';
    path.setAttribute('d', 'M96.4,79.8c1.2,1.8,3.8,5.7,4.3,6.6.5.9,1.4,2.3-1.2,2.6-2.6.3-6.1.8-7.5.5-1.6-.3-2.7-1-1.6-2.9.8-1.4,3.8-6,4.2-6.6.4-.6,1.1-1.4,1.9-.1M116.8,81.8c-.3,1.8-2.1,1.9-3.9,2-2.3-3-3.5-5.7-4.1-7.5.3-.8,1-2.8,1.4-3.8.4-1,1.5-.6,2.7-.4,8.2,1.4,16.7-4.4,23.7-5.6,2.6-.4,2,1.1,1.7,2.7-.3,1.6-2.5,9.6-4.2,13.7-1.4,3.3-4.2,4.4-7.6,5-4.1.7-5.1,3.4-7.2,4.4-.9-.6-1.9-1.8-2.3-2.6.4-1.4,1.7-1.4,3.2-2,2.7-.9,3.4-2.1,4.6-2.9,3.7-2.7,2.9-4.8.8-4.6-2,.2-5.8.2-7,0-1-.1-1.6-.1-1.9,1.6M17,56.8c-.8,1.1-.5,1.3-.5,2.5,0,1.6,1.7,1.9,2.9,4.3.6,1.3,1.1,2.1,2.6,2.5,1.5.4,5.3-.5,6.8-2.1,1.6-1.7.4-3.8,1.1-5.1,1.7-3.1,4.7-4.2,6-5.4,1.3-1.1,2.7-1.6,4.6-2,5.1-1.3,5.7-3.9,7.6-6.5,1.8-2.5,2.9-2.1,3.6-1.9,7.9,1.9,17.2,5.5,21.5,8.1,7.3,4.5,10.3,9.6,11.7,17.6-3.5,5.7-2,7.5-1.9,9.8.3,6.1-2.1,9.1-2.6,10.7-.6,1.5-.5,2.2.3,3.1.8.9,1.8,2.5,3,3.6,1.2,1.1,2.4.6,3.6.3,6.3-1.6,11.3-2.3,17.5-2.5,4.1-.2,7.9,3.9,9,5,1,1.1-.5,1.8-1.4,2.4-2.4,1.6-3.4,3.5-5.4,4.4-2,.9-3.9,1.5-4.9,3.6-.7,1.5.2,2.8,1,3.4-1,.6-3.2,2.3-4.3,3.3-1,.9-1.3,2.9.2,3.4,1.4.5,4,1.1,5.4,1.3,1.8.2,2-1,2.3-1.5,1.6-2.3,5-5.8,8-6.6,5.3-1.3,5.6-4.1,9-7.1,2-1.8,2.3-.3,4.7,1.7,4.7,3.8,4.9.7,9.1,3.3,6.9,4.3,7.2,1.6,6.8.5-.4-1.1-1.2-2.8-2.9-6.2-1.9-3.8-4.7-.6-7.2-2.7-1.9-1.7-3.3-4-3.3-4,3.4-3.6,4.2-1.7,10.9-2,6.2-.3,6.5-2.4,7.9-6.7,3.7-11.1,9.8-13.7,18.5-19.5,7.3-4.8,4.2-7.2,8.6-11.5,2.3-2.2,2.3-3.6,2.8-5.9.5-2.4.8-2.4,2.9-2.7,2.1-.3,10.3-1.2,14.4-4.8,4.5-3.9,4.6-2.3,9.9-2.1,17.2.8,27.8-11.2,28.1-17.4.2-3.4-1.6-4.1-3.4-2.5-1.8,1.7-7,5.6-15,6.4-10.7,1.1-14.5-1.7-17.8-1.1-6.5,1.2-6.2,4-9.8,9.5-2.1,3.2-14.9-2.3-16.7-3.2-8.1-4.1-17.2-9.6-32.4-7.2-17.6,2.7-30.7-.4-37.3-2.8-5.1-1.8-2.6-2.2-1.4-3.1,1.2-.9,4.9-3.5,4.1-5.1-1.1-2.4-14.3,4.8-16.4,2.2-1-1.2,9-6.1,6.7-9-2.4-2.9-5.5,3-13.7,5.3-4.6,1.3-6.2,1.9-6.8,1.1-1.2-1.5,1.2-2.6,0-3.7-1.6-1.4-6.1,1.9-9.9,3.6-4.1,1.8.3-4.9-6.9,0-5.3,3.6-8.9,4.1-12.8,4.1-2.6,0-1.6-.8-2-2.7-.4-1.8-1.4-7.2-2.7-8.1-2.7-1.7-3.1,4.2-3.9,8.5-.8,4.3-2.7,7.4-7.4,11.6-3.7,3.3-3.2,5.5-4.2,8.7-1.7,5.5-3.3,11.9-8.1,18.7');

    // Anexar o caminho ao SVG
    svg.append(path);

    // Anexar o SVG ao container do logo
    logoContainer.append(svg);

    // ================== div 2 =================
   
    // criar o container contato
    const topicoContato = document.createElement('div');
    topicoContato.classList = 'topico-contato';

    // criar div midia
    const midia = document.createElement('div');
    midia.classList = 'midia';
   

    // criar h3
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Redes Sociais';

    // criar div svg-social
    const svgSocial = document.createElement('div');
    svgSocial.classList.add('svg-social');

    // criar ul
    const ul = document.createElement('ul');

    // criar li
    const li = document.createElement('li');

    // criar ancora1 -- instagram
    const ancora1 = document.createElement('a');
    ancora1.setAttribute ('href' ,'https://www.instagram.com/ford/');
    ancora1.setAttribute('target', '_blank');

    // criar svg-ancora1
    const svgAncora1 = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgAncora1.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgAncora1.setAttribute('x','0px');
    svgAncora1.setAttribute('y','0px');
    svgAncora1.setAttribute('width','25');
    svgAncora1.setAttribute('viewBox','0 0 30 30');
    svgAncora1.setAttribute('fill', 'white');

    // criar patch ancora1
    const pathAncora1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathAncora1.setAttribute('d', 'M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z');
    
    // Appendes ancora 1
    svgAncora1.append(pathAncora1);
    ancora1.append(svgAncora1);

    // criar ancora2 -- twitter
    const ancora2 = document.createElement('a');
    ancora2.setAttribute ('href' ,'https://twitter.com/Ford');
    ancora2.setAttribute('target', '_blank');

    // criar svg-ancora2
    const svgAncora2 = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgAncora2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgAncora2.setAttribute('x','0px');
    svgAncora2.setAttribute('y','0px');
    svgAncora2.setAttribute('width','25');
    svgAncora2.setAttribute('viewBox','0 0 50 50');
    svgAncora2.setAttribute('fill', 'white');

    // criar patch ancora2
    const pathAncora2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathAncora2.setAttribute('d','M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z');

    
    // appendes ancora 2
    svgAncora2.append(pathAncora2);
    ancora2.append(svgAncora2);

    // criar ancora3 -- facebook
    const ancora3 = document.createElement('a');
    ancora3.setAttribute ('href' ,'https://www.facebook.com/ford/');
    ancora3.setAttribute('target', '_blank');

    // criar svg-ancora3
    const svgAncora3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgAncora3.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgAncora3.setAttribute('x','0px');
    svgAncora3.setAttribute('y','0px');
    svgAncora3.setAttribute('width', '25');
    svgAncora3.setAttribute('viewBox', '0 0 30 30');
    svgAncora3.setAttribute('fill', 'white');

    // criar patch ancora3
    const pathAncora3 = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathAncora3.setAttribute('d', 'M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z');

    // appendes ancora3
    svgAncora3.append(pathAncora3);
    ancora3.append(svgAncora3);

    // criar ancora4 -- linkedin
    const ancora4 = document.createElement('a');
    ancora4.setAttribute ('href' ,'https://www.linkedin.com/company/ford-motor-company/');
    ancora4.setAttribute('target', '_blank');

    // criar svg-ancora4
    const svgAncora4 = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgAncora4.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgAncora4.setAttribute('x','0px');
    svgAncora4.setAttribute('y','0px');
    svgAncora4.setAttribute('width', '25');
    svgAncora4.setAttribute('viewBox', '0 0 30 30');
    svgAncora4.setAttribute('fill', 'white');

    // criar patch ancora4
    const pathAncora4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathAncora4.setAttribute('d', 'M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z');

    // appendes ancora4
    svgAncora4.append(pathAncora4);
    ancora4.append(svgAncora4);

    // appendes da lista
    li.append(ancora1,ancora2,ancora3,ancora4);
    ul.append(li)
    svgSocial.append(ul)

    // criar div developers
    const divDevelopers = document.createElement('div');
    divDevelopers.classList = 'developers';

    // criar h3
    const h3Developers = document.createElement('h3');
    h3Developers.innerHTML = 'Desenvolvedores';

    // criar ul-developers
    const ulDevelopers = document.createElement('ul');

    // criar li-developers
    const liDevelopers = document.createElement('li');

    // criar ancora-developers
    const ancoraDevelopers = document.createElement('a');
    ancoraDevelopers.setAttribute('href', 'https://linktr.ee/eXtremeGoHorsee');
    ancoraDevelopers.setAttribute('target', '_blank');

    // criar svg-developers
    const svgDevelopers = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgDevelopers.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgDevelopers.setAttribute('x','0px');
    svgDevelopers.setAttribute('y','0px');
    svgDevelopers.setAttribute('width','60');
    svgDevelopers.setAttribute('viewBox', '0 0 30 30');
    svgDevelopers.setAttribute('fill', 'white');

    // criar path-developers
    const pathDevelopers = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathDevelopers.setAttribute('d', 'M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z');
   
    // criar p-copyright
    const pCopyright = document.createElement('p');
    pCopyright.classList = 'copyright';
    pCopyright.innerHTML = '© 2024 eXtreme Go Horse. Todos os direitos reservados.';

    // appendes developers
    svgDevelopers.append(pathDevelopers);
    ancoraDevelopers.append(svgDevelopers);
    liDevelopers.append(ancoraDevelopers);
    ulDevelopers.append(liDevelopers);
    divDevelopers.append(h3Developers, ulDevelopers);

    // Append topico-contato
    topicoContato.append(midia,divDevelopers); 

    // Append no container midia
    midia.append(h3,svgSocial)

   
    // Anexar os containers ao footer
    footer.append(logoContainer, topicoContato, pCopyright);

    
    // Inserir o footer no placeholder
    const footerPlaceholder = document.querySelector('#footer');
    footerPlaceholder.append(footer);
}

// chamada da função criaLink assim que a página carregar
document.addEventListener('DOMContentLoaded', criaLink);
