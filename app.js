// variables
let workTitle = document.querySelector("#work");
let breakTitle = document.querySelector("#break");
let activeTitle = ("font-weight: bolder");
let inactiveTitle = ("font-weight: normal");
const playPauseButton = document.querySelector("#play-pause-btn");
const restartButton = document.querySelector("#restart")

// for change the icon between play and pause
let playing = false;

// for change the session between work and break
let working = true;

let timer;

let minutes = 24;
let seconds = 59;

// initial display
window.onload = () => {
    workTitle.style = activeTitle;
}

const pauseTimer = () => {
        playing = false;
        // changing buttons play and pause
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");
        // for temporaly pause
        clearInterval(timer);
}

const playTimer = () => {
    playing = true;
    // changing buttons play and pause
    document.getElementById("play-pause").classList.remove("fa-play");
    document.getElementById("play-pause").classList.add("fa-pause");
    // the principal rule
    timer = setInterval(timerFunction, 1000);
}

const restartingTime = () => {
        if(working === false){
            // restarting break for 5 minutes
            minutes = 4;
            seconds = 59;
            document.getElementById("minutes").innerHTML = "05";
            document.getElementById("seconds").innerHTML = "00"; 
        }else{
            // restarting work for 25 minutes
            minutes = 24;
            seconds = 59;
            document.getElementById("minutes").innerHTML = "25";
            document.getElementById("seconds").innerHTML = "00";   
        }
        // for pause the countdown after restart
        pauseTimer();      
};


// to play the alarm when every cycle is finish
const playAlarm = () => {
    document.getElementById("alarm").play();
    pauseTimer();

    // to block the click while its ringing
    playPauseButton.removeEventListener("click", startingTimer)
    restartButton.removeEventListener("click", restartingTime)

    // to play again 
    setTimeout(playTimer, 4000);
    setTimeout(addEventsButtons, 4000);    
}


// countdown
    let timerFunction = () => {
        // starting with work 25 minutes
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;    

        // starting here
        seconds = seconds - 1;
        
        // display adjust
        if(seconds <= 9){
            document.getElementById("seconds").innerHTML = `0${seconds}`;
        }
        if(minutes <= 9){
            document.getElementById("minutes").innerHTML = `0${minutes}`
        }

        // when every work minute is over
        if(seconds === 0){
            minutes = minutes - 1;
            seconds = 59;

            // when all minutes ends
            if(minutes === -1){
                working = !working
                playAlarm();

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
                    // starting work for 25 minutes
                    minutes = 24;
            }
        }
    }   
}


// starting timer
// code used on icons for play and pause by onclick
const startingTimer = () => {
    
    if(playing === false){
        playTimer(); 
    }else {
        pauseTimer();
    }
}


const addEventsButtons = () => {
    playPauseButton.addEventListener("click", startingTimer);
    restartButton.addEventListener("click", restartingTime);
}

addEventsButtons();