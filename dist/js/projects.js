// TODO: 
// - Switch Rostr up first.
// - Edit content, remove the technology for each.

var pageView = 1; // by default it's BitStat
var defaultProject = "bitstat";
$(".project-git a")[0].setAttribute(
    "href", $(".project-git a")[0].getAttribute("href").replace(":project",defaultProject)
);
$(".project-read")[0].setAttribute("href",$(".project-read")[0].getAttribute("href").replace(":project",defaultProject));

$(".page").click(function () {
    $(".page").removeClass("page-active");
    $(this).addClass("page-active")
    pageView = this.innerHTML;
    $(".page-switcher").hide().fadeIn('fast');    //debug for chrome;
    setUpContent(pageView);
});


function setUpContent(pageView) {
    var projectName = $(".project-name")[0];
    var content = $(".project-content")[0];
    var git = $(".project-git a")[0];
    var live = $(".project-live")[0];
    let prevName = git.getAttribute("href").substring(git.getAttribute("href").lastIndexOf("/") + 1);

    switch (pageView) {
        case "1": 
            projectName.innerHTML = "bitstat";
            content.innerHTML = "BitStat is a site that <u>visualises</u> <u>Bitcoin</u> currency info and does currency exchange <u>real time</u> from Bitcoin (BTC) to selected currencies.";
            live.innerHTML = "<a href='https://bitstat-7d80c.firebaseapp.com/#/' target='_blank'><i class='fas fa-eye'></i> Try Live Demo</a>";
            window.innerWidth > 1150 ? $(".iphoneX").fadeIn() : null ;
            break;

        case "2":
            projectName.innerHTML = "rostr";
            content.innerHTML = "Web based rostering tool for managers with text message support.<br/><br/> Won a <u>second-price in Downer hackathon 2018</u> and now is being test on <a href='https://www.spotless.com/' target='_blank'>Spotless</a>";
            live.innerHTML = "<a href='https://rostrlive.herokuapp.com/' target='_blank' data-toggle='tooltip' data-placement='bottom' title='See login details on Github'><i class='fas fa-eye'></i> Try Live Demo</a>";
            $('[data-toggle="tooltip"]').tooltip();
            $(".iphoneX").hide();
            break;
        case "3":
            projectName.innerHTML = "Twitter-Heatmap";
            content.innerHTML = "Twitter-Heatmap is a small <u>cloud project</u> that visualises heatmap and statistics based on twitter <i>#hashtag</i>."
            live.innerHTML = "<i class='fas fa-eye-slash'></i> No Live Demo";
            $(".iphoneX").hide();
            break;
    }
    git.setAttribute("href", git.getAttribute("href").replace(prevName, projectName.innerHTML));
    $(".project-read")[0].setAttribute("href",$(".project-read")[0].getAttribute("href").replace(
        $(".project-read")[0].getAttribute("href").substring($(".project-read")[0].getAttribute("href").lastIndexOf("/") + 1),
    projectName.innerHTML));
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
  