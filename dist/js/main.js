$(function(){

    //скролл шапки
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 100) {
            $(".header__top").css({ "background": "#000 ", "opacity": .7 })
        }
        if (100 > scrolled) {
            $(".header__top").css({ "background": "transparent" })
        }
    };
    
    //открытие поиска
    $('.search').on('click', function () {
        $('.search-top').toggleClass('search-top-show');
        $('.search').remove();
    });

    //сладйер шапки
    $('.header__slider').slick({
        prevArrow: '<img class="slide__prev" src="img/header/prev__slide.svg">',
        nextArrow: '<img class="slide__next" src="img/header/next__slide.svg">',
        autoplay: true,
        autoplayTimeout: 2000, 
        dots: true,
        dotsClass: "my-dots",
        speed: 500,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },
        ]
    });

    //modal
    $('.modal__close').on('click', function () {
        $('.overlay, #preorder-modal').fadeOut('slow');
    });

    $('.header__preorder').each(function(i){
        $(this).on('click', function(){
            $('.modal__game').text($('.header__text').eq(i).text());
            $('.overlay, #preorder-modal').fadeIn('slow');
        });
    });

    $('#preorder-modal form').validate({
        rules:{
            name: "required",
            email: {
                required: true,
                email: true
            }
            },
            messages: {
                name: "Пожалуйста введите ваше имя",
                email: {
                    required: "Пожалуйста введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        
    });

    //сладйер карточки игр
    $('.slider-platform').slick({
        prevArrow: $('.btm__prev_platform'),
        nextArrow: $('.btm__next_platform'),
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.slide-platform').on('click', function (){
alert(1);
    });

    //фильтры слайдера
    $('.device').on('click', function () {
        var filterClass = $(this).data('value');
        $('.slider-platform').slick('slickUnfilter');
        $('.slider-platform').slick('slickFilter', filterClass);
        $('.device').removeClass('device_active');
        $(this).addClass('device_active');
    });
 
    //слайдер анонса игр
    $('.preview__slider').slick({
        prevArrow: $('.btm__prev_preview'),
        nextArrow: $('.btm__next_preview'),
        slidesToShow: 2,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //показ остльных категорий игр
    $('.categories__show').on('click', function (e) {
        e.preventDefault();
        $('.categories__none').slideToggle('slow').addClass('show');
    });

});