// Name: Kyan Keise
// Date: 21/12/2022
// Title: Form validation for contact form

// Form blur Event listener
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('post').addEventListener('blur', validatePost);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


// Validates name entry 
function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/; // ^ means starts with. Expression means it can be A-Z lower and uppercase not shorter then 2  not longer than 10. $ ends the expression. 
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');

    } else {
        name.classList.remove('is-invalid');


    }
}

// Validates Post code entry 
function validatePost() {
    const post = document.getElementById('post');
    const re = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
    post.classList.add('is-invalid');
    if (!re.test(post.value)) {
    } else {
        post.classList.remove('is-invalid');


    }
}


// Validates email entry
function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-za-z0-9_\-\.]+)@([a-za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');

    } else {
        email.classList.remove('is-invalid');


    }
}

// Validates phone entry
function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\+?(?:\d\s?){10,12}$/;
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');

    } else {
        phone.classList.remove('is-invalid');


    }
}
