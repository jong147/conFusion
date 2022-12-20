$(document).ready(function () {
    //Carousel Controls
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    //Modal Controls
    $('span.navbar-text a').on({
        mouseenter: function () {
            $(this).css('cursor', 'pointer');
        },
        click: function () {
            $('#loginModal').modal('toggle');
        }
    });
    $("a.btn.btn-block").click(function () {
        $('#reserveModal').modal('toggle');
    });
});