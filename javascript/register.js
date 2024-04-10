let registerAs=document.getElementsByName("register-as")[0]
let Alert=document.querySelector(".alert")

// form validation starts form here

let createBtn=document.querySelector(".createNow-btn")
let firstnameStatus,lastnameStatus,emailStatus,dobStatus,genderStatus,phoneStatus,currentsemStatus,facultyStatus, passwordStatus,confirmPasswordStatus

createBtn.addEventListener("click",function(event){
    event.preventDefault()

//   first name validation starts here
    let firstName=document.getElementsByName("firstname")[0]
    let firstnameErr=document.querySelector("#firstname-err")
    let namepattern=/[\d$#^&*()!]/
    if(firstName.value===""){
     firstnameErr.textContent="*Required"
     firstName.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
     firstnameStatus=false
    }
    else if(firstName.value.length<4 ||namepattern.test(firstName.value)){
     firstnameErr.textContent="Invalid format"
     firstName.style.boxShadow=""
     firstName.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
     firstnameStatus=false

    }
    else{
        firstnameErr.textContent=""
        firstName.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
        firstnameStatus=true
        // 0px 0px 1.5px 1.5px rhba(0,255,0,0.5) represents horizontal offset, vertical offset, blur radius, spread radius, color respectively.
    }

    // lastname validation starts here
    let lastName=document.getElementsByName("lastname")[0]
    let lastnameErr=document.querySelector("#lastname-err")
    let lastnamepattern=/[\d$#^&*()!]/
    if(lastName.value===""){
     lastnameErr.textContent="*Required"
     lastName.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
    }
    else if(lastName.value.length<4 ||lastnamepattern.test(lastName.value)) {
        lastnameErr.textContent="Invalid format"
        lastName.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
        lastnameStatus=false
    }
    else {
        lastnameErr.textContent=""
        lastName.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
        lastnameStatus=true
    }

    // email validation starts from here
    let Email=document.getElementsByName("email")[0]
    let emailErr=document.querySelector("#email-err")
    let emailpattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(Email.value===""){
        emailErr.textContent="*Required"
        Email.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
        emailStatus=false 

    }
    else if(!emailpattern.test(Email.value)){
        emailErr.textContent="Enter valid email"
        Email.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
        emailStatus=false 
    }
    else{
        emailErr.textContent=""
        Email.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
        emailStatus=true
    }

    // date of birth validation starts form here
let dateOfBirth=document.getElementsByName("dob")[0]
let dobErr=document.querySelector("#dob-err")

let currentdate=new Date()
let currentyear=currentdate.getFullYear()
let mydate=new Date(dateOfBirth.value)
let myyear=mydate.getFullYear()
let ageDifference=currentyear-myyear

if(dateOfBirth.value===""){
    dobErr.textContent="*Required"
    dobStatus=false
    dateOfBirth.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else if(ageDifference<=17){
    dobErr.textContent="*Age must be equal or greater than 18"
    dobStatus=false
    dateOfBirth.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    dobErr.textContent=""
    dobStatus=true
    dateOfBirth.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)" 
}


// gender validation starts here
   let Gender=document.getElementsByName("gender")
   let genderErr=document.querySelector("#gender-err")
   let genderWrapper=document.querySelector(".gender-wrapper")
   let gender_status=false
   for(let i=0;i<Gender.length;i++){
    if(Gender[i].checked){
        gender_status=true
        break;
    }
   }
   if(gender_status){
    genderErr.textContent=""
    genderStatus=true
    genderWrapper.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

   }
   else{
    genderErr.textContent="*Required"
    genderStatus=false
    genderWrapper.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
   }


//  phone validation starts here
let Phone=document.getElementsByName("phone")[0]
let phoneErr=document.querySelector("#phone-err")
let phonepattern=/^[0-9]{10}$/
if(Phone.value===""){
    phoneErr.textContent="*Required"
    Phone.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
   phoneStatus=false
}
else if(!phonepattern.test(Phone.value) ||Phone.value.lenght<11){
    phoneErr.textContent="Enter valid phone"
    Phone.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
    phoneStatus=false
}
else {
    phoneErr.textContent=""
    phoneStatus=true
    Phone.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

}


// current semester validation
let currentSem=document.getElementsByName("current-sem")[0]
let currentsemErr=document.querySelector("#currentsem-err")
if(currentSem.value==="01"){
 currentsemErr.textContent="*Required"
 currentSem.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
 currentsemStatus=false
}
else {
    currentSem.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
    currentsemErr.textContent=""
    currentsemStatus=true
}


// faculty validation starts here
let Faculty=document.getElementsByName("faculty")[0]
let facultyErr=document.querySelector("#faculty-err")
if(Faculty.value===""){
    facultyErr.textContent="*Required"
    facultyStatus=false
    Faculty.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else if(Faculty.value.length<3){
facultyErr.textContent="Enter valid faculty"
facultyStatus=false
Faculty.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
facultyErr.textContent=""
facultyStatus=true
Faculty.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}

// validation for password
let Password=document.getElementsByName("password")[0]
let passwordErr=document.querySelector("#password-err")
let passwordpattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
if(Password.value===""){
    passwordErr.textContent="*Required"
    passwordStatus=false
    Password.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else if(!passwordpattern.test(Password.value)){
passwordErr.textContent="Must contains at least one lowercase,uppercase,digit,special character within [8-15]"
passwordStatus=false
Password.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else {
 passwordErr.textContent=""
 passwordStatus=true
 Password.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

}

// validation for confirm password
let confirmPassword=document.getElementsByName("confirm-password")[0]
let confirmpasswordErr=document.querySelector("#confirmpassword-err")
if(confirmPassword.value===""){
    confirmpasswordErr.textContent="*Required"
    confirmPasswordStatus=false
    confirmPassword.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"

}
else if(Password.value===!confirmPassword.value){
    confirmpasswordErr.textContent="confirm password must match with password"
    confirmPasswordStatus=false
    confirmPassword.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    confirmpasswordErr.textContent=""
    confirmPasswordStatus=true
    confirmPassword.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}
if(firstnameStatus==true && lastnameStatus==true && emailStatus==true && dobStatus==true && phoneStatus==true &&currentsemStatus==true && facultyStatus==true && passwordStatus==true && confirmPasswordStatus==true) {
    window.location.href="./signupgetsubmitted.html"
    firstName.value=""
    lastName.value=""
    Email.value=""
    dobStatus.value=""
    Gender.value=""
    Phone.value=""
    currentSem.value=""
    Faculty.value=""
    Password.value=""
    confirmPassword.value=""
}
else{
    Alert.textContent=`*Fill all fields with valid data`
}

})





