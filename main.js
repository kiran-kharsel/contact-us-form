// dom elem
const formElem = document.querySelector('.form-container');

const firstName = formElem.querySelector('#first-name')
const lastName = formElem.querySelector('#last-name')
const email = formElem.querySelector('#email')
const queries = formElem.querySelectorAll('.query')
const message = formElem.querySelector('#message')
const checkBox = formElem.querySelector('#checkbox')



formElem.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submitted')
})


// validation fn for name
function validateName(name){
    // This regex allows uppercase and lowercase letters, spaces, hyphens, and apostrophes
    let pattern = /^[a-zA-Z\s'-]+$/;

    if(name.length === 0){
        console.log('name is required');
        // error message on display
    }else if(!pattern.test(name)){
        console.log('Name contains invalid characters.');
        // error message on display
    } else {
        return name;
    }
}


// validation fn for email
function validateEmail(email){
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.length === 0){
        console.log('email is required');
        // error message on display
    }else if(!pattern.test(email)){
        console.log('email contains invalid characters.');
        // error message on display
    } else {
        console.log(email)
        //return email;
    }
}

validateEmail('can-3@gmail.com')