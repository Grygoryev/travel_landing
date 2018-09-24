var slides = document.getElementById("cuba-gallery-slider");

function slideForward() {
    slides.insertBefore(slides.childNodes[4], slides.childNodes[0]);
}

function slideBackward() {
    slides.insertBefore(slides.childNodes[0], slides.childNodes[4].nextSibling);
}