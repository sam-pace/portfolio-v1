$(function(){
    // Smooth scrolling for anchored links
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
    // Scroll down automatically on page load
    $('html, body').animate({
        scrollTop: $('.destination').offset().top
    }, 2000);
    $('a[href="#"]').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});
