// Author: Kyan Keise
// Date: 28/12/2022
// Title: Animated Navigation


const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})