window.addEventListener("scroll", viewControl,false);

function /* Control scroll show view */ viewControl() {
    var scroll = $(window).scrollTop();
    var height = window.innerHeight;
    let moonscroll;
    if(window.innerWidth <= 600) {
        moonscroll = (-window.innerHeight + scroll*1.2);
    } else {
        moonscroll = (-window.innerHeight + scroll);
    }
    if/* pass second screen */(scroll > 2*height) {
        $(".moon")/* moon goes up* */.css({
            transform: "translateY(" + (2*height - scroll) +  "px) translateX(-50%)"
        });
        if /*moon is out of the screen */ ((height - moonscroll) < (-height)) {
            $(".second .wrapper .description").fadeOut();
        }
    }

}