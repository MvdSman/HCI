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
            console.log("smooth scroll called");
            event.preventDefault();
            $('html, body').animate({
                scrollTop: (target.offset().top)
            }, duration);
        }
    });
}

var $window = $(document.getElementById("articleSection"));

$(window).on('scroll', function() {
//function navScroll (div) {
    $topOffset = $(this).scrollTop();
 
    console.log($topOffset);

    var topLink = $("a[href='#top']"),
        abstractLink = $("a[href='#abstract']"),
        introductionLink = $("a[href='#introduction']"),
        methodsLink = $("a[href='#methods']"),
        resultsLink = $("a[href='#results']"),
        conclusionLink = $("a[href='#discussion--conclusion']"),
        citationsLink = $("a[href='#citations']");
    
    //topLink.css({'font-weight': 900, 'font-size': 'large'});
    if($(this).scrollTop() < $("#abstract").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        topLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at top");
    } else if ($(this).scrollTop() >= $("#abstract").offset().top && $(this).scrollTop() < $("#introduction").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        abstractLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at abstract");
    } else if ($(this).scrollTop() >= $("#introduction").offset().top && $(this).scrollTop() < $("#methods").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        introductionLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at introduction");
    } else if ($(this).scrollTop() >= $("#methods").offset().top && $(this).scrollTop() < $("#results").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        methodsLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at methods");
    } else if ($(this).scrollTop() >= $("#results").offset().top && $(this).scrollTop() < $("#discussion--conclusion").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        resultsLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at results");
    } else if ($(this).scrollTop() >= $("#discussion--conclusion").offset().top && $(this).scrollTop() < $("#citations").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        conclusionLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at conclusion");
    } else if ($(this).scrollTop() >= $("#citations").offset().top) {
        $("#nav-wrap").find("a").css({"font-weight": 400, "font-size": "medium"});
        citationsLink.css({'font-weight': 900, 'font-size': 'large'});
        console.log("at citations");
    }
});  
