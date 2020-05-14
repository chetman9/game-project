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

    //попап форма
    $('.preorder').magnificPopup({
        type: 'inline',
        focus: '#name',
        mainClass: 'animated flipInY'
    });

    //сладйер шапки
    $('.header__slider').slick({
        prevArrow: '<img class="slide__prev" src="img/prev__slide.svg">',
        nextArrow: '<img class="slide__next" src="img/next__slide.svg">',
        autoplay: true,
        autoplayTimeout: 2000, 
        dots: true,
        dotsClass: "my-dots",
        speed: 500,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },
        ]
    });

    //сладйер карточки игр
    $('.sliderd__platform').slick({
        prevArrow: $('.platform__prev'),
        nextArrow: $('.platform__next'),
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

    //фильтры слайдера
    $('.device').on('click', function () {
        var filterClass = $(this).data('value');
        $('.sliderd__platform').slick('slickUnfilter');
        $('.sliderd__platform').slick('slickFilter', filterClass);
        $('.device').removeClass('tans');
        $(this).addClass('tans');
    });
 
    //слайдер анонса игр
    $('.pre-order__slider').slick({
        prevArrow: $('.preorder__prev'),
        nextArrow: $('.preorder__next'),
        centerMode: true,
        centerPadding: '330px',
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //показ остльных категорий игр
    $('.categories__show').on('click', function (e) {
        e.preventDefault();
        $('.categories__none').slideToggle(400).addClass('show');
    });

});
