//selecting varialbe using Query Selector
const count=document.querySelector("#count");
const startbtn=document.querySelector("#start");
const stopbtn=document.querySelector("#stop");
const resumebtn=document.querySelector("#resume");
const resetbtn = document.querySelector("#reset");
//Counter variable =0
let number = 0;
//Timer variable =0
let timer = null;
//Function to start a counter
function startCounter() {
    // prevent multiple intervals
    if (timer != null) {
        return;
    }
    timer = setInterval(function () {
        number++;
        count.textContent = number;
    }, 1000);
}
    //function to stop the counter
    function stopCounter() {
        clearInterval(timer);
        timer = null;
}
// function for resume counter
function resumeCounter() {
    if (timer === null) {
        timer = setInterval(function () {
            number++;
            count.textContent = number;
        }, 1000);
        
    }
}
//function to reset Counter
function resetCounter() {
    clearInterval(timer);
    timer = null;
    number = 0;
    count.textContent = number;
}
    
    
    

startbtn.addEventListener("click", startCounter);
stopbtn.addEventListener("click", stopCounter);

resumebtn.addEventListener("click", resumeCounter);
resetbtn.addEventListener("click", resetCounter);

