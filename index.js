console.log("jai shree Ram!!");
// let noOfButtons =  document.querySelectorAll("button").length;
// for (let i = 0; i < noOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("keydown" , ()=>{
        
//     });
// } 
// document.querySelector("h3").innerHTML = " please press the specified key🙄";

function buttonAnimation(currentKey){
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    setTimeout(() => {
       document.querySelector("." + currentKey).classList.remove("pressed")
    }, 100);
}


    document.addEventListener("keydown" , (event)=> {
    console.log("you pressed me! " + event.key);
    // document.querySelector
        let keypressed = event.key;
        buttonAnimation(keypressed);
        switch (keypressed) {
            case"a":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "s":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "d":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "f":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                let sanre = new Audio('sounds/snare.mp3');
                sanre.play();
                break;
            case "k":
                let kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;
            case "l":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            default:
                document.body.querySelector("h3").innerHTML= "please press the specified keys🙄";
                console.log("rana");
                break;
            }    
        })      

//LEARNINGS ---
// DOCUMENT.ADDEVENTLISTENER TO THE ENTIRE DOC FOR KEYBOARD EVENTS 
//A FUNCTION OF PLAYSOUND(KEY) CONTAINS ALL SWITCH STATEMENTS 
//IF KEYPRESSED THE KEY = EVENT.KEY
//IF CLICKED THEN KEY = THIS .INNERHTML
//CREATE A ANIMATION FUNTION WHICH WORKS IN BOTH THE EVENT LISTNERS 
//EXTERNAL METHOD OF ADDING EVENT LISTNER IS 