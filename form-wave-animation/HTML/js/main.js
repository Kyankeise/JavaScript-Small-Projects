// Author: Kyan Keise
// Date: 25/03/22 
// Title: Form wave Animation 


// declare Variable for label 
const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join('');
});