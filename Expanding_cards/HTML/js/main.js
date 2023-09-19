// Author: Kyan Keise
// Date: 25/03/22
// Title: Expanding Cards Project



const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}