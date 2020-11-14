$(function() {
    $(window).on('lord scroll', function(){
        if ($(window).scrollTop() > 300) {
            $('#header2').fadeIn(600);
        } else if($(window).scrollTop() < 300){
            $('#header2').fadeOut(600);
        }
    });

    $(window).on('lord scroll', function(){
        if ($(window).scrollTop() > 300) {
            $('.footer-button').fadeIn(600);
        } else {
            $('.footer-button').fadeOut(600);
        }
    });
    


});