let loginBtn=document.querySelector(".login-btn")
let emailStatus,passwordStatus
loginBtn.addEventListener("click",function(event){
     event.preventDefault()
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

    let Password=document.getElementsByName("password")[0]
let passwordErr=document.querySelector("#password-err")
let passwordpattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
if(Password.value===""){
    passwordErr.textContent="*Required"
    passwordStatus=false
    Password.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else if(!passwordpattern.test(Password.value)){
passwordErr.textContent="Wrong password"
passwordStatus=false
Password.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else {
 passwordErr.textContent=""
 passwordStatus=true
 Password.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

}

if(emailStatus==true && passwordStatus==true){
    window.location.href="./dashboard.html"
}
else {
    alter("lauu")
}
})