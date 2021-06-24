let Name= document.getElementById('Name');
let email= document.getElementById('email');
let phone= document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// name validation 
Name.addEventListener('blur', ()=>{
  let regex=/^[a-zA-Z]([0-9a-zA-z]){2,9}$/;
  let str =Name.value;

  if(regex.test(str)){
    console.log('your Name is valid');
    validUser = true;
  }else{
    console.log('your name is not valid');
    validUser = false;
  }

});

// email validation 
email.addEventListener('blur', ()=>{
  let regex=/^([_a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\.\-]+)\.([a-zA-Z]){2,7}$/;
  let str =email.value;

  if(regex.test(str)){
    console.log('your email is valid');
    validEmail = true;
  }else{
    console.log('your email is not valid');
    validEmail = false;
  }

});

// phone validation 
phone.addEventListener('blur', ()=>{
  let regex=/^([0-9]){10}$/;
  let str =phone.value;

  if(regex.test(str)){
    console.log('your phone is valid');
    validPhone = true;
  }else{
    console.log('your phone is not valid');
    validPhone = false;; 
  }

});


 let submit= document.getElementById('submit');
 submit.addEventListener('click', (e)=>{
   e.preventDefault();

   console.log('You clicked on submit');
   console.log(validEmail, validUser, validPhone);
   
   // Submit your form here
   if(validEmail && validUser && validPhone){
       let failure = document.getElementById('failure');

       console.log('Phone, email and user are valid. Submitting the form');
       let success = document.getElementById('success');
       success.classList.add('show');
       // failure.classList.remove('show');
       // $('#failure').alert('close');
       $('#failure').hide();
       $('#success').show();
       
   }
   else{
       console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
       let failure = document.getElementById('failure');
       failure.classList.add('show');
       // success.classList.remove('show');
       // $('#success').alert('hide');
       $('#success').hide();
       $('#failure').show();
       }


 }) 