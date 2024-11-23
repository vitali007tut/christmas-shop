const burgerIcon = document.querySelector(".icon-burger-container")
const navMenu = document.querySelector('.nav-ul')
const navItems = document.querySelectorAll('.nav-item')

const togglerNav = () => {
    burgerIcon.classList.toggle('change')
    navMenu.classList.toggle('change')
    document.body.classList.toggle('change')
}

burgerIcon.addEventListener('click', togglerNav)

navItems.forEach(item => item.addEventListener('click', togglerNav))
