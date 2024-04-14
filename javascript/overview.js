// toggle button aside of 'personal information'
   // Your code here
   let expandBtn=document.querySelector(".expand-btn")
   let expandedContainer=document.querySelector(".expanded-container")
expandBtn.addEventListener("click", function(){
   expandedContainer.classList.toggle("expand")
   let a=5;
   let b=6;
   console.log(a+b)
})


// // js for profile picture
let inputFile=document.querySelector("#input-file")
let defaultPic=document.querySelector("#default-pic")
// inputFile.addEventListener("onchange", function(){
//     defaultPic.src=URL.createObjectURL(inputFile.files[0])
// })
inputFile.addEventListener("change", function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const fileSizeMB = file.size / (1024 * 1024); // Calculate file size in MB
    if (fileSizeMB > 2) {
    alert("Please select an image file with size less than 2MB.");
    inputFile.value = ''; // Clear the input value
    }
    else {
      const reader = new FileReader();            // Create a FileReader object
      reader.onload = function(e) {               // Set a callback function to run when the file is read
        defaultPic.src = e.target.result;         // Update the src attribute of the defaultPic image
      }
      reader.readAsDataURL(file);                 // Read the selected file as a Data URL
    }
}
  })

  // js for register-as
let registerAsExpandButton=document.querySelector(".registeras-expand-btn")
let registerAsExpand=document.querySelector(".register-as-expand")
registerAsExpandButton.addEventListener("click", function(){
   registerAsExpand.classList.toggle("expand-one")
})

// fetching part
let applyBtn=document.querySelectorAll(".apply-btn a")
applyBtn.forEach((link)=>{
link.addEventListener("click", function(event){
  event.preventDefault()
  const page=this.getAttribute("href")
  loadPage(page)
let applyBtn=document.querySelector(".apply-btn")
let registerAsExpand=document.querySelector(".register-as-expand")
applyBtn.addEventListener("click", function(){
   registerAsExpand.classList.toggle("expand-one")
})
})
})
function loadPage(page){
  fetch(page)
  .then((response)=>{
if(!response.ok){
  throw new Error("network response is not ok")
}
return response.text()
  })
  .then((data)=>{
document.querySelector(".form-expand").innerHTML=data
  })
  .catch((erro)=>{
console.log("error on fetching the page")
  })
}

// const sidebarLinks = document.querySelectorAll('.apply-btn a');
// // Iterate through each sidebar link
// sidebarLinks.forEach(link => {
//     // Add click event listener to each link
//     link.addEventListener('click', function(event) {
//         // Prevent the default behavior of the link (navigation)
//         event.preventDefault()
        
//         // Get the href attribute of the clicked link
//         const page = this.getAttribute('href');

//         // Call the function to load the page content into center-container
//         loadPage(page)
//     })
// })

// function loadPage(page) {
//     // Fetch the content of the page
//     fetch(page)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             // Update the content of center-container with the fetched data
//             document.querySelector('.form-expand').innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error fetching the page:', error);
//         });
// }
