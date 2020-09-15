var debugTimes = false;

/**
 * Global Variables
 */

/**
 * Document Ready
 */
$(document).ready(function () {
    // подключение слайдера для первого экрана
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        navigation: {
            nextEl: '.slider-button.slider-button--next',
            prevEl: '.slider-button.slider-button--prev',
        },
    });

    // установка высоты блока с текстом 
    function setHeight() {
        var heightItemText = $('.slider__item').outerHeight() * 2
        var heightItemAnimationText = $('.slider__item').outerHeight()
        $('.main-wrapper').css("height", heightItemText + 'px')
        $('.main-skills').css("height", heightItemAnimationText + 'px')
    }

    setHeight();

    $(window).on('resize', function(){
        setHeight();
    })

    //вфцфвф
    $('.main').on('mousemove', function(evevt){
        $('.circle-light').css({
            "top": event.pageY + 'px',
            'left':  event.pageX + 'px'
        })
    })

});