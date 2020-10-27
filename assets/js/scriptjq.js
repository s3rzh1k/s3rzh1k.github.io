function check() {
    if ($('.header').hasClass("active")) {
            $('.header').css('background', '#95e1d3');
//            console.log($('.header').hasClass("active"));
        } else if ($(window).scrollTop() < $(window).height()) {
            $('.header').css('background', 'none');
    }
};

$(document).ready(function() {
    "use strict";
//    Burger

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

//    Header

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

//    Accordion

    $('.accordion__header').click(function(event) {
        var cur = $('.accordion__item.active');
        cur.toggleClass('active');
        $(this).parent().toggleClass('active');
    });

//    Slider

    $('.reviews__btn--next').click(function(event) {
        let act = $('.reviews__item.active');
        let act_ind = act.index();
        let next_ind = act_ind + 1;
        let next = $('.reviews__item').eq(next_ind - 2);
        act.removeClass('active');
        act.css("display", "none");


        if(next_ind == ($('.reviews__item:last-child').index() + 1)) {
            $('.reviews__item').eq($('.reviews__item:first').index()-2).fadeIn(1000);
            $('.reviews__item').eq($('.reviews__item:first').index()-2).addClass('active');
        } else {
            next.fadeIn(1000);
            next.addClass('active');
        };

        return false;
    });

    $('.reviews__btn--prev').click(function() {
        let act = $('.reviews__item.active');
        let act_ind = act.index();
        let next_ind = act_ind - 1;
        let next = $('.reviews__item').eq(next_ind - 2);
        act.removeClass('active');
        act.css("display", "none");

        if(next_ind == ($('.reviews__item:first').index() - 1)) {
            $('.reviews__item').eq($('.reviews__item:last-child').index()-2).fadeIn(1000);
            $('.reviews__item').eq($('.reviews__item:last-child').index()-2).addClass('active');
        } else {
            next.fadeIn(1000);
            next.addClass('active');
        };

        return false;
    });

//    Slider 2

    $('.reviews__btn--next2').click(function() {
        let act = $('.reviews__item--bigpadding.active');
        let act_ind = act.index();
        let next_ind = act_ind + 1;
        let next = $('.reviews__item--bigpadding').eq(next_ind - 2);
        act.removeClass('active');
        act.css("display", "none");


        if(next_ind == ($('.reviews__item--bigpadding:last-child').index() + 1)) {
            $('.reviews__item--bigpadding').eq($('.reviews__item--bigpadding:first').index()-2).fadeIn(1000);
            $('.reviews__item--bigpadding').eq($('.reviews__item--bigpadding:first').index()-2).addClass('active');
        } else {
            next.fadeIn(1000);
            next.addClass('active');
        };

        return false;
    });

    $('.reviews__btn--prev2').click(function() {
        let act = $('.reviews__item--bigpadding.active');
        let act_ind = act.index();
        let next_ind = act_ind - 1;
        let next = $('.reviews__item--bigpadding').eq(next_ind - 2);
        act.removeClass('active');
        act.css("display", "none");

        if(next_ind == ($('.reviews__item--bigpadding:first').index() - 1)) {
            $('.reviews__item--bigpadding').eq($('.reviews__item--bigpadding:last-child').index()-2).fadeIn(1000);
            $('.reviews__item--bigpadding').eq($('.reviews__item--bigpadding:last-child').index()-2).addClass('active');
        } else {
            next.fadeIn(1000);
            next.addClass('active');
        };

        return false;
    });

});
