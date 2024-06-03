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
