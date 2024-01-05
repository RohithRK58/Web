const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const mobilenumber = document.querySelector('#mobilenumber');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
    validateInputs();
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const mobilenumberVal = mobilenumber.value.trim();
    const pass1Val = pass1.value.trim();
    const pass2Val = pass2.value.trim();


    if(usernameVal===''){
    
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(pass1Val === ''){
        success= false;
        setError(pass1,'password is required')
    }
    else if(pass1Val.length<8){
        
        setError(pass1,'password must be atleast 8 characters long')
    }
    else{
        setSuccess(pass1)
    }

    if(pass2Val === ''){
        
        setError(pass2,'Confirm password is required')
    }
    else if(pass2Val!==pass1Val){
        
        setError(pass2,'password does not match')
    }
    else{
        setSuccess(pass2)
    }
    if(mobilenumberVal===''){
        setError(mobilenumber,'mobile number is required')
    }
    else if(mobilenumberVal.length < 10){
        setError(mobilenumber,'invalid mobile number')
    }
    else if(mobilenumberVal.length > 10){
        setError(mobilenumber,'invalid mobile number')
    }
    else{
        setSuccess(mobilenumber)
    }


}
//element - pass1, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
