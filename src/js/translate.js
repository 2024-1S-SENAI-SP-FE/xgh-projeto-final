function googleTranslateElementInit () {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'pt-BR', // Idioma padrão do site
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  )
}
