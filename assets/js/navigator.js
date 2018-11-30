// https://codepen.io/aadhivive/pen/yNZXxj

$(function() {
    smoothScroll(1000);
});
  
// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

var $window = $(window);
var topLink = $("a[href='#top']"),
    abstractLink = $("a[href='#abstract']"),
    introductionLink = $("a[href='#introduction']"),
    methodsLink = $("a[href='#methods']"),
    resultsLink = $("a[href='#results']"),
    conclusionLink = $("a[href='#conclusion']"),
    citationsLink = $("a[href='#citations']");

$window.on("scroll",function(e){
    if($window.scrollTop() < $("#abstract").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        topLink.css("font-weight",900);
    } else if ($window.scrollTop() >= $("#abstract").offset().top && $window.scrollTop() < $("#introduction").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        abstractLink.css("font-weight",900);
    } else if ($window.scrollTop() >= $("#introduction").offset().top && $window.scrollTop() < $("#methods").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        introductionLink.css("font-weight",900);
    } else if ($window.scrollTop() >= $("#methods").offset().top && $window.scrollTop() < $("#results").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        methodsLink.css("font-weight",900);
    } else if ($window.scrollTop() >= $("#results").offset().top && $window.scrollTop() < $("#conclusion").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        resultsLink.css("font-weight",900);
    } else if ($window.scrollTop() >= $("#conclusion").offset().top && $window.scrollTop() < $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        conclusionLink.css("font-weight",900);
    } else if ($window.scrollTop() >= $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        citationsLink.css("font-weight",900);
    }
});  
