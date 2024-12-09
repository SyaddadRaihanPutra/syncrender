/*
Template: Techex - Information & Technology HTML Template
Author: RRDevs
*/

(function($) {
    "use strict";

    $(document).ready(function () {
        
        /* =============================================
            # Sticky header init
        ===============================================*/

        /*** Sticky header */
        $(window).scroll(function(){
            if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                $(".header-5").addClass("stop");
            } else {
                $(".header-5").removeClass("stop");
            }
        });

        /* =============================================
            # Dark Mode init
        ===============================================*/

        document.getElementById('checkbox').addEventListener('click', function() {
            document.body.classList.toggle('dark-1');
        });

        /*** Header height = gutter height */
        // function setGutterHeight(){
        //     var header = document.querySelector('.header-5'),
        //           gutter = document.querySelector('.header-gutter');
        //     if (gutter) {
        //         gutter.style.height = header.offsetHeight + 'px';
        //     }
        // }
        // window.onload = setGutterHeight;
        // window.onresize = setGutterHeight;

        /*** Search bar */
        $('.header-search').on('click', '.search-toggle', function(e) {
            e.preventDefault();
            var selector = $(this).data('selector');
            $(selector).toggleClass('show').find('.search-input').focus();
        });
              
        
        /* =============================================
            # owlCarousel init
        ===============================================*/
        $(".hero-slider-active").owlCarousel({        
            items: 1,     
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            nav: true,          
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
        });

        var heroSlider2 = $(".hero-slider-active-2");
                
        heroSlider2.owlCarousel({        
            items: 1,     
            dots: true,
            loop: true,
            autoplayTimeout: 5000,
            autoplay:true,
            nav: true,          
            navText : ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            onInitialized: function(event){ 
                var $firstAnimatingElements = $('.owl-item', heroSlider2).eq(event.item.index).find('[data-animation]');
                doAnimations($firstAnimatingElements);
            }
        });

        /*** Animation */
        heroSlider2.on('changed.owl.carousel', function(event) {
            var $firstAnimatingElements = $('.owl-item', heroSlider2).eq(event.item.index).find('[data-animation]');
            doAnimations($firstAnimatingElements); 
        });
        
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        };

        $(".testimonial-carousel-active").owlCarousel({        
            items: 1,     
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
        });
        
        $(".testimonial-carousel-2").owlCarousel({        
            items: 2,
            margin: 30,     
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },                
                // breakpoint from 992 up
                1191 : {
                    items: 2
                }
            }
        });

        $(".testimonial-carousel-4").owlCarousel({
            items: 3,
            margin: 30,
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 992 up
                1191 : {
                    items: 2
                },
                // breakpoint from 992 up
                1366 : {
                    items: 3
                }
            }
        });

        $(".testimonial_widget").owlCarousel({        
            items: 2,
            nav:true,
            margin: 30,     
            loop: true,
            dots: false,
            autoplay:true,
            autoplayTimeout: 8000,
            navText : ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },                
                // breakpoint from 992 up
                1191 : {
                    items: 2
                }
            }
        });
        
        $(".testimonial-carousel-3").owlCarousel({        
            items: 2,
            nav:true,
            items: 1,
            margin: 30,     
            loop: true,
            dots: false,
            autoplay:true,
            autoplayTimeout: 8000,
            navText : ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
        });

        $(".hero-slider-2").owlCarousel({        
            items: 1,     
            dots: true,
            loop: true,
            autoplayTimeout: 9000,
            autoplay:true,
        });

        $(".brand-carousel-active").owlCarousel({  
            margin: 70,    
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,  
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 2,
                },
                767 : {
                    items: 2
                },                
                // breakpoint from 992 up
                1191 : {
                    items: 5
                }
            }
        });

        $(".case-study-items").owlCarousel({  
            margin: 30,    
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            center: true,
            autoplay:true,
            nav: true,
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
            navContainer: '.case-study-carousel-wrapper .work-process-nav', 
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                768 : {
                    items: 2
                },                
                1200 : {
                    items: 3
                }
            }
        });

        $(".project-case-study-2").owlCarousel({
            margin: 0,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            center: true, 
            responsive : {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 992 up to 1199
                992: {
                    items: 1
                },
                // breakpoint from 1199 up to 1366
                1199: {
                    items: 2
                },
                // breakpoint from 1367 and above
                1367: {
                    items: 3
                }
            }
        });
        $(".project-case-study").owlCarousel({
            margin: 30,
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            center: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },
                // breakpoint from 992 up
                1191 : {
                    items: 3
                },

            }
        });
        $(".project-carousel-card-active").owlCarousel({
            margin:15,
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },                
                // breakpoint from 992 up
                1191 : {
                    items: 3
                },
                1366 : {
                    items: 4
                },

            }
        });
        $(".agent-element").owlCarousel({        
            margin: 30,      
            dots: true,
            loop: true,
            autoplayTimeout: 8000,
            autoplay: true,
            nav: true,
            navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                767 : {
                    items: 1
                },                
                // breakpoint from 992 up
                1191 : {
                    items: 2
                },

            }
        });

        $(".success-item__wrapper").owlCarousel({        
            margin: 30,
            dots: true, 
            dotsEach: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                768 : {
                    items: 2
                },
                992 : {
                    items: 3
                },                
                // breakpoint from 1366 up
                1367 : {
                    items: 4
                },

            }
        });


        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        //# Smooth Scroll
        $('#responsive-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 30 || $("html").scrollTop() > 30) {
                    $("header").addClass("sticky");
            } else {
                $("header").removeClass("sticky");
            }
        });

        $('.container').imagesLoaded(function() {
            $('.portfolio-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            $('.case-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });

        var catButton = '.portfolio-cat-filter button';

        var caseButton = '.case-cat-filter button';

        $(catButton).on('click', function(){
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });

        $(caseButton).on('click', function(){
            $(caseButton).removeClass('active');
            $(this).addClass('active');
        });

        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        // Scroll to bottom then close navbar
        $(window).scroll(function(){
            if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                $('.mobile-nav').removeClass('show');
                $('.overlay').removeClass('active');
            }
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        $("#mobile-menu").metisMenu();

        new WOW().init();


        $('.side-toggle-menu, .offcanvas-btn').on('click', function() {            
            $('.offset-menu').addClass('show');
        });

        $('#offset-menu-close-btn').on('click', function() {            
            $('.offset-menu').removeClass('show');
        });
        
        const counterUp = window.counterUp.default

        const callback = entries => {
            entries.forEach( entry => {
                const el = entry.target
                if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                    counterUp( el, {
                        duration: 2500,
                        delay: 16,
                    } )
                    el.classList.add( 'is-visible' )
                }
            } )
        }

        const IO = new IntersectionObserver( callback, { threshold: 1 } )

        const el = document.querySelectorAll( '.single-funfact-item h3' );
        el.forEach((el) => {
            IO.observe(el);
        });

        const singleRateItem = document.querySelectorAll( '.single-rate-item h3' );
        singleRateItem.forEach((singleRateItem) => {
            IO.observe(singleRateItem);
        });

        /*======================================
        Data Css js
        ========================================*/
        $("[data-background]").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });

        $("[data-width]").each(function() {
            $(this).css("width", $(this).attr("data-width"));
        });

        $("[data-bg-color]").each(function() {
            $(this).css("background-color", $(this).attr("data-bg-color"));
        });

    }); // end document ready function


    
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").delay(200).fadeOut();

            /*** AOS */
            AOS.init({
                once: true,
                offset: 100,
                duration: 900,
            });
        });
    }

    loader();

    $('.lan-select select').niceSelect();

})(jQuery); // End jQuery
