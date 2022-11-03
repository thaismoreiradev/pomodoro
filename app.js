// variables

let workTitle = document.querySelector("#work");
let breakTitle = document.querySelector("#break");
let activeTitle = ("font-weight: bolder")
let inactiveTitle = ("font-weight: normal")

let playing = false;

let working = true;


let timer;


let minutes = 24;
let seconds = 59;

let workMinutes;
let breakMinutes;

// display
window.onload = () => {
    // document.getElementById("minutes").innerHTML = minutes;
    // document.getElementById("seconds").innerHTML = seconds;
    workTitle.style = activeTitle;
}




// countdown
    let timerFunction = () => {
        // starting with work 25 minutes
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;    

        console.log(seconds)

        // starting here
        
        seconds = seconds - 1;
        
        // when every work minute is over
        if(seconds === 0){
            
            minutes = minutes - 1;
            seconds = 59;

            // when the 25 minutes ends
            if(minutes === -1){
                working = !working

                if(working === false){
                    // changing the word in focus
                    workTitle.style = inactiveTitle;
                    breakTitle.style = activeTitle;
                    // starting break for 5 minutes
                    minutes = 4;

                }else{
                    // changing the word in focus
                    workTitle.style = activeTitle;
                    breakTitle.style = inactiveTitle;
                    // starting break for 5 minutes
                    minutes = 24;
                }

            }
        }
    }


// starting timer
const startingTimer = () => {
    
    if(playing === false){
        playing = true;
        // changing buttons play and pause
        document.getElementById("play-pause").classList.remove("fa-play");
        document.getElementById("play-pause").classList.add("fa-pause");

        // seconds = 59;
        // minutes = minutes -1

        // starting countdown 1 sec
        timer = setInterval(timerFunction, 10); 
    }else{

        playing = false;
        // changing buttons play and pause
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");

        clearInterval(timer);
    }


}