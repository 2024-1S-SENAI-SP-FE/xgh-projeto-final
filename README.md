# xgh-projeto-final

## Sobre Nós

Este projeto consiste em uma página web que apresenta informações sobre a empresa Mustang, incluindo sua missão, visão e valores.

### Estrutura do Arquivo HTML

O arquivo HTML principal do projeto está localizado em `index.html` e contém as seguintes seções:

1. **Sobre Nós**: Apresenta uma breve descrição da empresa Mustang.
2. **Missão da Empresa**: Descreve a missão da Mustang em fornecer automóveis e serviços de alta qualidade.
3. **Visão da Empresa**: Apresenta a visão da Mustang em ser líder global em inovação e excelência.
4. **Valores da Empresa**: Enumera os valores fundamentais da Mustang, incluindo inovação, integridade, excelência e responsabilidade social e ambiental.

### Arquivos de Imagem

O projeto inclui imagens relacionadas à empresa Mustang, que estão localizadas na pasta `/src/img/`.

- `foto-senai.jpeg`: Imagem relacionada à seção "Sobre Nós".
- `missao-empresa.jpeg`: Imagem relacionada à seção "Missão da Empresa".
- `visao-empresa.jpeg`: Imagem relacionada à seção "Visão da Empresa".
- `valores-empresa.jpeg`: Imagem relacionada à seção "Valores da Empresa".

### Folha de Estilo CSS

O estilo da página web é definido no arquivo `style.css`, localizado na pasta `/src/style/`.

### Visualização do Projeto

Para visualizar o projeto, abra o arquivo `index.html` em um navegador da web.


### Automatização do Header e do Footer em todas as páginas

Esta parte da  documentação descreve a estrutura do `HTML` e `CSS`, que compõem o cabeçalho `<header>` e o rodapé `<footer>` do site. Além disso, uma função `JavaScript` foi criada para automatizar a inserção desses elementos em todas as páginas do site.

#### Estrutura HTML do Cabeçalho

O cabeçalho inclui uma barra de navegação com os seguintes componentes:

1- Logo e Nome do Site:

- SVG do logotipo do Mustang.
- Imagem do nome do Mustang.

2- Menu de Navegação:

- Um botão de dropdown que exibe diferentes modelos de veículos.
- Links para páginas "Comemoração" e "Sobre nós"

3- Ícones de Funcionalidades:

- Elemento do Google Translate.
- Botão para trocar idioma.
- Link para a página de login.
- Div para indicar o status de login.

#### Estrutura HTML do Rodapé

O rodapé inclui os seguintes componentes:

1- Logotipo:

- SVG do logotipo do Mustang.

2- Redes Sociais:

- Ícones das redes sociais com links para as respectivas páginas.

3- Informações Adicionais:

- Endereço e contato da empresa.

#### Automação com JavaScript

Para automatizar a inserção do cabeçalho e do rodapé em todas as páginas do site, utilizamos uma função JavaScript que adiciona dinamicamente esses componentes ao carregar a página. E desta forma, garante consistência e facilidade de manutenção do layout do site.


### Organização dos arquivos do projeto


Os arquivos deste projeto estão organizados em pastas, assim tendo uma fácil localização para saber aonde cada arquivo está inserido. Além de ser algo semântico, é um tipo de estrutura agradável aos olhos de quem vê.

 **Pastas e seus conteúdos**

1- **Data**

- Nesta pasta está localizado o arquivo do tipo `JSON`, que está sendo utilizado na página de login para sua funcionalidade proposta.

2- **Src**

- Nesta pasta contém os arquivos que são o coração do projeto, onde tudo foi  desenvolvido e criado.

2-3 **Fonts**
- Nesta pasta contém as fontes que estão sendo utilizadas no site todo.

2-4 **Html**
- Nesta pasta contém todas as páginas `HTML` que dão estrutura para o site.

2-5 **Img**
- Nesta pasta contém todas as imagens do projeto, e ela está subdividida em pastas, que estão organizadas de acordo com a sua serventia para cada página.

2-5 **Js**
- Nesta pasta estão todos os arquivos `JS` do projeto que possuem uma grande importância para a dinâmica de funcionalidade.

2-6 **Styles**
- Nesta pasta estão todos os arquivos `CSS` de estilização, e está introduzido o Design, estrutura de alinhamento e os efeitos que são um show a parte para a visualização dos usuários.

2-7 **Video**
- Nesta pasta contém os vídeos que estão sendo exibidos nas páginas.


3- **Arquivos na Raíz do Projeto**

3-1 **Arquivos `.MD`**

- Os arquivos `.md` como por exemplo o `CHECKLIST.MD` e `README.md` são arquivos de documentação do projeto.

3-2 **Index.html**

Colocar o `index.html` na raiz torna mais fácil para desenvolvedores e servidores localizarem o ponto de entrada principal do site.

3-3 **Package `.json`**

- São pacotes de arquivo do tipo `json`.

3-4 **.gitignore**

- Este arquivo foi criado para ocultar outros arquivos para não subirem para o remoto.






