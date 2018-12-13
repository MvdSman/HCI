// https://codepen.io/aadhivive/pen/yNZXxj
// https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom

$(function() {
    smoothScroll(500);
});
  
// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: (target.offset().top)
            }, duration);
        }
    });
}

var $window = $(document.getElementById("articleSection"));
var topLink = $("a[href='#top']"),
    abstractLink = $("a[href='#abstract']"),
    introductionLink = $("a[href='#introduction']"),
    methodsLink = $("a[href='#methods']"),
    resultsLink = $("a[href='#results']"),
    conclusionLink = $("a[href='#discussion--conclusion']"),
    citationsLink = $("a[href='#citations']");

$window.on("scroll",function(e){
    topLink.css({'font-weight': 900, 'font-size': 'large'});
    if($window.scrollHeight < $("#abstract").scrollHeight) {
        $("#nav-wrap").find("a").css("font-weight",400);
        topLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at top");
    } else if ($window.scrollHeight >= $("#abstract").scrollHeight && $window.scrollHeight < $("#introduction").scrollHeight) {
        $("#nav-wrap").find("a").css("font-weight",400);
        abstractLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at abstract");
    } else if ($window.scrollHeight >= $("#introduction").scrollHeight && $window.scrollHeight < $("#methods").scrollHeight) {
        $("#nav-wrap").find("a").css("font-weight",400);
        introductionLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at introduction");
    } else if ($window.scrollHeight >= $("#methods").offset().top && $window.scrollHeight < $("#results").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        methodsLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at methods");
    } else if ($window.scrollHeight >= $("#results").offset().top && $window.scrollHeight < $("#discussion--conclusion").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        resultsLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at results");
    } else if ($window.scrollHeight >= $("#discussion--conclusion").offset().top && $window.scrollHeight < $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        conclusionLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at conclusion");
    } else if ($window.scrollHeight >= $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        citationsLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at citations");
    }
});  
