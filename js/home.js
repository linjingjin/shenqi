jQuery(function () {
    var bItem = 0,
        winwidth = 0,
        winheight = 0,
        bannerInv = null,
        $bannerpanel = jQuery('.bannerpanel'),
        $banner = jQuery('.banner'),
        $bannerImg = $banner.children(".banneritem").find(".pic"),
        $bannerBtn = jQuery(".banerBtns");
    function initBox() {
        if (!isMobile) {
            jQuery(".bannerfont .fone").delay(600).animate({ top: 70, "opacity": "show" }, 500);
            jQuery(".bannerfont .ftwo").delay(900).animate({ bottom: 70, "opacity": "show" }, 500);
            jQuery(".banerBtns").delay(1100).fadeIn(100);
            for (var i = 0; i <= $bannerBtn.children().length; i++) {
                jQuery(".banerBtns span").eq(i).delay(1100 + ((i + 1) * 150)).animate({ opacity: 1 }, 200);
            }
            jQuery(".iboxbot").delay(1300).animate({ marginTop: -184 }, 500);
        } else {
            jQuery(".bannerfont .fone").delay(600).animate({ top: 70, "opacity": "show" }, 500);
            jQuery(".bannerfont .ftwo").delay(900).animate({ bottom: 70, "opacity": "show" }, 500);
            jQuery(".banerBtns").delay(1100).fadeIn(100);
            for (var i = 0; i <= $bannerBtn.children().length; i++) {
                jQuery(".banerBtns span").eq(i).delay(1100 + ((i + 1) * 150)).animate({ opacity: 1 }, 200);
            }
            jQuery(".iboxbot").delay(1300).animate({ marginTop: -40 }, 500);
        }
        winwidth = jQuery(window).width();
        winheight = jQuery(window).height();
        $bannerpanel.css({ height: winheight });
        $banner.css({ height: winheight });
        setImgMax($bannerImg, 1905, 930, winwidth, winheight);
    };
    function windowPosition() {
        jQuery("html,body").animate({ scrollTop: 0 }, 700, 'easeInOutExpo');
    }
    windowPosition();
    //banner
    bannerSilder();
    function bannerSilder() {
        bannerBtns();
        changeBanner();

        $bannerBtn.find("span").mouseover(function () {
            if (jQuery(this).hasClass("cur")) {
                return;
            }
            bItem = jQuery(this).index();
            changeBanner();
        });

    }
    function changeBanner() {
        $bannerImg.removeClass("imgIn").fadeOut(1500).eq(bItem).stop(true, true).fadeIn(1000).addClass("imgIn");
        $bannerBtn.find("span").removeClass("cur").eq(bItem).addClass("cur");
        autoBanner();
    };
    function autoBanner() {
        clearTimeout(bannerInv);
        bannerInv = setTimeout(function () {
            if (bItem >= $bannerImg.size() - 1) {
                bItem = 0;
            } else {
                bItem++;
            }
            changeBanner();
        }, 4000);
    };
    function bannerBtns() {
        var str = '';
        for (var i = 0; i < $bannerImg.size() ; i++) {
            str += '<span></span>';
        }
        $bannerBtn.html(str);
    }

    jQuery(".newbox li a").hover(function () {
        jQuery(this).children(".png").stop(false, false).fadeIn().next(".txt").stop(false, false).animate({ bottom: "0", "opacity": "show" }, 500);
    }, function () {
        jQuery(this).children(".png").fadeOut().next(".txt").animate({ bottom: "-30", "opacity": "fast" }, 300);
    });

    jQuery('.inewul').mouseenter(function () {
        jQuery(this).find(".bx-prev").stop().animate({ left: "0px" }, 200);
        jQuery(this).find(".bx-next").stop().animate({ right: "0px" }, 200);
        inewboxsider.stopAuto();
    });
    jQuery('.inewul').mouseleave(function () {
        jQuery(this).find(".bx-prev").animate({ left: "-33px" }, 200);
        jQuery(this).find(".bx-next").animate({ right: "-33px" }, 200);
        inewboxsider.startAuto();
    });
    initBox();
    jQuery(window).resize(function () {
        initBox();
    });
})