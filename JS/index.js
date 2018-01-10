/*jslint browser: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/
/*global animateText, deleteText, startAnimation, blinkCursor
/*eslint no-undef: "error"*/
/*eslint-env browser*/

var hasAnimated = false;

(function parallaxFunc() {
    "use strict";

    // finds all classes in the file called parallax
    var parallax = document.querySelectorAll(".parallax"),
        speed = -0.3;

    window.onscroll = (function () {
        [].slice.call(parallax).forEach(function (el) {

            var windowOffset = window.pageYOffset,
                backgroundPos = "0px " + (windowOffset * speed) + "px";

            el.style.backgroundPosition = backgroundPos;
        });
    });
}());

$(function () {
    
    var scrollOffset = 125;
    
    "use strict";
    
    $(".home-button").click(function () {

        var animationTime = 2000;

        if ($("#home").offset().top > -80) {
            animationTime = 0;
        }

        $("html, body").animate({
            scrollTop: 0
        }, animationTime); 
    });
    
    $(".about-button").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top - scrollOffset - 2
        }, 2000);
    });
    
    $(".projects-button, .learn-more-button").click(function () {
        $("html, body").animate({
            scrollTop: $("#projects").offset().top - scrollOffset + 10
        }, 2000);
    });
    
    $(".skills-button").click(function () {
        $("html, body").animate({
            scrollTop: $("#skills").offset().top - scrollOffset + 10
        }, 2000);
    });
    
    $(".contact-button").click(function () {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top - scrollOffset + 10
        }, 2000);
    });
});


function animateLCD() {

    "use strict";

    var pos = $(".segment").offset().top,
        windowTop = $(window).scrollTop();

    if (pos < windowTop + 600) {
        $(".segment").addClass("animate");
        $(".social-media").addClass("social-animate");
    }
}

function animateEnergy() {
       
    // looks for the skills to be in view, then animates
    if($(".skillbar").offset().top < $(window).scrollTop() + 600 && !hasAnimated) {
        
        hasAnimated = true;
        
        $(".skillbar").each(function () {
           $(this).find(".skillbar-bar").animate({
               width: $(this).attr("percent"),
               easing: 'swing'
           }, 5000); 
        });

        $(".count").each(function () {
            $(this).prop("count", 0).animate({
              count: $(this).text()  
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now))
                }
            });
        });
    }
}

$(document).ready(function () {
    "use strict";

    /* scrolls in the items by finding how far they are from the top of screen */
    $(window).scroll(animateLCD);
    $(window).scroll(animateEnergy);
    
    setInterval(blinkCursor, 600);
    
    var scrollOffset = 125;
    
    $(window).scroll(function () {
        
        var about = $("#about").offset();
        var projects = $("#projects").offset();
        var skills = $("#skills").offset();
        var contact = $("#contact").offset();
        var screenPos = $(document).scrollTop();
        
        if (screenPos < about.top) {
            
            hasAnimated = false;
            
            $(".about-element").removeClass("active");
            $(".project-element").removeClass("active");
            $(".contact-element").removeClass("active");
            $(".skills-element").removeClass("active");
            $(".home-element").addClass("active");
        }
        
        if (screenPos >= (about.top - scrollOffset)) {
            $(".home-element").removeClass("active");
            $(".project-element").removeClass("active");
            $(".contact-element").removeClass("active");
            $(".skills-element").removeClass("active");
            $(".about-element").addClass("active");
        }
        
        if (screenPos >= (projects.top - scrollOffset)) {
            $(".home-element").removeClass("active");
            $(".about-element").removeClass("active");
            $(".skills-element").removeClass("active");
            $(".contact-element").removeClass("active");
            $(".project-element").addClass("active");
        }
        
        if (screenPos >= (skills.top - scrollOffset)) {
            $(".home-element").removeClass("active");
            $(".about-element").removeClass("active");
            $(".project-element").removeClass("active");
            $(".contact-element").removeClass("active");
            $(".skills-element").addClass("active");
        }
        
        if (screenPos >= (contact.top - scrollOffset)) {
            $(".home-element").removeClass("active");
            $(".about-element").removeClass("active");
            $(".project-element").removeClass("active");
            $(".skills-element").removeClass("active");
            $(".contact-element").addClass("active");
        }
    });
});

var texts = ["My Name is Brandon Baars   ", "I am a Web/iOS/Embedded Systems Developer", "I am a Computer Engineering Student", "I am a Dreamer "];
var index = 0;

function deleteText(text, n) {

    "use strict";

    if (n > 0) {
        
        if (n > 4 && index > 0 && index < 4) {
            document.getElementById("header").innerHTML = "I am " + text.substr(4, n - 1).fontcolor("red");
        } else {
            document.getElementById("header").innerHTML = text.substr(0, n - 1);
        }
       
        n--;
        setTimeout(deleteText, 100, text, n);
    } else {
        index++;
        if (index < texts.length) {
            setTimeout(animateText, 100, texts[index], 0, index);
        } else {
            document.getElementById("header").innerHTML = "Brandon Baars";
        }
    }
}

function animateText(text, n, index) {
    
    "use strict";
    
    if (n < text.length) {
        if (n > 4 && index > 0 && index < 4) {
            var result = text.substr(4, n + 1).fontcolor("red");
            document.getElementById("header").innerHTML = "I am " + result;
        } else {
            document.getElementById("header").innerHTML = text.substr(0, n + 1);
        }
        
        n++;
        setTimeout(animateText, 100, text, n, index);
    } else {
        deleteText(texts[index], texts[index].length - 1);
    }
}

function startAnimation() {
    "use strict";
    animateText(texts[0], 0, index);
}

function blinkCursor() {
    "use strict";
    
    $("#cursor").animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}



