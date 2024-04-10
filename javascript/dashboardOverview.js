
// let lau=document.querySelector(".hl")
// lau.textContent="tero bauuuu"
let Overview=document.getElementById("Overview")
let Status=document.getElementById("status")
let Logout=document.getElementById("logout")
let centerContainer=document.querySelector(".center-container")

// window.onload=Overview
Overview.addEventListener("click",function(){
    centerContainer.innerHTML=`
  <div class="personal-info">
  <div class="personal-info-wrapper">
  <h1>Personal Information</h1>
  <button class="expand-btn"><img src="./images/icons8-chevron-24.png"alt="chevro-img"></button>
  </div>
  </div>
  <div class="expanded-area"></div>

  <div class="profile-picture">
  <div class="profile-picture-wrapper">
  <h1>Add Profile Picture</h1>
  <label for="input-file"><img src="./images/icons8-plus-50.png" alt="plus-img"></label>
  <input type="file" accept="image/jpeg, image/png , image/jpg" id="input-file">
  </div>
  </div>
    
    `

    let expandBtn=document.querySelector(".expand-btn")
    let expandedArea=document.querySelector(".expanded-area")
    expandBtn.addEventListener("click", function(){
       expandedArea.classList.toggle("expanded")
    })

    // js for profile-picture
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
    expandedArea.innerHTML=`
    <div class="expanded-container">
        
    <div class="expandedarea-items">
    <div class="expandedarea-items-item">
    <div><h1>Name</h1></div>
    <div><h1 class="date-fetch">..............</h1></div>
    </div>
    </div>

    <div class="expandedarea-items">
    <div class="expandedarea-items-item">
    <div><h1>Email</h1></div>
    <div><h1 class="data-fetch">..........</h1></div>
    </div>
    </div>

    <div class="expandedarea-items">
    <div class="expandedarea-items-item">
    <div><h1>Date of birth</h1></div>
    <div><h1 class="data-fetch">..........</h1></div>
    </div>
    </div>

    <div class="expandedarea-items">
    <div class="expandedarea-items-item">
    <div><h1>Gender</h1></div>
    <div><h1 class="data-fetch">..........</h1></div>
    </div>
    </div>

    <div class="expandedarea-items">
    <div class="expandedarea-items-item">
    <div><h1>Phone</h1></div>
    <div><h1 class="data-fetch">..........</h1></div>
    </div>
    </div>

    <div class="expandedarea-items">
    <div class="expandedarea-items-item">
    <div><h1>Faculty</h1></div>
    <div><h1 class="data-fetch">..........</h1></div>
    </div>
    </div>

    </div>
    `

})


Status.addEventListener("click",function(){
    centerContainer.innerHTML=`
    <div class="outline"><h1 class="current-status">Your status:</h1>

    <div class="table-container">
    <table>
    <tr>
    <th>Applicant Email</th>
    <th>Faculty</th>
    <th>Position</th>
    <th>Status</th>
    </tr>
    <tr>
    <td>...</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>...</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>...</td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>
    </div>
    </div>
    
    
    
    `
})
Logout.addEventListener("click",function(){
    centerContainer.innerHTML=`
    <div class="logout-container">
    <div><h1>Are you sure want to logout?</h1></div>
    <div class="exit-btn-wrapper">
    <button type="button" name="yes" class="exit-btn yes">Yes</button>
    <button type="button" name="no" class="exit-btn no">No</button>
    </div>
    </div>
    
    
    `
})