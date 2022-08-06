import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((event) => {
            event.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    const close = document.querySelectorAll('[data-close]');
    close.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        });
    });

    $('.modal').click(event => {
        if (event.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        }
    });
};

$('[data-toggle="modal"]').modal();