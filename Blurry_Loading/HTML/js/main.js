// Author: Kyan Keise
// Date 21/06/22:
// Title: blurry loading

// Create a function that will blur the background image
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// Create a variable that will set the number
let load = 0

// Variable that will set the interval
let int = setInterval(blurring, 30)

// Create a function that will increase the number
function blurring() {
    load++


    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

// Create a function that will scale the number
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}