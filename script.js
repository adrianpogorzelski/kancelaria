const switchView = (view) => {
    document.getElementById('o-kancelarii').classList.add('ukryte')
    document.getElementById('dokumenty').classList.add('ukryte')
    document.getElementById('czynnosci').classList.add('ukryte')
    document.getElementById('platnosci').classList.add('ukryte')
    document.getElementById('kontakt').classList.add('ukryte')
    document.getElementById('do-pobrania').classList.add('ukryte')
    document.getElementById(view).classList.remove('ukryte')
}

let slideIndex = 1;
showSlides(slideIndex);


function zmianaSlajdu(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function obecnySlajd(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slajd");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}