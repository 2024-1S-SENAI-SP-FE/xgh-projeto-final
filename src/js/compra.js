document.querySelectorAll('.conteudo-cores > div').forEach(div => {
    div.addEventListener('click', function() {
      document.querySelectorAll('.conteudo-cores > div').forEach(d => {
        d.classList.remove('active');
      });
      this.classList.add('active');
    });
  });