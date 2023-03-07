$(function () {
    //Navigation Sidebar
    let navWidth = $('nav').innerWidth();

    $('.exit').click(function () {
        $('nav').animate({ left: -navWidth }, 500);
        $('.menu').animate({ left: '10px' }, 500);
    })

    $('.menu').click(function () {
        if ($('nav').css('left') == '0px') {
            $('nav').animate({ left: -navWidth }, 500);
            $('.menu').animate({ left: '10px' }, 500);
        }
        else {
            $('nav').animate({ left: '0px' }, 500);
            $('.menu').animate({ left: navWidth + 10 }, 500);
        }
    })

    //Scrolling to sections
    $("a[href^='#']").click(function (eventInfo) {
        $("html, body").animate({ scrollTop: $($(eventInfo.target).attr('href')).offset().top }, 1000);
    })

    //Collapsing
    $('.title').click(function (eventInfo) {
        $(eventInfo.target).parent().siblings().slideToggle(500);
        $(eventInfo.target).parent().parent().siblings().children('.content').slideUp();
    })

    //Countdown
    setInterval(() => {
        let eventDate = new Date('Apr 3, 2023');
        let nowDate = new Date();
        const time = eventDate - nowDate;
        $('.days').html(numberForm(Math.floor(time / (1000 * 60 * 60 * 24))) + ' d');
        $('.hours').html(numberForm(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) + ' h');
        $('.minutes').html(numberForm(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))) + ' m');
        $('.seconds').html(numberForm(Math.floor((time % (1000 * 60)) / (1000))) + ' s');
    }, 1000);

    function numberForm(number) {
        if (number < 10) {
            return '0' + number;
        }
        else {
            return number;
        }
    }

    //Textarea Number of Characters
    $('.message').on('input', function () {
        if (($('.message').val().length) < 100) {
            $('.count').html(100 - $('.message').val().length);
        }
        else {
            $('.count').html('Your Available Character Finished ');
        }
    })
});

