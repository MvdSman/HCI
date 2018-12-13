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
    if($window.scrollTop() < $("#abstract").offsetTop) {
        $("#nav-wrap").find("a").css("font-weight",400);
        topLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollTop() >= $("#abstract").offsetTop && $window.scrollTop() < $("#introduction").offsetTop) {
        $("#nav-wrap").find("a").css("font-weight",400);
        abstractLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollTop() >= $("#introduction").offsetTop && $window.scrollTop() < $("#methods").offsetTop) {
        $("#nav-wrap").find("a").css("font-weight",400);
        introductionLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollTop() >= $("#methods").offset().top && $window.scrollTop() < $("#results").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        methodsLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollTop() >= $("#results").offset().top && $window.scrollTop() < $("#discussion--conclusion").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        resultsLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollTop() >= $("#discussion--conclusion").offset().top && $window.scrollTop() < $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        conclusionLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollTop() >= $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        citationsLink.css({'font-weight': 900, 'font-size': 'large'});
    }
});  
