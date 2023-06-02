$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 900 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });
    $('.mainSlider .inner').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.eventSlide').slick({
        arrows: false,
        slidesToShow: 3,
    });
    $('.Eventbox .arrows .left').on('click', function () {
        $('.eventSlide').slick('slickPrev');
    });
    $('.Eventbox .arrows .right').on('click', function () {
        $('.eventSlide').slick('slickNext');
    });
    $('#ytVideo').YTPlayer({
        videoURL: 'LG8TKw9BbQw',
        containment: 'self',
        autoPlay: false,
        showControls: false,
        playOnlyIfVisible: true,
    });
    $('.ctr .pause').on('click', function () {
        $('#ytVideo').YTPPause();
    })
    $('.ctr .play').on('click', function () {
        $('#ytVideo').YTPPlay();
    })
})