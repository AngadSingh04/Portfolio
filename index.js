window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollPosition = window.scrollY;
    var opacity = 1 - scrollPosition / 100; // Adjust the denominator for speed of fade

    document.getElementById("angad-heading").style.opacity = opacity;
}

