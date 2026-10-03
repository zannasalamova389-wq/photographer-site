// ============================================
// SCRIPT.JS — МОДАЛЬНОЕ ОКНО ДЛЯ ФОТО
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // Находим все элементы
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.modal-close');

    // Открытие модального окна при клике на фото
    portfolioItems.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    // Закрытие по крестику
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Закрытие по клику на фон
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });

});