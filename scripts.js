document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');
    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('show-menu');
    });

    document.getElementById('cart-icon').addEventListener('click', function() {
        document.getElementById('cart-modal').style.display = 'block';
    });

    document.querySelectorAll('.close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = 'none';
        });
    });

    document.getElementById('checkout').addEventListener('click', function() {
        window.location.href = 'pagina-siguiente.html';
    });
});
