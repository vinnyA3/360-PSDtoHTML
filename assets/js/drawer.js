var drawerAction = (function() {
    // Init & Cache DOM
    var $_drawer = document.querySelector('.nav-drawer');
    var $_hamburger = document.querySelector('.nav__hamburger');
    var $_drawer_close = $_drawer.querySelector('.nav-drawer__close');

    // Bind events
    _toggle($_hamburger, "0");
    _toggle($_drawer_close, "-100%");
        
    // Toggle appropriately
    // el: element to be toggled
    // direction: the direction (as a string) to toggle/slide the drawer 
     function _toggle(el, direction) {
        // Not very reusable :/
        $(el).on('click', function() {
            $($_drawer).animate({
                "top": direction
            });
        });
    }
    
})(jQuery);