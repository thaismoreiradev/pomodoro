// variables

let workTitle = document.querySelector("#work");
let breakTitle = document.querySelector("#break");
let activeTitle = ("font-weight: bolder")
let inactiveTitle = ("font-weight: normal")

let workTime = 1;
let breakTime = 2;
let seconds = "00";

// display
window.onload = () => {
    document.getElementById("minutes").innerHTML = workTime;
    document.getElementById("seconds").innerHTML = seconds;
    workTitle.style = activeTitle;
}

// starting timer
const startingTimer = () => {

    // changing buttons play and pause
    document.getElementById("play-pause").classList.remove("fa-play");
    document.getElementById("play-pause").classList.add("fa-pause");

    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    breakCount = 0;

    // countdown
    let timerFunction = () => {
        // starting with work 25 minutes
        document.getElementById("minutes").innerHTML = workMinutes;
        document.getElementById("seconds").innerHTML = seconds;    

        // starting here
        seconds = seconds - 1;
        
        // when every work minute is over
        if(seconds === 0){
            
            workMinutes = workMinutes - 1;
            seconds = 59;

            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    // starting break for 5 minutes
                    workMinutes = breakMinutes;
                    breakCount++

                    // changing the word in focus
                    workTitle.style = inactiveTitle;
                    breakTitle.style = activeTitle;
                }else{
                    // back to workingtime 25 minutes
                    workMinutes = workTime;
                    breakCount++

                    // changing the word in focus
                    breakTitle.style.inactiveTitle;
                    workTitle.style.activeTitle;                }

            }



            
        }

    }


    // starting countdown 1 sec
    setInterval(timerFunction, 1000); 
}