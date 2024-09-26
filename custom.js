// Ensure jQuery is loaded before executing this script
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.navigation-link').on('click', function(event) {
        const target = $(this).attr('href');

        // Check if the link is a hash link (internal navigation)
        if (target.startsWith('#')) {
            event.preventDefault();
            const targetElement = $(target);

            // Check if the target element exists
            if (targetElement.length) {
                $('html, body').animate({
                    scrollTop: targetElement.offset().top
                }, 500);
            } else {
                console.error('Target element not found: ' + target);
            }
        }
        // If it's an external link (without #), let it behave normally
    });

    // Show alert on button click
    $('#myButton').on('click', function() {
        alert('Button clicked!');
    });

    // Add any other custom functionality you need below
});
