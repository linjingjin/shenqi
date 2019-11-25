var isMobile=false,
	operbox=false,
	scrollNav=true,
	wwidth=0,wheight=0,
	navItem=0,
	shopItem=0,
	oaItem=0,
	langItem=0,
	$navBtn=jQuery('.navbtn'),
	$navBox=jQuery(".navbox"),
	$shopBtn=jQuery('.shopbtn'),
	$shopList=jQuery(".shoplist"),
	$oaBtn=jQuery('.oabtn'),
	$oaList=jQuery(".oalist"),
	$langBtn=jQuery('.langbtn'),
	$langList=jQuery(".langlist"),
	$backTop=jQuery(".backtop"),
	$navMobile=jQuery("#navMobile"),
	$hjnavA=$navMobile.find("a"),
	$hjsubnav=$navMobile.find(".subnav"),
	$more=jQuery(".more");
jQuery(function(){
	function isPage(){
		wwidth=jQuery(window).width();
		wheight=jQuery(window).height();
//		if (wwidth <= 1024 ) {
//        	isMobile = true;
//        } else if (wwidth > 1024 ) {
//           isMobile = false;
//        } 
        if(!isMobile){
	        $navBtn.bind("mouseenter",function(){
	        	$navBtn.children(".sp2").stop(false,false).animate({height: 0}, 300);
	        });
	        $navBtn.bind("mouseleave",function(){
	        	$navBtn.children(".sp2").stop(false,false).animate({height: 62}, 300);
	        	$navBtn.stop(false,false).removeClass("navbtnHov");
	        });
	        $shopBtn.bind("mouseenter",function(){
	        	$shopBtn.children(".sp2").stop(false,false).animate({height: 0}, 300);
	        });
	        $shopBtn.bind("mouseleave",function(){
	        	$shopBtn.children(".sp2").stop(false,false).animate({height: 62}, 300);
	        });
	        $oaBtn.bind("mouseenter",function(){
	        	$oaBtn.children(".sp2").stop(false,false).animate({height: 0}, 300);
	        });
	        $oaBtn.bind("mouseleave",function(){
	        	$oaBtn.children(".sp2").stop(false,false).animate({height: 62}, 300);
	        });
	        $langBtn.bind("mouseenter",function(){
	        	$langBtn.children(".sp2").stop(false,false).animate({height: 0}, 300);
	        });
	        $langBtn.bind("mouseleave",function(){
	        	$langBtn.children(".sp2").stop(false,false).animate({height: 62}, 300);
	        });
        }else{
			$more.unbind("mouseenter mouseleave");
			var myElement = document.querySelector("#top");
			var headroom  = new Headroom(myElement);
			headroom.init(); 
        }
	};
	jQuery(window).resize(function(){
		isPage();
	})
	var kscrollTop=0;
	jQuery(window).scroll(function () {
		var windowTop=jQuery(window).scrollTop();
		var nmH=jQuery("#navMobile").height();
		if(navItem==1&&windowTop>nmH){
			scrollNav=false;
		}else{
			scrollNav=true;
		}
		if(!isMobile && windowTop>=62){
			if (windowTop<=kscrollTop){
				jQuery(".top").stop(false,false).animate({top:0,opacity:1},400);
		       	kscrollTop=windowTop;
		    }else{
		       	jQuery(".top").stop(false,false).animate({top:-62,opacity:0},400);
		       	kscrollTop=windowTop;
		    }
		}
		aniView();
    });
	function InitPBanner(){
		var sethElement, hasPBanner, pbannerImg, pBannerH, pageCur, bannerTopText, bannerBottomText, defaultTop0, defaultTop1;
		sethElement=jQuery(".pbanner-txt");
		pbannerImg = jQuery(".pbanner");
		hasPBanner = sethElement.length ? true : false;
		if(!hasPBanner){
			return;
		}
		bannerTopText = sethElement.children("p").eq(0);
	    bannerBottomText = sethElement.children("p").eq(1);
	    pageCur=sethElement.prev("p");
	    defaultTop0 = bannerTopText.css("margin-top");
	    defaultTop1 = bannerBottomText.css("margin-top");
		pageCur.css({
	    	opacity: 0,
	        marginTop: 20
	    }).delay(300).animate({
	        opacity: 1,
	        marginTop: 0
	    }, 800, 'easeInOutExpo');
	    bannerTopText.css({
	    	opacity: 0,
	        marginTop: 40
	    }).delay(600).animate({
	        opacity: 1,
	        marginTop: 20
	    }, 1000, 'easeInOutExpo');
	    if (bannerBottomText) {
	        bannerBottomText.css({
	        	opacity: 0,
	        	marginTop: 40
	        }).delay(900).animate({
	        	opacity: 1,
	            marginTop: 20
	        },  1000, 'easeInOutExpo')
	    }
	}
    function domInit(){
		isPage();
		InitPBanner();
		//navbtn Click
		$navBtn.bind('click', function (e) {
	        if (navItem == 0 && scrollNav) {
	        	$navBtn.addClass("navBtnAct");
	            $navBox.stop(false,false).slideDown(500);
	            $shopList.slideUp(200);
	            $oaList.slideUp(200);
	            $langList.slideUp(200);
	            navItem = 1;
	            shopItem =0;
	            oaItem = 0;
	            langItem=0;
	        	$shopBtn.removeClass("shopBtnAct");
	        	$oaBtn.removeClass("oaBtnAct");
	        	$langBtn.removeClass("langBtnAct");
	        	jQuery('html, body').stop().animate({scrollTop: 0}, 700,'easeInOutExpo');
	        }else if (navItem == 1 && !scrollNav){
	        	jQuery('html, body').stop().animate({scrollTop: 0}, 700,'easeInOutExpo');
	        	scrollNav=true;
	        } else {
	        	$navBtn.removeClass("navBtnAct");
	            $navBox.slideUp(200);
	            navItem = 0;
	        	if(isMobile){
	        		$hjnavA.removeClass("cur");
					$hjsubnav.hide();
	        	}
	        };
	    });
	    //navMobile click 
		jQuery("#navMobile>dd>p>a").bind("click",function(e){
			var hjcur = $(this);
			var hjDD = $(this).parents("p").parents("dd");
			if(hjDD.find(".subnav").size()>0){
				if(hjcur.hasClass("cur")){
					hjDD.find(".subnav").stop(false,false).slideUp();
					hjcur.removeClass("cur");
				}else{
					$hjnavA.removeClass("cur");
					$hjsubnav.stop(false,false).slideUp();
					hjDD.find(".subnav").stop(false,false).slideDown();
					hjcur.addClass("cur");
					e.preventDefault();
				}
			}
		});
	    $shopBtn.bind('click', function (e) {
	        if (shopItem == 0) {
	        	$shopBtn.addClass("shopBtnAct");
	            $shopList.stop(true,true).slideDown(300);
	            $navBox.slideUp(200);
	            shopItem = 1;
	            navItem =0;
	        	$navBtn.removeClass("navBtnAct");
	        } else {
	        	$shopBtn.removeClass("shopBtnAct");
	            $shopList.slideUp(200);
	            shopItem = 0;
	            navItem =0;
	        	$navBtn.removeClass("navBtnAct");
	        };
	    });
	    
	    $oaBtn.bind('click', function (e) {
	        if (oaItem == 0) {
	        	$oaBtn.addClass("oaBtnAct");
	            $oaList.stop(true,true).slideDown(300);
	            $navBox.slideUp(200);
	            navItem =0;
	            oaItem = 1
	        	$navBtn.removeClass("navBtnAct");
	        } else {
	        	$oaBtn.removeClass("oaBtnAct");
	            $oaList.slideUp(200);
	            oaItem = 0;
	            navItem =0;
	        	$navBtn.removeClass("navBtnAct");
	        };
	    });
	    
	    $langBtn.bind('click', function (e) {
	        if (langItem == 0) {
	        	$langBtn.addClass("langBtnAct");
	            $langList.stop(true,true).slideDown(300);
	            $navBox.slideUp(200);
	            navItem =0;
	            langItem = 1
	        	$navBtn.removeClass("navBtnAct");
	        } else {
	        	$langBtn.removeClass("langBtnAct");
	            $langList.slideUp(200);
	            langItem = 0;
	            navItem =0;
	        	$navBtn.removeClass("navBtnAct");
	        };
	    });
		$backTop.bind("click", function() {jQuery('html, body').stop().animate({scrollTop: 0}, 800,'easeInOutExpo');if(!isMobile){jQuery(".top").stop(false,false).animate({top:0,opacity:1},400);}});	
		$backTop.bind("mouseenter",function(){
			jQuery(this).find("i").stop(true,true).animate({top:-23}, 400);
		})
		$backTop.bind("mouseleave",function(){
			jQuery(this).find("i").animate({top:0}, 400);
		})
		if(!isMobile){
			jQuery('.branchbox').mouseenter(function(){
				jQuery(this).addClass("branchboxAct");
				jQuery(this).children("ul").slideDown(200);
			});
			jQuery('.branchbox').mouseleave(function(){
				jQuery(this).removeClass("branchboxAct");
				jQuery(this).children("ul").stop(true,true).slideUp(200);
			});
		}else{
			jQuery('.branchbox').click(function(){
				if(jQuery(this).hasClass("branchboxAct")){
					jQuery(this).removeClass("branchboxAct");
					jQuery(this).children("ul").stop(true,true).slideUp(200);
				}else{
					jQuery(this).addClass("branchboxAct");
					jQuery(this).children("ul").slideDown(200);
				}
			});
		}
		if(jQuery(".wA").length>=1){
			jQuery(".wA").hover(function(){
				jQuery(this).stop(true,true).children(".wbox").show().animate({bottom:30,opacity:1},350).animate({bottom:22},200);;
			},function(){
				jQuery(this).children(".wbox").hide().animate({bottom:30},200).animate({bottom:20,opacity:0},200);
			})
		};
        if($more.length>=1){
        	$more.bind("mouseenter",function(){
	        	jQuery(this).children(".sp2").stop(false,false).animate({height: 0}, 300);
	        });
	        $more.bind("mouseleave",function(){
	        	jQuery(this).children(".sp2").stop(false,false).animate({height: "100%"}, 300);
	        });
        }
    }
    domInit();
	function aniView(){
		var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        if (isMobile) {
        	 $(".ani-view").css({top:"auto",opacity:1});
        	 $(".foot-view").css({opacity:1});
       	}else{
        	$(".ani-view").each(function() {
                var pageQ1 = $(this).offset().top + $(this).height() / 5;
                var pageQ3 = $(this).offset().top + $(this).height() / 1;
                if ((pageQ1 <= windowBottom) && (pageQ3 >= windowTop)) {
                	$(this).stop(false,false).animate({top:-40,opacity:1},800);
                } else {
                	$(this).stop(false,false).css({top:0,opacity:0})
                }
        	})
        	$(".foot-view").each(function() {
                var pageQ1 = $(this).offset().top + $(this).height() / 5;
                var pageQ3 = $(this).offset().top + $(this).height() / 1;
                if ((pageQ1 <= windowBottom) && (pageQ3 >= windowTop)) {
                	$(this).stop(false,false).animate({opacity:1},1200);
                } else {
                	$(this).stop(false,false).css({opacity:0});
                }
        	})
        }
    }
	setTimeout(function(){var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        if (isMobile) {
        	 $(".ani-view").css({top:"auto",opacity:1});
        	 $(".foot-view").css({opacity:1});
       	}else{
        	$(".ani-view").each(function() {
                var pageQ1 = $(this).offset().top + $(this).height() / 16;
                var pageQ3 = $(this).offset().top + $(this).height() / 1;
                if ((pageQ1 <= windowBottom) && (pageQ3 >= windowTop)) {
                	$(this).stop(false,false).animate({top:-40,opacity:1},800);
                } else {
                	$(this).stop(false,false).css({top:0,opacity:0})
                }
        	})
        	$(".foot-view").each(function() {
                var pageQ1 = $(this).offset().top + $(this).height() / 16;
                var pageQ3 = $(this).offset().top + $(this).height() / 1;
                if ((pageQ1 <= windowBottom) && (pageQ3 >= windowTop)) {
                	$(this).stop(false,false).animate({opacity:1},1200);
                } else {
                	$(this).stop(false,false).css({opacity:0});
                }
        	})
        }},500);
        
});


var peopleTopJs = {};
peopleTopJs.scrollShow = function() {
	var that = {};
	var $win = $(window);
	var $elm = $(".subordPbanner");
	var $elmImg=$elm.find(".pb_centered");
	
	
	that.init = function() {
		that.show_Scroll();
		$win.resize(function(){
			that.show_Scroll();
		});
	};
	
	that.show_Scroll = function() {
		$elm.css({height:wheight});	
		setImgMax($elmImg,1905,884,wwidth,wheight);
	};
	that.init();
	return that;
};