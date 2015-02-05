

/*----------------  carousel inside pages -----------*/

(function () {

            // store the slider in a local variable
            var $window = $(window),
                flexslider;

            // tiny helper function to add breakpoints
            function getGridSize() {
                 return   (window.innerWidth < 480) ? 1 :
                 (window.innerWidth < 768) ? 2 :
                    (window.innerWidth < 991) ? 2 :
                (window.innerWidth < 1260) ? 2 : 3;
            }


            $window.load(function () {
                $('.flexslider').flexslider({
                    animation: "slide",
                    animationSpeed: 400,
                    animationLoop: false,
                    itemWidth: 200,
                    itemMargin: 0,
                    minItems: getGridSize(), // use function to pull in initial value
                    maxItems: getGridSize(), // use function to pull in initial value
                });
            });

            // check grid size on resize event
            $window.resize(function () {
                var gridSize = getGridSize();

                flexslider.vars.minItems = gridSize;
                flexslider.vars.maxItems = gridSize;
            });
        }());
