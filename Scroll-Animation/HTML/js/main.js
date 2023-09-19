// Author: Kyan Keise
// Date:Date: 22/06/2022 -->
// Title: Scroll Animation Project 

// Variable Declaration boxes will be used to select all the boxes on the page.

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

// This function will check the position of the boxes on the page and add the class of show to the box if it is in the correct position. 
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
// This will loop through the boxes and check the position of each box.
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // This will check if the box is in the correct position and add the class of show to the box if it is.
        if (boxTop < triggerBottom) {
            box.classList.add('show')
            
            // This will remove the class of show from the box if it is not in the correct position.
        } else {
            box.classList.remove('show')
        }
    })
}