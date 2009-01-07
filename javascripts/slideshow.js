// JavaScript Document

function slideSwitch() {
    var $active = jQuery('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = jQuery('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : jQuery('#slideshow IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

jQuery(document).ready(function() {
    setInterval( "slideSwitch()", 5000 );
});

