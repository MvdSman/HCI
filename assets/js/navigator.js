// document.body.scrollTop alone should do the job but that actually works only in case of Chrome.
// With IE and Firefox it also works sometimes (seemingly with very simple pages where you have
// only a <pre> or something like that) but I don't know when. This hack seems to work always.
var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

// Grodriguez's fix for scrollHeight:
// accounting for cases where html/body are set to height:100%
var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;



// https://codepen.io/aadhivive/pen/yNZXxj

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
    if($window.scrollHeight() < $("#abstract").offsetTop) {
        $("#nav-wrap").find("a").css("font-weight",400);
        topLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollHeight() >= $("#abstract").offsetTop && $window.scrollHeight() < $("#introduction").offsetTop) {
        $("#nav-wrap").find("a").css("font-weight",400);
        abstractLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollHeight() >= $("#introduction").offsetTop && $window.scrollHeight() < $("#methods").offsetTop) {
        $("#nav-wrap").find("a").css("font-weight",400);
        introductionLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollHeight() >= $("#methods").offset().top && $window.scrollHeight() < $("#results").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        methodsLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollHeight() >= $("#results").offset().top && $window.scrollHeight() < $("#discussion--conclusion").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        resultsLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollHeight() >= $("#discussion--conclusion").offset().top && $window.scrollHeight() < $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        conclusionLink.css({'font-weight': 900, 'font-size': 'large'});
    } else if ($window.scrollHeight() >= $("#citations").offset().top) {
        $("#nav-wrap").find("a").css("font-weight",400);
        citationsLink.css({'font-weight': 900, 'font-size': 'large'});
    }
});  
