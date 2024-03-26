let registerAs=document.querySelector(".register-as")
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

        coreQns2.textContent="Why do you want to be part of us?"
        coreQns2Ans.innerHTML=`<input type="text" name="general-why-to-be-part">`

        coreQns3.textContent="How would you contribute to our society, if you get selected?"
        coreQns3Ans.innerHTML=`<input type="text" name="general-how-would-contribute">`

        coreQns4.textContent="Have you been part of any IT club/society?"
        coreQns4Ans.innerHTML=`<select name="general-been-part-of-anyclub" class="general-been-part-of-anyclub">
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

