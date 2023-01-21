$(document).ready(function () {
    // Add hover action for dropdowns
    let dropdown_hover = $(".dropdown-hoverr");
    let mehsullar = $(".mehsullar");
    let isler = $(".isler");
    dropdown_hover.on('mouseover', function () {
        let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-togglee');
        menu.addClass('show');
        toggle.addClass('show').attr('aria-expanded', true);
    });
    dropdown_hover.on('mouseout', function () {
        let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-togglee');
        menu.removeClass('show');
        toggle.removeClass('show').attr('aria-expanded', false);
    });
    mehsullar.on("mouseover", function () {
        $(".asagi").addClass("down1")
    })
    mehsullar.on("mouseout", function () {
        $(".asagi").removeClass("down1")
    })
    isler.on("mouseover", function () {
        $(".asagi2").addClass("down2")
    })
    isler.on("mouseout", function () {
        $(".asagi2").removeClass("down2")
    })
    $(".owl-prev span").html('<i class="fas fa-chevron-left"></i>')
    $(".owl-next span").html('<i class="fas fa-chevron-right"></i>')


    ///hamburgermenu
    var menuOpen = false

    var init = () => {
        $(".navbar-toggler, .menu__blackout, .menu__collapse img").on("click", menuToggle)
    }

    var menuToggle = () => {
        $(".menu__blackout").fadeToggle();

        if (menuOpen) { // close menu
            $(".menu__collapse").css({
                left: "100vw",
                right: "-80vw"
            });
            $("html").css("overflow-y","auto")
        } else { // open menu
            $(".menu__collapse").css({
                left: "10vw",
                right: "0"
            });
            $("html").css("overflow-y","clip")
        }
        menuOpen = !menuOpen;
    }

    $(document).ready(init);
    $(".slidemehsul").click(function () {
        $(".dropdown-menu2").toggle(500)
    })
    $(".islerslide").click(function () {
        $(".dropdown-menu3").toggle(500)
    })
});

//scroll
$(window).scroll(function () {
    var sticky = $('.mobile-menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("header").addClass('fixed');
        $("header").addClass('animate__fadeInDownBig');
        $("header").addClass('header_bg_color');
    }
    else {
        $("header").removeClass('fixed');
        $("header").removeClass('animate__fadeInDownBig');
        $("header").removeClass('header_bg_color');
    }
});