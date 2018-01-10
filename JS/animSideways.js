/*jslint browser: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, jQuery, define*/
function animateElements() {
    "use strict";
    
    alert("this was called");
    console.log("This was called");
    
    $(".slideleft").each(function () {

        var pos = $(this).offset().top,
            winTop = $(window).scrollTop();

        if (pos < winTop + 600) {
            $(this).addClass("slideInLeft");
        }
    });

    $(".slideright").each(function () {

        var pos = $(this).offset().top,
            winTop = $(window).scrollTop();

        if (pos < winTop + 600) {
            $(this).addClass("slideInRight");
        }
    });
}


$(document).ready(function () {
    "use strict";

    /* scrolls in the items by finding how far they are from the top of screen */
    $(window).scroll(animateElements);

});