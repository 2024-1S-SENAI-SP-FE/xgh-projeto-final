document.addEventListener("DOMContentLoaded", function() {
    const imagemitem = document.querySelector('.carousel-item');
    const buttons = document.querySelector('.btscarcom');

    imageContainer.addEventListener('mouseover', function() {
        buttons.style.display = 'flex';
    });

    imageContainer.addEventListener('mouseout', function() {
        buttons.style.display = 'none';
    });
});
