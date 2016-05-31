/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($, angular) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    /*  Core function of background moves
    *   x = the horizontal position of the image
        negative = TRUE or FALSE. if true Background will have negative value
    *   windowHeight = the height of the window
    *   pos = The position of the scrollbar
    *   adjuster = A value that moves the background image into a position we want
    *   inertia = The speed at which the background image moves in relation to the scrollbar
    */
    function newPos(x, negative, windowHeight, pos, adjuster, inertia) { 
        if(negative == 1) 
            return x + "% "+ (-((windowHeight + pos) - adjuster) * inertia) + "px"; 
        else
            return x + "% "+ (((windowHeight + pos) - adjuster) * inertia) + "px"; 
    }

    function isMobile() {
        var isMobile = false;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            isMobile = true;
        }
        return isMobile;
    }

    function inviewDirective() {
        return {
            restrict: 'A', 
            link: function(scope, element) {
                var $el = $(element),
                    top = $el.offset().top,
                    height = $el.height(),
                    $window = $(window);

                /**
                * Get the right value of adjuster, depending of the viewport width
                */
                function getAdjuster() {
                    var viewportWidth = $window.width();

                    if(viewportWidth < 768) {
                        return 1200; 
                    }
                    else if (viewportWidth >= 768 && viewportWidth < 1170) {
                        return 700;
                    }
                    else if (viewportWidth >= 1171 && viewportWidth < 1366) {
                        return 500;
                    }
                    else {
                        return -200;
                    }
                }

                function setBackgroundPositionParallax() {
                    var viewportHeight = $window.height(),
                        adjuster = getAdjuster(),
                        pos = $window.scrollTop(),
                        scrolltop = (document.documentElement.scrollTop ?
                            document.documentElement.scrollTop :
                            document.body.scrollTop);

                    // Avoid parallax on mobile devices
                    if (scrolltop < (top + height) && !isMobile()) {
                        element.css({'backgroundPosition': newPos(50, 1, viewportHeight, pos, adjuster, 0.25)});
                    }
                }

                $window.scroll(setBackgroundPositionParallax);
                
                // kick the event to pick up any elements already in view.
                $(function () {
                    $window.scroll();
                });                
            }
        };
    }    

    angular.module('inview', [])
        .directive('angularInview', inviewDirective);

})(jQuery, window.angular);