$(document).ready(function() {

    // GET CURRENT DATE 
    // function setTime() {
    //     var d = new Date();
    //     var hour = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`;
    //     var min = d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`;
    //     var sec = d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`;
    //     $(".menu-top .date").text(`${hour}:${min}:${sec}`);
    // }
    // setTime();
    // setInterval(setTime, 1000);
    // 

    $(window).scroll(function() {
        let endHeightBanner = $(".banner").height();
        if ($(this).scrollTop() > endHeightBanner / 2) {
            $(".onTop").addClass("active");
            $(".navbar").addClass("active");
            $(".sidebar__right").addClass("active");
        } else {
            $(".onTop").removeClass("active");
            $(".navbar").removeClass("active");
            $(".sidebar__right").removeClass("active");
        }
    });
    $('.onTop').click(function(e) {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });
    // btn On top
    $('.btn-show-hide').on('click', () => {
        if ($('.show-hide input').attr("type") == "text") {
            $(".show-hide input").attr("type", "password");
            $(".btn-show-hide i").addClass("fa-eye-slash");
            $(".btn-show-hide i").removeClass("fa-eye");
        } else {
            $(".show-hide input").attr("type", "text");
            $(".btn-show-hide i").addClass("fa-eye");
            $(".btn-show-hide i").removeClass("fa-eye-slash");
        }
    });
    // HIDE SHOW PASSWORD

    $(".wrap-banner_slide").slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
    // BANNER

    $(".wrap-content-slide").slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
    // SLICK NEWS
    $(".wrap-new").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });
    // SLICK OPNION SLIDE
    $(".wrap-opinion").slick({
        dots: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    });

    $(".sidebar__item").click(function() {
        if ($(this).hasClass("active")) {
            $(".sidebar__item").removeClass("active");
        } else {
            $(".sidebar__item").removeClass("active");
            $(this).fadeIn();
            $(this).addClass("active");
        }
    })

});