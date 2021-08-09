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
        cssEase: 'linear'
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

    // Particles LIST
    particlesJS("particles-list", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    })

});