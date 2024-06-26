document.addEventListener('DOMContentLoaded', function() {
  const btnTranslate = document.querySelector('#troca-idioma');
  const selectLang = document.querySelector('#google_translate_element');

    function oculta() {
      if (selectLang.style.display === 'none') {
        document.querySelector('#google_translate_element').style.display = 'block';
      } else {
        document.querySelector('#google_translate_element').style.display = 'none';
      }
    }

    btnTranslate.addEventListener('click', oculta);
    oculta(); // Chama a função oculta no carregamento da página, se necessário
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'pt-BR' }, // Idioma padrão do site
    'google_translate_element'
  )
}