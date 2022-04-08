function roll(){
    var numPlayerOne = Math.floor(Math.random()*6)+1;
    var numPlayerTwo = Math.floor(Math.random()*6)+1;
    var dirImgOne = "images/dice"+numPlayerOne+".png";
    var dirImgTwo = "images/dice"+numPlayerTwo+".png";

    document.querySelector(".imgResultPlayerOne").setAttribute("src",dirImgOne);
    document.querySelector(".imgResultPlayerTwo").setAttribute("src",dirImgTwo);

    
    if(numPlayerOne>numPlayerTwo){
        document.querySelector("h1").innerHTML="🏁Player One Wins";
    }else if(numPlayerTwo>numPlayerOne){
        document.querySelector("h1").innerHTML="Player Two Wins🏁";
    }else{
        document.querySelector("h1").innerHTML="No body Wins";
    }

}
