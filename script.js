let payForm = document.getElementById("contactForm");

let inputContainer = document.getElementById("container");
let outputContainer = document.getElementById("output-container");

let userName = document.getElementById("username");
let userEmail = document.getElementById("userEmail");
let userPhone = document.getElementById("phone");
let userAddress = document.getElementById("address");
let userFeedback = document.getElementById("feedback");

let outputName = document.getElementById("op-name");
let outputEmail = document.getElementById("op-email");
let outputPhone = document.getElementById("op-phone");
let outputAddress = document.getElementById("op-address");
let outputFeedback = document.getElementById("op-feedback");


payForm.addEventListener('submit', (e)=>{

    e.preventDefault();

    let name = userName.value.trim();
    let email = userEmail.value.trim();
    let phone = userPhone.value.trim();
    let address = userAddress.value.trim();
    let feedback = userFeedback.value.trim();

    const nonEmptyFields = emptyValueChecker(name, email, phone, address, feedback);

    if(nonEmptyFields){
        outputName.innerHTML = name;
        outputEmail.innerHTML = email;
        outputPhone.innerHTML = phone;
        outputAddress.innerHTML = address;
        outputFeedback.innerHTML = feedback;
      
    
        inputContainer.style.display = "none";
        outputContainer.style.display = "block";
    
    }

   
});


const emptyValueChecker = (name,email,phone,address,feedback) => {
 
    let errorMsg = "";
    
    if(name === ""){
        errorMsg += "Name is empty \n"
        document.getElementById('name-error').innerText = "Name cannot be empty"  
    }
    if(email === ""){
        errorMsg += "Email is empty \n" 
        document.getElementById('email-error').innerText = "Email cannot be empty"     
    }
    if(phone === ""){
        errorMsg += "Phone is empty \n"  
        document.getElementById('phone-error').innerText = "Contact number cannot be empty"       
    }
    if(address === ""){
        errorMsg += "Address is empty \n"
        document.getElementById('address-error').innerText = "Address cannot be empty"  
    }
    if(feedback === ""){
        errorMsg += "Feedback is empty \n"
        document.getElementById('feedback-error').innerText = "Feedback cannot be empty"  
    }
    
    
    if(errorMsg===""){
        return true;
    }
    else{
        console.log(errorMsg);
        return false; 
        // change this code - no need of else 
    }
}


userName.addEventListener('input', () => {
    if(emptyValueChecker){
        document.getElementById("name-error").innerText = "";
    }   
});

userEmail.addEventListener('input', () => {
    if(emptyValueChecker){
        document.getElementById("email-error").innerText = "";
    }   
});

userPhone.addEventListener('input', () => {
    if(emptyValueChecker){
        document.getElementById("phone-error").innerText = "";
    }   
});

userAddress.addEventListener('input', () => {
    if(emptyValueChecker){
        document.getElementById("address-error").innerText = "";
    }   
});

userFeedback.addEventListener('input', () => {
    if(emptyValueChecker){
        document.getElementById("feedback-error").innerText = "";
    }   
});