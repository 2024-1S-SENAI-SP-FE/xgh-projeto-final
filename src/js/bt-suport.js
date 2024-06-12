document.querySelector('#btn-suporte').addEventListener('click', ()=>{
    const suporte = document.querySelector('#suporte');
    if (suporte.style.display === 'none' || suporte.style.display === '') {
        suporte.style.display = 'block';
    } else {
        suporte.style.display = 'none';
    }
})
