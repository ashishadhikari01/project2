let MessageEl=document.querySelector(".message")

let messageList=["Hello there!","Namaste!","Hi there!","Greetings!","Hey! Welcome aboard", "Good to see you"]
let randomgenerate=Math.floor(Math.random()*7)
// let time=9
let date=new Date()
let time=date.getHours()
if(time<12 || time===24){
    messageList.push("Good morning!")
}
else if(time>=12){
    messageList.push("Good afternoon!")
}
console.log(messageList)

MessageEl.textContent=messageList[randomgenerate]

console.log(messageList[randomgenerate])


