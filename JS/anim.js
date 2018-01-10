/*jslint browser: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, jQuery, define*/
function animate() {
    "use strict";
    
    /* scrolls in the items by finding how far they are from the top of screen */
    $(".slideanim").each(function () {
        
        var pos = $(this).offset().top,
            winTop = $(window).scrollTop();
            
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
}



$(document).ready(function () {
    "use strict";

    /* scrolls in the items by finding how far they are from the top of screen */
    $(window).scroll(animate);
});