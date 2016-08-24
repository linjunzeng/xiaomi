$(function(){
    $(".mi-top-cart").hover(function(){
        $(".mi-top-cart-1").slideToggle();
        $(".mi-top-cart a").css({"background":"#fff","color":"#ff6700"});
    },function(){
        $(".mi-top-cart-1").slideToggle(400);
        setTimeout(function(){
            $(".mi-top-cart a").css({"background":"#424242","color":"#b0b0b0"});
        },400)
    })
    $(".mi-hearer-search-text").focus(function(){
        $(".mi-hearer-search-text,.mi-hearer-search-submit").css("border","solid 1px #ff6700");
      }).blur(function(){
        $(".mi-hearer-search-text,.mi-hearer-search-submit").css("border","solid 1px #e0e0e0");
    })
})


$(function(){
    //图片轮播左右滑动
    $("#myCarousel,#myCarouse2,#myCarouse3,#myCarouse4,#myCarouse5").swipe({
        swipeLeft: function() { $(this).carousel('next'); },
        swipeRight: function() { $(this).carousel('prev'); },
    });
    //点击预览图改变大图
    $(".small-img-li").click(function(){
        $(this).addClass("active").siblings('').removeClass("active");
        $(".big-img img").attr("src",$(this).data("src"));
    })
})
//详情页导航滚动监听
$(function(){
    var menu_top;
    setTimeout(function(){
        menu_top =$(".mi-top").outerHeight()+$(".mi-hearer").outerHeight()+$(".mi-breadcrumbs-bg").outerHeight()+$(".mi-goods-details").outerHeight();
        $("#goods-desc-menu").css("top",menu_top);
    },200);
    $(window).scroll(function (){   
        if ($(window).scrollTop() >= menu_top) {  
            $('#goods-desc-menu').addClass('menu-fixed'); 
            $(".goods-desc-menu .goods-desc-left,.goods-desc-menu .join-cart").fadeIn("slow");
        }  
        else {
            $('#goods-desc-menu').removeClass('menu-fixed'); 
            $(".goods-desc-menu .goods-desc-left,.goods-desc-menu .join-cart").fadeOut("solw");
        }         
    });  
})
//列表页导航滚动监听
$(function(){
    $(window).scroll(function (){
        var menu_top =$(".mi-top").outerHeight()+$(".mi-hearer").outerHeight();      
        if ($(window).scrollTop() >= menu_top) { 
            $('.menu-bg').addClass('menu-fixed'); 
            $(".goods-list").addClass('marginHgeight')
        }  
        else {
            $('.menu-bg').removeClass('menu-fixed'); 
            $(".goods-list").removeClass('marginHgeight')
        }  
    });  
})

//筛选侧边栏
$(function(){
    $("#filter").click(function(){
        filterShow();
    })
    $(".item-catecory-bg,.item-catecory .btn").click(function(){
        filterHide();
    })
    function filterShow()
    {
        $(".item-catecory-bg,.item-catecory").show();
        setTimeout(function(){
        $(".item-catecory-bg").css("opacity","1");
        $(".item-catecory").css("transform","translate3d(0%,0,0)");
         },30);
    }
    function filterHide()
    {
         $(".item-catecory-bg").css("opacity","0");
        $(".item-catecory").css("transform","translate3d(100%,0,0)");
        setTimeout(function(){
            $(".item-catecory-bg,.item-catecory").hide();
        },400);
    }
})

//登录弹层
$(function(){
    $("#login").click(function(){
        $(".mi-login-bg").show();
    })
    $(".close-btn").click(function(){
        $(".mi-login-bg").hide();
    })
})


//选项卡切换
$(function(){
    $(".article-select-hear li").click(function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".news_list").eq(index).addClass("active").siblings().removeClass("active");
    });
});

/**
 * 收藏，点赞，不感兴趣js
 * 使用方法，点赞|xh-collection，收藏|xh-good,不感兴趣|xh-unlike
 * 
 * @returns false
 */
$(function(){
    $('.xh-collection').click(function(){
        var url  = $(this).attr('href');
        var span = $(this).find('span');
        var num = parseInt(span.text());
        if (!url) {
            return false;
        } 
        $.get(url,function(data){
            if (data.status == 1) {
                span.text(num+1);
            }
            alert(data.info);
        });
        return false;
    });
    $('.xh-good').click(function(){
        var url  = $(this).attr('href');
        var span = $(this).find('span');
        var num = parseInt(span.text());
        if (!url) {
            return false;
        } 
        $.get(url,function(data){
            if (data.status == 1) {
                span.text(num+1);
            }
            alert(data.info);
        });
        return false;
    });
    $('.xh-unlike').click(function(){
        var url  = $(this).attr('href');
        var span = $(this).find('span');
        var num = parseInt(span.text());
        if (!url) {
            return false;
        } 
        $.get(url,function(data){
            if (data.status == 1) {
                span.text(num+1);
            }
            alert(data.info);
        });
        return false;
    });
});



$(function(){
    //点击按钮出现回复框
    $(".reply_btn").click(function(){
        var $replay=$(this).parents(".mi-comment-list").find(".reply");
        var $submit=$(this).parents(".mi-comment-list").find(".submit");
        $replay.slideToggle().trigger("focus");
        $submit.slideToggle();
        
    })
    //点击下拉
    $(".down").click(function(){
        $(".down-div").slideToggle();
    })
})

