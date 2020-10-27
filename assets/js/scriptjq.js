function check() {
    if ($('.header').hasClass("active")) {
            $('.header').css('background', '#95e1d3');
//            console.log($('.header').hasClass("active"));
        } else if ($(window).scrollTop() < $(window).height()) {
            $('.header').css('background', 'none');
    }
};

$(document).ready(function() {

    $('.header__burger').click(function(event){
        $('.header__burger').toggleClass('active');
        $('.nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('active');
    });

    $('.nav').click(function(event) {
        $('.nav').removeClass('active');
        $('.header__burger').removeClass('active');
        $('.header').removeClass('active');
        $('body').removeClass('lock');
    });

    var menu = $('.header');
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top >= $(window).height() ) {
            menu.css('background', '#95e1d3');
        } else {
            menu.css('background', 'none');
        }
    });
//    console.log(menu.hasClass("active"));

    let timer = setInterval('check();',200);

});
