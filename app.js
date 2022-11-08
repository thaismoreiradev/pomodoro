// variables
let workTitle = document.querySelector("#work");
let breakTitle = document.querySelector("#break");
let activeTitle = ("font-weight: bolder")
let inactiveTitle = ("font-weight: normal")

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
    timer = setInterval(timerFunction, 5);
}


const restartingTime = () => {       

        if(working === false){
            
            // restarting break for 5 minutes
            minutes = 4;
            seconds = 59;
            document.getElementById("minutes").innerHTML = "5";
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


// countdown
    let timerFunction = () => {
        // starting with work 25 minutes
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;    

        // starting here
        seconds = seconds - 1;
        
        // when every work minute is over
        if(seconds === 0){
            minutes = minutes - 1;
            seconds = 59;

            // when all minutes ends
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