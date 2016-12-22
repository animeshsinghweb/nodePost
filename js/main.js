$(document).ready(function() {
    $('.parallax').parallax();
    $('.btt').css(
        'display', 'none'
    );

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            $('.node-nav').css('position', 'fixed').css('z-index', '99');
            $('.btt').slideDown();
        } else {
            $('.node-nav').css('position', 'relative').css('z-index', '2');
            $('.btt').slideUp();
        }
    });

    var $warnTrig = 0;
    $('.warning-bell').click(function() {
        if ($warnTrig == 0) {
            $('.warning h2').slideUp();
            $('.warning p').slideUp();
            $('.warning').animate({ margin: '0' });
            $warnTrig = 1;
        } else {
            $('.warning h2').slideDown();
            $('.warning p').slideDown();
            $warnTrig = 0;
            $('.warning').animate({ margin: '6em' });
        }
    });

    var $toastlove = 'You &nbsp;&nbsp;<i class="fa fa-heart"></i>&nbsp;&nbsp; me';
    var $toastlike = 'You &nbsp;&nbsp;<i class="fa fa-thumbs-up"></i>&nbsp;&nbsp; me';

    $('.loveButton').click(function() {
        Materialize.toast($toastlove, 5000, 'rounded');
    });
    $('.likeButton').click(function() {
        Materialize.toast($toastlike, 5000);
    });

});