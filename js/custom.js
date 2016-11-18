function lightbox(idx) {
    //show the slider's wrapper: this is required when the transitionType has been set to "slide" in the ninja-slider.js
    var ninjaSldr = document.getElementById("ninja-slider");
    ninjaSldr.parentNode.style.display = "block";
    nslider.init(idx);
    var fsBtn = document.getElementById("fsBtn");
    fsBtn.click();
}
function fsIconClick(isFullscreen) {
    //fsIconClick is the default event handler of the fullscreen button
    if (isFullscreen) {
        var ninjaSldr = document.getElementById("ninja-slider");
        ninjaSldr.parentNode.style.display = "none";
    }
}

			function() {
				[].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
					new CBPFWTabs( el );
				});
			}();
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 500) {
                    $('footer').css('z-index', '-1');
                    $('footer').css('visibility', 'visible');
                } else {
                    $('footer').css('z-index', '-20');
                    $('footer').css('visibility', 'hidden');
                }
            });