// [custom.js] for touch apps


// TABS (http://www.red-team-design.com)
		$(document).ready(function() {
			$("#content").children("div").hide(); // Initially hide all content
			$("#tabs li:first").attr("id","current"); // Activate first tab
			$("#content div:first").fadeIn(); // Show first tab content
    
			$('#tabs a').click(function(e) {
				e.preventDefault();
				if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
				return       
				}
				else{             
				$("#content").children("div").hide(); //Hide all content
				$("#tabs li").attr("id",""); //Reset id's
				$(this).parent().attr("id","current"); // Activate this
				$('#' + $(this).attr('name')).fadeIn(); // Show content for current tab
				}
			});
		});
// TABS ends here


// RoyalSlider
jQuery(document).ready(function($) {
  // Please note that autoHeight option has some conflicts with options like imageScaleMode, imageAlignCenter and autoScaleSlider
  // it's recommended to disable them when using autoHeight module
  $('#content-slider-1').royalSlider({
    autoHeight: false,
    arrowsNav: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'tabs',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    loop: false,
    loopRewind: true,
    numImagesToPreload: 6,
    keyboardNavEnabled: true
  });
});
// RoyalSlider ends here