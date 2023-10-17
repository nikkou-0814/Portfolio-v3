document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("hellomodal");
        scrollingElement.style.top = "-120vh";
    }, 5400);
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("hello-text");
        scrollingElement.style.top = "-120vh";
    }, 5400);
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("hello-back");
        scrollingElement.style.top = "-120vh";
    }, 5400);
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("helloimg");
        scrollingElement.style.top = "-120vh";
    }, 5400);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var element = document.getElementById("hello-mo-div");
        element.style.opacity = 1;
    }, 300);
});

ityped.init(document.querySelector("#ityped"), {
    strings: ['Welcome to my Portfolio!', 'Thank you for viewing! :)']

    ,typeSpeed:  50,
    startDelay: 800,
    backSpeed:  20,
    loop: false,
    showCursor: true,
})