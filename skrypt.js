let mobileMenuVisible = false
const mobileMenu = document.getElementsByTagName('nav')[0]

const hideMobileMenuAfterClick = () => {
    if (mobileMenuVisible) {
        mobileMenu.style.display = 'none'
        mobileMenuVisible = false
    }
}

const mobileMenuToggle = () => {
    if (!mobileMenuVisible) {
        mobileMenu.style.display = 'inline'
        mobileMenuVisible = true
    } else {
        mobileMenu.style.display = 'none'
        mobileMenuVisible = false
    }
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
