const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.querySelector('nav')
const animate = document.getElementsByClassName('bar')[0]
const animate1 = document.getElementsByClassName('bar')[1]
const animate2 = document.getElementsByClassName('bar')[2]


toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active'),
    animate.classList.toggle('active'),
    animate1.classList.toggle('active'),
    animate2.classList.toggle('active')
})