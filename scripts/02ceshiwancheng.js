$(document).ready( function() {
    $(".content .text").each(function(){
        height=$(this).height();
        if(height>30) {
            $(this).css("height","76px");
            $(this).after("<p class=\"morecon\" >点开更多内容</p>");
        }
    });
    $(".morecon").click(function(){
        $(this).prev().css("height","auto");
        $(this).css("display","none");
    });
});
