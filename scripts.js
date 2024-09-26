$(document).ready(function() {
    // Example: Smooth scrolling for navigation links
    $('.navigation-link').click(function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // Example: Fade in elements on scroll
    $(window).scroll(function() {
        $('.white-box').each(function() {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom) {
                $(this).fadeTo(500, 1); // Adjust the duration as needed
            }
        });
    });
});
