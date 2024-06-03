window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollPosition = window.scrollY;
    var opacity = 1 - scrollPosition / 100; // Adjust the denominator for speed of fade

    document.getElementById("angad-heading").style.opacity = opacity;
}

document.addEventListener("DOMContentLoaded", function () {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-in-view");
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, options);

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the links in the navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Function to handle smooth scrolling
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); // Get the target section's id
        const targetSection = document.querySelector(targetId); // Find the target section
        const offsetTop = targetSection.offsetTop; // Get the top position of the target section

        // Scroll smoothly to the target section
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});
