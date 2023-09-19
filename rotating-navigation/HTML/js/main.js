// Author: Kyan Keise
// Date: 25/03/2022 
// Title: Rotating Navigation
 
// Declare variables for open, close and container 
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Add event listener to open and close
open.addEventListener('click', () => container.classList.add('show-nav'));


close.addEventListener('click', () => container.classList.remove('show-nav'));