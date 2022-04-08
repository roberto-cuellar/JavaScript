function roll(){
    var numPlayerOne = Math.floor(Math.random()*6)+1;
    var numPlayerTwo = Math.floor(Math.random()*6)+1;
    
    if(numPlayerOne>numPlayerTwo){
        document.querySelector("h1").innerHTML="Player One Wins";
        document.querySelector(".imgFlagPlayerOne").style.visibility = "hidden";
        document.querySelector(".imgFlagPlayerTwo").style.visibility = "visible";
    }else if(numPlayerTwo>numPlayerOne){
        document.querySelector("h1").innerHTML="Player Two Wins";
        document.querySelector(".imgFlagPlayerTwo").style.visibility = "hidden";
        document.querySelector(".imgFlagPlayerOne").style.visibility = "visible";
    }else{
        document.querySelector("h1").innerHTML="No body Wins";
        document.querySelector(".imgFlagPlayerOne").style.visibility = "hidden";
        document.querySelector(".imgFlagPlayerTwo").style.visibility = "hidden";
    }

////--------------Player One---------------
    if(numPlayerOne===1){
        document.querySelector(".imgResultPlayerOne").setAttribute("src","images/dice1.png");
    }

    if(numPlayerOne===2){
        document.querySelector(".imgResultPlayerOne").setAttribute("src","images/dice2.png");
    }

    if(numPlayerOne===3){
        document.querySelector(".imgResultPlayerOne").setAttribute("src","images/dice3.png");
    }

    if(numPlayerOne===4){
        document.querySelector(".imgResultPlayerOne").setAttribute("src","images/dice4.png");
    }

    if(numPlayerOne===5){
        document.querySelector(".imgResultPlayerOne").setAttribute("src","images/dice5.png");
    }

    if(numPlayerOne===6){
        document.querySelector(".imgResultPlayerOne").setAttribute("src","images/dice6.png");
    }


////--------------Player Two---------------
if(numPlayerTwo===1){
    document.querySelector(".imgResultPlayerTwo").setAttribute("src","images/dice1.png");
}

if(numPlayerTwo===2){
    document.querySelector(".imgResultPlayerTwo").setAttribute("src","images/dice2.png");
}

if(numPlayerTwo===3){
    document.querySelector(".imgResultPlayerTwo").setAttribute("src","images/dice3.png");
}

if(numPlayerTwo===4){
    document.querySelector(".imgResultPlayerTwo").setAttribute("src","images/dice4.png");
}

if(numPlayerTwo===5){
    document.querySelector(".imgResultPlayerTwo").setAttribute("src","images/dice5.png");
}

if(numPlayerTwo===6){
    document.querySelector(".imgResultPlayerTwo").setAttribute("src","images/dice6.png");
}


}
