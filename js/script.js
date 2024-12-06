const changeBtn = document.getElementById("btn");
const lightOff = document.getElementById("lightoff");
const lightOn = document.getElementById("lighton");


changeBtn.addEventListener("click", function() {
   
    if (lightOff.classList.contains("lampadina") && lightOff.style.display != "none") {
       
        lightOff.style.display = "none";  
        lightOn.style.display = "block";  
        changeBtn.textContent = "Spegni";  
    } else {
        lightOff.style.display = "block";  
        lightOn.style.display = "none";   
        changeBtn.textContent = "Accendi"; 
    }
});