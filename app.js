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

let workingMinutes = true;

let minutes = 24;
let seconds = 59;


// display
window.onload = () => {
    // document.getElementById("minutes").innerHTML = minutes;
    // document.getElementById("seconds").innerHTML = seconds;
    workTitle.style = activeTitle;
}



const restartingTime = () => {
    document.getElementById("restart").addEventListener("click", function(){
        console.log("sei nãoooo")

        if(working === true){
            minutes = 27;

            
        }else{
            minutes = 4;
        }

    })
};












// countdown

    let timerFunction = () => {
        // starting with work 25 minutes
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;    

        console.log(seconds)

        // starting here
        workingMinutes = true;
        seconds = seconds - 1;
        
        // when every work minute is over
        if(seconds === 0){
            
            minutes = minutes - 1;
            seconds = 59;

            // when the 25 minutes ends
            if(minutes === -1){
                working = !working

                if(working === false){
                    workingMinutes = false
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

    restartingTime();
}






//     let timerFunction = () => {
//         // starting with work 25 minutes
//         document.getElementById("minutes").innerHTML = workMinutes;
//         document.getElementById("seconds").innerHTML = seconds;    

//         console.log(seconds)

//         // starting here
        
//         seconds = seconds - 1;
        
//         // when every work minute is over
//         if(seconds === 0){
            
//             workMinutes = workMinutes - 1;
//             seconds = 59;

//             // when the 25 minutes ends
//             if(workMinutes === -1){
//                 working = false

//                 if(working === false){
//                     // changing the word in focus
//                     workTitle.style = inactiveTitle;
//                     breakTitle.style = activeTitle;
//                     // starting break for 5 minutes
//                     workMinutes = breakMinutes;


//                     if(breakMinutes === -1){
//                     working = true
//                     // changing the word in focus
//                     workTitle.style = activeTitle;
//                     breakTitle.style = inactiveTitle;
//                     // starting work for 25 minutes
//                     breakMinutes = workMinutes;
//                 }
//             } 
//         }
//     }
// }














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
        timer = setInterval(timerFunction, 5); 
    }else{

        playing = false;
        // changing buttons play and pause
        document.getElementById("play-pause").classList.add("fa-play");
        document.getElementById("play-pause").classList.remove("fa-pause");

        clearInterval(timer);
    }


}