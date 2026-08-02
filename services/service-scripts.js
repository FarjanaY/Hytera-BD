$(document).ready(function() {
    // Smooth scrolling for tab links
    $('.tab-links a').on('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        var target = $(this).attr('href');
        
        // Calculate offset (account for sticky header and tabs)
        var headerHeight = $('.main-header').outerHeight();
        var tabsHeight = $('.page-tabs').outerHeight();
        var offset = headerHeight + tabsHeight;
        
        // Animate scroll
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset + 10
        }, 600, 'easeInOutExpo');
        
        // Update active tab
        $('.tab-links a').removeClass('active');
        $(this).addClass('active');
    });
    
    // Highlight active tab on scroll
    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();
        var headerHeight = $('.main-header').outerHeight();
        var tabsHeight = $('.page-tabs').outerHeight();
        var offset = headerHeight + tabsHeight;
        
        // Check each section
        $('.service-section').each(function() {
            var sectionTop = $(this).offset().top - offset;
            var sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var sectionId = $(this).attr('id');
                $('.tab-links a').removeClass('active');
                $('.tab-links a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
    
    // Add easing function if not included in jQuery
    $.easing.easeInOutExpo = $.easing.easeInOutExpo || function(x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
}); 