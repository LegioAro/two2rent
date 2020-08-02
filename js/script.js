$(document).ready(function () {
    $('.slider').slick({
        nextArrow: '<button class="slick-next slick-arrow"><img src="image/next.svg" alt="next"></button>',
        prevArrow: '<button class="slick-prev slick-arrow"><img src="image/prev.svg" alt="prev"></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ],
    });
    $('.burger').click(function (event) {
        $('.burger,.header__navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});