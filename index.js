window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollPosition = window.scrollY;
    var opacity = 1 - scrollPosition / 100; 

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
                observer.unobserve(entry.target); /
            }
        });
    }, options);

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
   
    const navLinks = document.querySelectorAll('nav ul li a');

   
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

   
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        const offsetTop = targetSection.offsetTop; 
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});
