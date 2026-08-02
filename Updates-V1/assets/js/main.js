$(document).ready(function() {
    // Initialize slider with better configuration
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        appendDots: $('.slider-dots'),
        fade: true,
        pauseOnHover: false,
        speed: 800,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    });

    // Delay initialization of custom controls to ensure proper rendering
    setTimeout(function() {
        // Custom navigation for slider
        $('.prev-arrow').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.slider').slick('slickPrev');
        });

        $('.next-arrow').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.slider').slick('slickNext');
        });
    }, 100);

    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
        $('.main-nav').slideToggle();
    });

    // Handle window resize to fix mobile menu visibility issue
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.main-nav').removeAttr('style');
        }
    });

    // Scroll effect for parallax and content overlap
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        
        // Add 'scrolled' class to body when scrolled
        if (scrollTop > 100) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
        
        // Remove the parallax effect to keep slider images fixed
        // $('.slide').css('transform', 'translateY(' + scrollTop * 0.2 + 'px)');
    });

    // Search button functionality
    $('.search-btn').click(function() {
        // Search functionality can be implemented here
        alert('Search functionality will be implemented here');
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').animate({
            'scrollTop': $target.offset().top - 80
        }, 800, 'swing');
    });

    // Add active class to navigation based on current page
    function setActiveMenu() {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        
        $('.nav-links > li > a').each(function() {
            var href = $(this).attr('href');
            
            if (href === page || (page === '' && href === 'index.html')) {
                $(this).parent().addClass('active');
            }
        });
    }
    
    setActiveMenu();
}); 