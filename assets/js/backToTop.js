/**
 * Created by Spy on 2014/4/5.
 */
$(function () {
    //只要窗口滚动,就触发下面代码
    $(window).scroll(function () {
        //获取滚动后的高度
        var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
        if (scrollTop > 700) {
            //判断滚动后高度超过700px,就显示
            $("#backToTop").css('right', '1em');
        } else {
            //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
            $("#backToTop").css('right', '-5em');
        }
    });
    $("#backToTop").click(function () {
        //当点击标签的时候,使用animate在500毫秒的时间内,滚到顶部
        $("body").animate({scrollTop: "0px"}, 500);
    }).hover(function(){
        $(this).css({
            "-webkit-animation-play-state": "paused",
            "-o-animation-play-state": "paused",
            "-moz-animation-play-state": "paused",
            "animation-play-state": "paused"
        })
    } , function(){
        $(this).css({
            "-webkit-animation-play-state": "running",
            "-o-animation-play-state": "running",
            "-moz-animation-play-state": "running",
            "animation-play-state": "running"
        })
    });

    $('.post-date').hover(function(){
        $(this).css({
            "-webkit-animation-play-state": "running",
            "-o-animation-play-state": "running",
            "-moz-animation-play-state": "running",
            "animation-play-state": "running"
        })
    } , function(){
        $(this).css({
            "-webkit-animation-play-state": "paused",
            "-o-animation-play-state": "paused",
            "-moz-animation-play-state": "paused",
            "animation-play-state": "paused"
        })
    });
});