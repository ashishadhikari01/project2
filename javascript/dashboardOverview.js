
let lau=document.querySelector(".hl")
lau.textContent="tero bauuuu"
let Overview=document.getElementById("overview")
let Status=document.getElementById("status")
let Logout=document.getElementById("logout")
let centerContainer=document.querySelector(".center-container")

centerContainer.innerHTML = "<h1>Welcome to Overview</h1>"
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