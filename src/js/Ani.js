document.addEventListener('DOMContentLoaded', function() {
    const carItems = document.querySelectorAll('.car-item');

    carItems.forEach(carItem => {
        carItem.addEventListener('mouseover', function() {
            // Remove active and blur classes from all car items
            carItems.forEach(item => {
                item.classList.remove('active');
                item.classList.add('blur');
            });

            // Add active class to the selected car item
            carItem.classList.add('active');
            carItem.classList.remove('blur');
        });

        carItem.addEventListener('mouseout', function() {
            // Remove active and blur classes from all car items
            carItems.forEach(item => {
                item.classList.remove('active');
                item.classList.remove('blur');
            });
        });
    });

    // Show the dropdown menu on button click
    document.querySelector('.dropbtn').addEventListener('click', function() {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });
});
