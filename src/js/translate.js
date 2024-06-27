const btnTranslate = document.querySelector('#troca-idioma');
const selectLang = document.querySelector('#google_translate_element');

btnTranslate.addEventListener('click', function oculta() {
    if (selectLang.style.display === 'none') {
        document.querySelector('#google_translate_element').style.display = 'block';
    } else {
        document.querySelector('#google_translate_element').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', oculta())

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'pt-BR' }, // Idioma padrão do site
        'google_translate_element'
    )
}
