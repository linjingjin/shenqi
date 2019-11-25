var jj = {};
//初始化
jj.init = function(){
	jj.events();		//事件总体控制
}
//事件总体控制
jj.events = function(){
	jj.nav();
	jj.service();
	jj.gotop();
}

//导航
jj.nav = function(){
	var proSortWidth = 0;
	$('.navbar-toggle').click(function(){
		$('body,html').toggleClass('open');
	});
	$('.product-nav li').each(function(){
		proSortWidth += $(this).width() + 40;
	})
	$('.product-nav').width(proSortWidth-20);
	$(".Pro_Anchor ul li a").click(function() {
	    $("html, body").animate({
	      scrollTop: $($(this).attr("href")).offset().top-30 + "px"
	    }, {
	      duration: 500,
	      easing: "swing"
	    });
	    return false;
	});
}

jj.service = function(){
	/***********开始头部搜索*************/
      $(".search").click(function(e){e.stopPropagation();});
        var Time = new Date()
        $(".search_button").click(function(){
          if(new Date()-Time>10){
            Time = new Date()
            $(".search_bgfff").addClass("active");
            $(".search_text01").stop().animate({width:"120px"},500);
          }
          });
          $(".search").parents().click(function(){
            if(new Date()-Time>10){
            Time = new Date()
            $(".search_bgfff").removeClass("active");
            $(".search_text01").stop().animate({width:"0px"},500);
            };
            });
      /***********结束头部搜索*************/
}

// 返回顶部
jj.gotop = function(){
	$(window).scroll(function(){
			if($(window).scrollTop()>250){
				$(".go-top").show();
			}else{
				$(".go-top").hide();
			}
		});
	$(".go-top").click(function(){
		$("html,body").stop().animate({"scrollTop":0},500);
	})
}

//dom加载完毕执行
$(function(){
	jj.init();
});



