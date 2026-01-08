// dom elem
const formElem = document.querySelector('.form-container');

const firstNameElem = formElem.querySelector('#first-name')
const lastNameElem = formElem.querySelector('#last-name')
const emailElem = formElem.querySelector('#email')
const querriesElem = formElem.querySelectorAll('.query')
const messageElem = formElem.querySelector('#message')
const checkBoxElem = formElem.querySelector('#checkbox')



// set error
function setError(elem, msg){
    const inputControl = elem.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = msg
}

formElem.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('submitted');

    let firstname = validateName(firstNameElem.value)
    let lastname = validateName(lastNameElem.value)
    let email = validateEmail(emailElem.value)
    let message = validateMessage(messageElem.value)
    let query = validateQuery(querriesElem)
    let checkbox = validateCheckbox(checkBoxElem)

    if(firstname && lastname && email && message && query && checkbox){
        const userInfo = {
            name: `${firstname} ${lastname}`,
            email: email,
            query: query,
            message:message,
        };

        console.log(userInfo)
    }else{
        console.log('error', firstname, email, message, query, checkbox)
        return
    }
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
        return email;
    }
}


// message validation
function validateMessage(msg){
    if(msg.length === 0){
        console.log('error, meage cant be empty')
    }

    return msg
}


// query validation
function validateQuery(querries){
    const checkedRadio = [...querries].filter((radio) => {
        return radio.checked;
    })
    console.log(checkedRadio)
    if(checkedRadio[0]){
        return checkedRadio[0].value
    }else{
        return false
    }
}


// checkbox validation
function validateCheckbox(checkbox){
    if(checkbox.checked){
        return true;
    }else{
        return false;
    }
}