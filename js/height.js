// @ts-nocheck
$(function()
{
        $('#main-content').css({'height': (($(window).height()) - 361)+'px'});
    debugger
        $(window).bind('resize', function(){
            $('#main-content').css({'height': (($(window).height()) - 361)+'px'});
            console.log("height check");
        });
        console.log("end func height")
});