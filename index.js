for(i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {

        var buttonInnerHTML = this.innerHTML;
switch(buttonInnerHTML){
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        return tom1.play();
        break;    
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        return tom2.play();
        break;    
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        return tom3.play();
        break;    
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        return tom4.play();
        break;    
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        return snare.play();
        break;    
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        return crash.play();
        break;    
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        return kick.play();
        break;
    
    default:console.log(buttonInnerHTML)    

}


    })
}

