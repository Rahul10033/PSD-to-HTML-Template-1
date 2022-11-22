$(document).ready(function () {

    // slider01
    $("#slider01.owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    //slider02
    $("#slider02.owl-carousel").owlCarousel({
        loop: true,
        dots: false,
        margin: 30,
        nav: true,
        autoplay: true,
        // stagepadding: 40,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    //slider03
    $("#slider03.owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        // nav:true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });


    // responsive header
    (function ($) {
        $(function () {
            $('nav ul li > a:not(:only-child)').click(function (e) {
                $(this)
                    .siblings('.nav-dropdown')
                    .slideToggle()
                $('.nav-dropdown')
                    .not($(this).siblings())
                    .hide()
                e.stopPropagation()
            })
            //   $('html').click(function() {
            //     $('.nav-dropdown').hide()
            //   })
            // Toggle open and close nav styles on click
            $('#nav-toggle').click(function () {
                $('nav ul').slideToggle();
            });
            $('#nav-toggle').on('click', function () {
                this.classList.toggle('active')
            })
        })
    })(jQuery)


    // responsive tab design


    $(".tab_content").hide();
    $(".tab_content:first").show();

    // if in tab mode 
    $("ul.tabs li").click(function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");


    });
    $(".tab_container").css("min-height", function () {
        return $(".tabs").outerHeight() + 50;
    });
    // if in drawer mode 
    $(".tab_drawer_heading").click(function () {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });


    $('.video').parent().click(function () {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

});










