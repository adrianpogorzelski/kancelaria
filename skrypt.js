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