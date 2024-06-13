document.querySelector('#btn-suporte').addEventListener('click', ()=>{
    const suporte = document.querySelector('#suporte');
    if (suporte.style.display === 'none' || suporte.style.display === '') {
        suporte.style.display = 'block';
    } else {
        suporte.style.display = 'none';
    }
})


document.querySelector('#bt-close').addEventListener('click', ()=>{
    const suporte = document.querySelector('#suporte');
    suporte.style.display = 'none';
    
})