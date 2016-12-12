var parallaxEffect = (function(window, $) {
    // Init & cache DOM
    var $_contentBlock = $(document).find('.content-block');
    var $_target = $_contentBlock.find('.is-scrolled');

    // Bind events
    $(window).scroll(_scroll);

    // _Scroll: translate target on scroll of window
    function _scroll() {
        var window_scroll = $(this).scrollTop();
        $($_target).css({
            'transform': 'translate(0px, '+window_scroll / 12 +'%)'
        });
    }

})(window, $);