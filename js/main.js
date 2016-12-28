$(document).ready(function() {
    $('.parallax').parallax();
    $('.btt').css(
        'display', 'none'
    );
    $('.scrollspy').scrollSpy();

    $('.node-nav').addClass('bigNav');
    $('.node-nav').addClass('noColorNav');

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });



    // To insert Gravatar
    var $catchGravatar = $('.insert-gravatar');
    var $gravatarCounter = $catchGravatar.length;
    console.log($gravatarCounter + " is the number of gravatar present.");
    var $catchGravatarEmail = '';
    var $catchGravatarUse = '';
    var $gravatarSize = '256px';
    var $gravatarClasses = 'ui image z-depth-4';
    var $gravatarSecure = true;
    var $gravatarImage = 'wavatar';
    var $gravatarRating = 'g';

    for (i = 0; i < $gravatarCounter; i++) {
        $catchGravatarEmail = $catchGravatar[i].dataset.gravataremail;
        $catchGravatarUse = $catchGravatar[i].dataset.gravatarusein;
        console.log('The email address of first gravatar element is: ' + $catchGravatarEmail);
        console.log('You print me: ' + (i + 1) + ' time' + '\n \t My Email is: ' + $catchGravatarEmail + ' and used in: ' + $catchGravatarUse + '\n');

        if ($catchGravatarUse == "post-author") {
            // console.log('AND THIS WAS POST AUTHOR');
            $gravatarSize = '64px';
            $gravatarClasses = 'ui image avatar z-depth-3';
        } else {
            $gravatarSize = '400px';
            $gravatarClasses = 'ui image center z-depth-4';
        }


        $($catchGravatar[i]).append($.gravatar($catchGravatarEmail, {
            size: $gravatarSize,
            rating: $gravatarRating,
            image: $gravatarImage,
            secure: $gravatarSecure,
            classes: $gravatarClasses
        }));
    }

    // A Fail Attempt of Gravatar
    // for (var i = 0; i < $gravatarCounter; i++) {
    //     $catchGravatarEmail = $catchGravatar[i].dataset.gravataremail;
    //     $catchGravatarUse = $catchGravatar[i].dataset.gravatarusein;
    //     $($catchGravatar[i]).append($.gravatar($catchGravatarEmail, {
    //         if ($catchGravatarUse == "post-author") {
    //             size: '64px',
    //             classes: 'ui image avatar z-depth-3',
    //         }
    //         else {
    //             size: '256px',
    //             classes: 'ui image z-depth-4',
    //         }
    //         secure: true,
    //         image: 'wavatar',
    //         rating: 'g'
    //     }));
    // }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            $('.node-nav').css('position', 'fixed').css('z-index', '99').css('top', '0');
            $('.node-nav').removeClass('bigNav');
            $('.node-nav').removeClass('amber');
            $('.node-nav').removeClass('noColorNav');
            $('.node-nav').addClass('indigo');
            $('.btt').slideDown();
            $('#nav-pc i').hide();
            $('.home-active').removeClass('active');
            console.log("We just scrolled dude");
        } else {
            $('.node-nav').css('position', 'relative').css('z-index', '2');
            $('.node-nav').addClass('bigNav');
            $('.node-nav').addClass('noColorNav');
            $('.node-nav').removeClass('indigo');
            $('.home-active').addClass('active');
            $('#nav-pc i').show();
            $('.btt').slideUp();
        }
    });

    var $warnTrig = 0;
    $('.warning-bell').click(function() {
        if ($warnTrig == 0) {
            $('.warning h2').slideUp();
            $('.warning p').slideUp();
            $('.warning-bell').animate({ 'font-size': '3rem' });
            $('.warning').animate({ margin: '0' });
            $warnTrig = 1;
        } else {
            $('.warning h2').slideDown();
            $('.warning p').slideDown();
            $('.warning-bell').animate({ 'font-size': '5rem' });
            $('.warning').animate({ margin: '1.25em' });
            $warnTrig = 0;
        }
    });

    var $toastlove = '';
    var $loveVal = document.getElementById('loveCounter').innerHTML;
    console.log('The value of $loveVal is: ' + $loveVal);
    var $newLoveCounter = 0;
    var $loveCounter = 0;

    $('.loveButton').click(function() {
        if ($loveCounter == 0) {
            $('.loveColor').addClass("indigo");
            $('.loveColor').removeClass("blue");
            $toastlove = 'You &nbsp;&nbsp;<i class="blue-text fa fa-heart"></i>&nbsp;&nbsp; me';
            Materialize.toast($toastlove, 5000, 'rounded');
            $newLoveCounter = parseInt($loveVal) + 1;
            document.getElementById('loveCounter').innerHTML = $newLoveCounter;
            console.log("Love" + " $newLoveCounter = " + $newLoveCounter);
            $loveCounter = 1;
        } else {
            $('.loveColor').addClass("blue");
            $('.loveColor').removeClass("indigo");
            $toastlove = 'You don\'t &nbsp;<i class="red-text fa fa-heart-o"></i>&nbsp;&nbsp; me';
            Materialize.toast($toastlove, 5000);
            // $('.loveCounter').innerHTML = $loveVal;
            $newLoveCounter = parseInt($loveVal);
            document.getElementById('loveCounter').innerHTML = $newLoveCounter;
            console.log("Hate" + " $newLoveCounter = " + $newLoveCounter);
            $loveCounter = 0;
        }
    });

    var $toastlike = '';
    var $likeCounter = 0; //for triggering

    $('.likeButton').click(function() {
        if ($likeCounter == 0) {
            $('.likeButton').css('border', '1px solid #eee');
            var $toastlike = 'You &nbsp;&nbsp;<i class="blue-text fa fa-thumbs-up"></i>&nbsp;&nbsp; me';
            Materialize.toast($toastlike, 5000, 'rounded');
            $likeCounter++;
        } else {
            $('.likeButton').css('border', 'none');
            var $toastlike = 'You &nbsp;&nbsp;<i class="red-text fa fa-thumbs-down"></i>&nbsp;&nbsp; me';
            Materialize.toast($toastlike, 5000);
            $likeCounter--;
        }
    });

    var $toasttweet = '';
    var $tweetCounter = 0; //for triggering

    $('.tweetButton').click(function() {
        if ($tweetCounter == 0) {
            $('.tweetButton').css('border', '1px solid #eee');
            var $toasttweet = 'You &nbsp;&nbsp;<i class="fa fa-twitter blue-text"></i>&nbsp; about me';
            Materialize.toast($toasttweet, 5000, 'rounded');
            $tweetCounter++;
        } else {
            $('.tweetButton').css('border', 'none');
            var $toasttweet = 'You deleted the &nbsp;<i class="fa fa-twitter-square red-text"></i>&nbsp; about me';
            Materialize.toast($toasttweet, 5000);
            $tweetCounter--;
        }
    });

    var $toastgp = '';
    var $gpCounter = 0; //for triggering

    $('.gplusButton').click(function() {
        if ($gpCounter == 0) {
            $('.gplusButton').css('border', '1px solid #eee');
            var $toastgp = 'You shared at &nbsp;<i class="fa fa-google-plus red-text"></i>&nbsp; about me';
            Materialize.toast($toastgp, 5000, 'rounded');
            $gpCounter++;
        } else {
            $('.gplusButton').css('border', 'none');
            var $toastgp = 'You removed the share at &nbsp;<i class="fa fa-google-plus grey-text"></i>&nbsp; about me';
            Materialize.toast($toastgp, 5000);
            $gpCounter--;
        }
    });



});