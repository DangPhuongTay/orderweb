$(document).ready(function() {
    // $('.section-one').waypoint(
    //     function(direction) {
    //         if (direction == "down") {
    //             $('.scroll-tap').show();
    //             console.log('down')
    //         } else {
    //             // $('.scroll-tap').hide();
    //             // console.log('up')
    //         }
    //     }, {
    //         offset: '500px'
    //     }
    // )
    $("a").click(function(event) {
        $("html,body").animate({
                scrollTop: $($.attr(this, "href")).offset().top,
            },
            500
        );
        event.preventDefault();
    });

    $(window).bind("mousewheel", function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            if (window.scrollY < 300) {
                $(".scroll-tap").hide();
            }
        } else {
            if (window.scrollY > 300) {
                $(".scroll-tap").show();
            }
        }
    });

    $(".scroll-tap").click(function(event) {
        $("html,body").animate({
                scrollTop: 0,
            },
            500
        );
        event.preventDefault();
    });

    $(document).ready(function() {
        $(".slider").bxSlider();
    });

    $(".Starters1").click(function(event) {
        if (".Starters1"); {
            $(".Main-Dishes").hide();
            $(".Starters").show();
        }
    });
    $(".Main-Dishes1").click(function(event) {
        $(".Main-Dishes1"); {
            $(".Main-Dishes").show();
            $(".Starters").hide();
        }
    });
});