
/*---------------------slider touch -----------------*/


$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({

        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        touchDrag: false
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    });
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    });


});





/*--------------------fixed menu-----------------------*/


$(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        $('.header-fixed-top').addClass('shrink');
    } else {
        $('.header-fixed-top').removeClass('shrink');
        
    }
});





/*=====================   left-menu  ========================*/

    $(document).ready(function () {
        $('#push, #close').click(function () {
            var $navigacia = $('body, #slide-menu-navigation'),
                val = $navigacia.css('left') === '690px' ? '0px' : '690px';
            $navigacia.animate({
                left: val
            }, 300)

        });

    });




/*---------------------- popover  --------------------*/

     $('#elem').popover(),
     $('#elem1').popover(),
     $('#elem2').popover(),
     $('#elem3').popover(),
     $('#elem4').popover()


$(document).ready(function() {
	$('#myCarousel3').carousel({
	interval: 0
	});
    
    $('#myCarousel3').on('.slides', function() {
	});
});

$(document).ready(function() {
	$('#myCarousel4').carousel({
	interval: 0
	});
    
    $('#myCarousel4').on('.slides', function() {
	});
});






/* ----------------- gg-script  ------------------- */
$(document).ready(function() {
    var $window = $(window);
    //var $pane = $('#pane1');
    var windowsize = $window.width();
    if (windowsize > 767) {
        $('.panel-group .gg-panel-default .gg-panel-header .gg-panel-title a').attr({"data-toggle":""});
        $('.panel-group .gg-panel-default .gg-panel-header .gg-panel-title a').click(function(e){
            e.preventDefault();
        });
    }  
    // owl slider  
    var owl = $("#owl-download-example-1");
    owl.owlCarousel({
        items : 6,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
        singleItem : false,
        itemsScaleUp : false,
        scrollPerPage : true,
        autoHeight : false,
        responsiveBaseWidth: window,
        pagination : false
    });
    // Custom Navigation Events
    $(".owl-slider-next").click(function(){
    owl.trigger('owl.next');
    });
    $(".owl-slider-prev").click(function(){
    owl.trigger('owl.prev');
    });  

    // owl slider  
    var owl2 = $("#owl-download-example-2");
    owl2.owlCarousel({
        items : 6,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
        singleItem : false,
        itemsScaleUp : false,
        scrollPerPage : true,
        autoHeight : false,
        responsiveBaseWidth: window,
        pagination : false
    });
    // Custom Navigation Events
    $(".owl-slider-next-2").click(function(){
    owl2.trigger('owl.next');
    });
    $(".owl-slider-prev-2").click(function(){
    owl2.trigger('owl.prev');
    });       
});