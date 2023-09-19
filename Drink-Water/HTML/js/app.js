// Author: Kyan Keise
// Date: 29/12/2022
// Title: Drink Water App

// Select all the small cups and add event listener to each of them to toggle the class of full to the cup.
const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()

// Add event listener to each of the small cups
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})
// Add event listener to the big cup to remove the water
function highlightCups(idx) {

    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

// Update the big cup with the water level and the percentage of water filled in the cup
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visable';
        litres.innerText = `${3 - (250 * fullCups / 1000)}L`
    }
}