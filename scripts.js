document.addEventListener('DOMContentLoaded', function() {
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
