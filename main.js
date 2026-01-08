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


    let firstname = validateName(firstNameElem.value, firstNameElem)
    let lastname = validateName(lastNameElem.value, lastNameElem)
    let email = validateEmail(emailElem.value, emailElem)
    let message = validateMessage(messageElem.value, messageElem)
    let query = validateQuery(querriesElem)
    let checkbox = validateCheckbox(checkBoxElem)

    if(firstname && lastname && email && message && query && checkbox){
        const userInfo = {
            name: `${firstname} ${lastname}`,
            email: email,
            query: query,
            message:message,
        };

        // reset form
        formElem.reset();

        console.log(userInfo)

        //return userInfo;
        
    }else{
        // error message
        return
    }
});


// validation fn for name
function validateName(name, elem){
    // reset error msg
    setError(elem, '');
    // This regex allows uppercase and lowercase letters, spaces, hyphens, and apostrophes
    let pattern = /^[a-zA-Z\s'-]+$/;

    if(name.length === 0){
        // error message on display
        setError(elem, 'name is required');
        return
    }else if(!pattern.test(name)){
        // error message on display
        setError(elem, 'Name contains invalid characters.')
        return
    } else {
        return name;
    }
}


// validation fn for email
function validateEmail(email, elem){
    setError(elem, '');

    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.length === 0){
        // error message on display
        setError(elem, 'email is required')
        return
    }else if(!pattern.test(email)){
        // error message on display
        setError(elem, 'email contains invalid characters.')
        return
    } else {
        return email;
    }
}


// message validation
function validateMessage(msg, elem){
    setError(elem, '');

    if(msg.length === 0){
        setError(elem, 'message is required')
        return
    };

    return msg
}


// query validation
function validateQuery(querries){
    setError(document.querySelector('.query-input div'), ''); 

    const checkedRadio = [...querries].filter((radio) => {
        return radio.checked;
    });

    if(checkedRadio[0]){
        return checkedRadio[0].value
    }else{
        setError(document.querySelector('.query-input div'), 'query fields is required')
        return false
    }
}


// checkbox validation
function validateCheckbox(checkbox){
    setError(checkbox, '')

    if(checkbox.checked){
        return true;
    }else{
        setError(checkbox, 'term and condition is required.')
        return false;
    }
}