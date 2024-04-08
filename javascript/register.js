let registerAs=document.getElementsByName("register-as")[0]
let coreQns1=document.querySelector(".core-qns1")
let coreQns2=document.querySelector(".core-qns2")
let coreQns3=document.querySelector(".core-qns3")
let coreQns4=document.querySelector(".core-qns4")
let coreQns5=document.querySelector(".core-qns5")
let coreQns6=document.querySelector(".core-qns6")
let coreQns7=document.querySelector(".core-qns7")
// let generalBeenPartOfAnyClub= " "
let Alert=document.querySelector(".alert")
let listAddBtn=document.querySelector(".list-addbtn")

// let fieldFirstname=document.getElementsByName("field-firstname")
// if(fieldFirstname=" "){
//     // Alert.textContent="enter your orginal name!"
// }



let coreQns1Ans=document.querySelector(".core-qns1Ans")
let coreQns2Ans=document.querySelector(".core-qns2Ans")
let coreQns3Ans=document.querySelector(".core-qns3Ans")
let coreQns4Ans=document.querySelector(".core-qns4Ans")
let coreQns5Ans=document.querySelector(".core-qns5Ans")
let coreQns6Ans=document.querySelector(".core-qns6Ans")
let coreQns7Ans=document.querySelector(".core-qns7Ans")


registerAs.addEventListener("click", function(){
    if(registerAs.value==="General Member") {
        coreQns1.innerText="what skills do you have?"
        coreQns1Ans.innerHTML=`<input type="text" name="general-skill">`

        // let general_skill =document.createElement("input")
        // general_skill.setAttribute("type","text")
        // general_skill.setAttribute("name","general-skill")
        // coreQns1Ans.append(general_skill)

        coreQns2.textContent="Why do you want to be part of us?"
        coreQns2Ans.innerHTML=`<input type="text" name="general-why-to-be-part">`

        coreQns3.textContent="How would you contribute to our society, if you get selected?"
        coreQns3Ans.innerHTML=`<input type="text" name="general-how-would-contribute">`

        coreQns4.textContent="Have you been part of any IT club/society?"
        coreQns4Ans.innerHTML=`<select name="general-been-part-of-anyclub" class="general-been-part-of-anyclub">
        <option value="select">select</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
        </select>`
        
    //  setTimeout(function(){
     let generalBeenPartOfAnyClub=document.querySelector(".general-been-part-of-anyclub")
     generalBeenPartOfAnyClub.addEventListener("click", function(){
        if(generalBeenPartOfAnyClub.value==="yes") {
            coreQns5.textContent="Whats the club/society you been part of?"
            coreQns5Ans.innerHTML=`<input type="text" name="general-been-part-of-any-club-ans">`
            coreQns6.textContent="How do you know about us?"
            coreQns6Ans.innerHTML=`<input type="text" name="general-how-know-about-us">`
        }
        else{
            coreQns5.textContent=""
            coreQns5Ans.innerHTML=""
            coreQns6.textContent="How do you know about us?"
            coreQns6Ans.innerHTML=`<input type="text" name="general-how-know-about-us">`

        }
    coreQns7.textContent="What could be the one strongest reason we should select you?"
    coreQns7Ans.innerHTML=`<input type="text" name="general-reason-of-select">`
    listAddBtn.style.display="none"
     })

     }
     else if(registerAs.value==="leading-member"){
         coreQns1.textContent="Have you previously served as General member?"

        //  let leading_previous_status=document.createElement("select")
        //  leading_previous_status.setAttribute("type","text")
        //  leading_previous_status.setAttribute("name","general-skill")
        //  coreQns1Ans.appendChild(general_skill)

        coreQns1Ans.innerHTML=`<select name="leading-previous-status-ans" class="leading-previous-status-ans">
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select>`
    let leadingPreviousStatusAns= document.querySelector(".leading-previous-status-ans")
    leadingPreviousStatusAns.addEventListener("click", function(){
        if(leadingPreviousStatusAns.value==="no"){
            coreQns2.textContent="How do you know about us?"
            coreQns2Ans.innerHTML=`<input type="text" name="leading-how-do-you-know-us">`
            
        }
        else {
            coreQns2.textContent="How many physical events did you participate?"
            coreQns2Ans.innerHTML= `<select name="leading-participate-event">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="more-than-5">more than 5</option>`
        }
    })
       

        coreQns3.textContent="Why do want to be a leading member?"
        coreQns3Ans.innerHTML= `<input type="text" name="leading-reason-to-be-leadingmember">`

        coreQns4.textContent="what skills do you have?"
        coreQns4Ans.innerHTML=`<input type="text" name="leading-what-changes-made">`

        coreQns5.textContent="what could be the three things you learned from participating any events?"
        coreQns5Ans.innerHTML=`<input type="text" class="leading-input-threethings">`

        let leadingInputThreeThings=document.querySelector(".leading-input-threethings")
        let ulQns5Ans=document.querySelector(".ul-qns5Ans")
         listAddBtn=document.querySelector(".list-addbtn")

        let counter=0
        listAddBtn.addEventListener("click", function(){
           if(counter<3){
            let valuestore=leadingInputThreeThings.value
            //  ulQns5Ans.innerHTML+=`<li>${leadingInputThreeThings.value}</li>`
            let li=document.createElement("li")
            li.textContent=valuestore
            ulQns5Ans.appendChild(li)
             leadingInputThreeThings.value= " "
             leadingInputThreeThings.focus()
             counter++
             if(counter===3){
                listAddBtn.disabled=true
             }
             setTimeout(function() {
                leadingInputThreeThings.focus(); // Focus the input field after the DOM is updated
            }, 10)
             
        }
        })
        coreQns6.textContent="As a leader, how do you handle conflicts or disagreements within your team?"
        coreQns6Ans.innerHTML=`<input type="text" name="leading-what-should-we-expect">`

        coreQns7.textContent="What could be the one strongest reason we should select you?"
        coreQns7Ans.innerHTML=`<input type="text" name="leading-reason-for-select">`
     }
    })
// form validation starts form here

let createBtn=document.querySelector(".createNow-btn")
let firstnameStatus,lastnameStatus,emailStatus,dobStatus,genderStatus,phoneStatus,currentsemStatus,facultyStatus,registerStatus
// for general member
let skillStatus,partStatus,contributeStatus,havebeenpartofitclubStatus,itclubnameStatus,howknowusStatus,reasonforselectionStatus,passwordStatus,confirmPasswordStatus

// common are:  howknowusStatus,skillStatus,reasonforselectionStatus,passwordStatus,confirmPasswordStatus

// for leading member
let previouslyservedStatus,eventparticipateStatus,reasonforleadingmemberStatus,threethingslearnedStatus,conflicthandleStatus


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
     firstnameErr.textContent="Enter valid name"
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
    else if(lastName.value.length<4 ||lastnamepattern.test(lastName)) {
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
    /*
    DATE OF BIRTH VALIDATION PARTSSSSSS
    
    */

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


// validation for Register as:
let registerAs=document.getElementsByName("register-as")[0]
let registerErr=document.querySelector("#register-err")
if(registerAs.value==="select"){
    registerErr.textContent="*Required"
    registerStatus=false
    registerAs.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    registerErr.textContent=""
    registerStatus=true
    registerAs.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}

// general member starts form here
//  what skills do you have?
let generalSkill=document.getElementsByName("general-skill")[0]
let coreqns1Err=document.querySelector("#coreqns1-err")  
if(generalSkill && generalSkill.value===""){
    coreqns1Err.textContent="*Required"
    skillStatus=false
    generalSkill.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    coreqns1Err.textContent=""
    skillStatus=true
    generalSkill.style.boxShadow = "0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)";

}


// why do you want to be the part of us?
let generalWhyToBePart=document.getElementsByName("general-why-to-be-part")[0]
let coreqns2Err=document.querySelector("#coreqns2-err")
if(generalWhyToBePart.value===""){
    coreqns2Err.textContent="*Required"
    partStatus=false
    generalWhyToBePart.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    coreqns2Err.textContent=""
    partStatus=true
    generalWhyToBePart.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

}

// How would you contribute to our society, if you get selected?
let generalHowWouldContribute=document.getElementsByName("general-how-would-contribute")[0]
let coreqns3Err=document.querySelector("#coreqns3-err")
if(generalHowWouldContribute.value===""){
    coreqns3Err.textContent="*Required"
    contributeStatus=false
    generalHowWouldContribute.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    coreqns3Err.textContent=""
    contributeStatus=true
    generalHowWouldContribute.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}


// Have you been part of any IT club/society?
 let generalBeenPartOfAnyClub=document.getElementsByName("general-been-part-of-anyclub")[0]
 let coreqns4Err=document.querySelector("#coreqns4-err")
 if(generalBeenPartOfAnyClub.value==="select"){
    coreqns4Err.textContent="*Required"
    havebeenpartofitclubStatus=false
    generalBeenPartOfAnyClub.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"

 }      
//  else{
//     coreqns4Err.textContent=""
//     havebeenpartofitclubStatus=true
//     generalBeenPartOfAnyClub.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
//  } 

else if(generalBeenPartOfAnyClub.value==="yes") {
// Whats the club/society you been part of?
    coreqns4Err.textContent=""
    havebeenpartofitclubStatus=true
    generalBeenPartOfAnyClub.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

 let generalBeenPartOfAnyClubAns=document.getElementsByName("general-been-part-of-any-club-ans")[0]
 let coreqns5Err=document.querySelector("#coreqns5-err")
 if(generalBeenPartOfAnyClubAns.value===""){
coreqns5Err.textContent="*Required"
itclubnameStatus=false
generalBeenPartOfAnyClubAns.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    coreqns5Err.textContent=""
    itclubnameStatus=true
    generalBeenPartOfAnyClubAns.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}

// How do you know about us?
 let generalHowKnowAboutUs=document.getElementsByName("general-how-know-about-us")[0]
 let coreqns6Err=document.querySelector("#coreqns6-err")
 if(generalHowKnowAboutUs.value===""){
    coreqns6Err.textContent="*Required"
    howknowusStatus=false
    generalHowKnowAboutUs.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else {
    coreqns6Err.textContent=""
    howknowusStatus=true
    generalHowKnowAboutUs.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}
}
else if(generalBeenPartOfAnyClub.value==="no") {
    coreqns4Err.textContent=""
    havebeenpartofitclubStatus=true
    generalBeenPartOfAnyClub.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

    let  generalBeenPartOfAnyClubAns=""
    let coreqns5Err=""

    let generalHowKnowAboutUs=document.getElementsByName("general-how-know-about-us")[0]
    let coreqns6Err=document.querySelector("#coreqns6-err")
    if(generalHowKnowAboutUs.value===""){
       coreqns6Err.textContent="*Required"
       howknowusStatus=false
       generalHowKnowAboutUs.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
   }
   else {
       coreqns6Err.textContent=""
       howknowusStatus=true
       generalHowKnowAboutUs.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
   }
}

// What could be the one strongest reason we should select you?
let generalReasonOfSelect=document.getElementsByName("general-reason-of-select")[0]
let coreqns7Err=document.querySelector("#coreqns7-err")
if(generalReasonOfSelect.value===""){
    coreqns7Err.textContent="*Required"
    reasonforselectionStatus=false
    generalReasonOfSelect.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    coreqns7Err.textContent=""
    reasonforselectionStatus=true
    generalReasonOfSelect.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"

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
else if(!Password.value===confirmPassword.value){
    confirmpasswordErr.textContent="confirm password must match with password"
    confirmPasswordStatus=false
    confirmPassword.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
}
else{
    confirmpasswordErr.textContent=""
    confirmPasswordStatus=true
    confirmPassword.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
}
if(firstnameStatus==true && lastnameStatus==true && emailStatus==true && phoneStatus==true &&currentsemStatus==true && facultyStatus==true && registerStatus==true && skillStatus==true && partStatus==true && contributeStatus==true && havebeenpartofitclubStatus==true && itclubnameStatus==true && howknowusStatus==true && reasonforselectionStatus==true && passwordStatus==true && confirmPasswordStatus==true) {
    console.log("all validation passed")
    window.location.href="./signupgetsubmitted.html"
}
else {
    alert("enter all valid data")
}
})





