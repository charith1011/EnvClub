document.addEventListener("DOMContentLoaded", function () {
    // Add scroll event listener for the fixed navigation
    document.addEventListener("scroll", function () {
        var headerHeight = document.querySelector('header').offsetHeight;
        var nav = document.querySelector('nav');

        if (window.pageYOffset > headerHeight) {
            nav.classList.add('nav-fixed');
        } else {
            nav.classList.remove('nav-fixed');
        }
    });
});


