let robot = document.querySelector(".largeContainer")
let body = document.querySelector("body")
let field = document.querySelector(".PlayField")
let rows = document.querySelector(".charMovement")
let playField = document.querySelector(".plays")
let game = document.querySelector(".game")
let points = document.querySelector(".points")
let leftArm = document.querySelector(".leftArm")
let rightArm = document.querySelector(".rightArm")
let previous = document.querySelector(".previousScore")
let face = document.querySelector(".head")
let eyes = document.querySelector(".eyes")
let eyes2= document.querySelector(".eyes2")
let plays = [];
let scores = []
let counter = 0;


//Give each arrow key a input direction/ + append div class for visual
document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
      if (plays.length < 8) {
        plays.push("⬅");
        let x = document.createElement('div')
        x.classList.add("left")
        x.innerText = "⬅"
        playField.appendChild(x)
      
      }
      leftArm.style = "animation: leftArmMoveDanceLeft 2s ease-in-out forwards infinite;"
      rightArm.style = "animation: rightArmMoveDanceLeft 2s ease-in-out forwards infinite;"
          break;

      case 39:
      if (plays.length < 8) {
        plays.push("➡");
        let x = document.createElement('div')
        x.classList.add("right")
        x.innerText = "➡"
        playField.appendChild(x)}
        leftArm.style = "animation: leftArmMoveDanceRight 2s ease-in-out forwards infinite;"
      rightArm.style = "animation: rightArmMoveDanceRight 2s ease-in-out forwards infinite;"

      break;
    
      case 38:
      if (plays.length < 8) {
        plays.push("⬆");
        let x = document.createElement('div')
        x.classList.add("up")
        x.innerText = "⬆"
        playField.appendChild(x)
      }
      leftArm.style = "animation: leftArmMoveDanceUp 2s ease-in-out forwards infinite;"
      rightArm.style =  "animation: rightArmMoveDanceUp 2s ease-in-out forwards infinite;"
      break;
      case 40:
      if (plays.length < 8) {
        plays.push("⬇");
        let x = document.createElement('div')
        x.classList.add("down")
        x.innerText = "⬇"
        playField.appendChild(x)
      }
      leftArm.style = "animation: leftArmMove 2s ease-in-out forwards infinite;"
      rightArm.style =  "animation: rightArmMove 2s ease-in-out forwards infinite;"
      break;
    
      case 32:
      // Have spacebar check for score and reset the player input. In addition recall the shuffle .
      compare();
      game.innerText = "";
      setTimeout(shuffle(choices), 1000);
      console.log(plays)
      plays = [];
      console.log(plays)
      for (let i = 0; i < 8; i++) {
        remove()
      }
         break;
  }
});

let timer = document.querySelector(".timer")
console.log(timer)
let time = 20
let timeCount = function () {
    setInterval(timeDrop, 1000)
}
let timeDrop = function () {
  time -= 1
}



//Store score of each play, then take the highets score with sort and taking the highest index
let bestScore = function () {
  scores.push(counter);
  scores.sort();
  previous.innerText = scores[scores.length - 1]
}
setInterval(bestScore(), 30000)

//Set function to grab score from previous play, then reset the score for the next game.
let startTimer = function () {
  timeCount()
  setInterval(bestScore, 30000)
  setInterval(function () { counter = 0 }, 30000)
  setInterval(function () { scores.shift();}, 30000)
}
startTimer()

// console.log(plays)


let choices = ["⬅", "➡", "⬆", "⬇","⬅", "➡", "⬆", "⬇"]
let remove = function () {
  playField.removeChild(playField.lastElementChild)
}

//Shuffle available choices and append visual div for upper display
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  for (let i = 0; i< array.length; i++) {
    // game.innerText += (array[i])
    let createGame = document.createElement("div")
    createGame.classList.add("gamePlays")
    createGame.innerText = array[i]
    game.appendChild(createGame)
  }
}

shuffle(choices); 


// Check if player input and computer generated input match. Log the scores + visual queue if correct or not.
let isEqaul = (arrOne, arrTwo) => {
  let equal = true; // Helps compare the entirety of the array.
  for (let i = 0; i < arrOne.length; i++) {
    if (!(arrOne[i] === arrTwo[i])) {
      equal = false;
    }
  }
  if (equal) {
    counter++ 
    points.innerText = `${counter}`
    eyes.style = "background: radial-gradient(hsl(145, 100%, 72%), hsl(145, 100%, 72%));"
    eyes2.style = "background: radial-gradient(hsl(145, 100%, 72%), hsl(145, 100%, 72%));"
    setTimeout(function () { eyes.style = "background: radial-gradient(#1f48fc, #4762f8);" }, 800)
    setTimeout(function () { eyes2.style = "background: radial-gradient(#1f48fc, #4762f8);" }, 800)

  } else {
    // counter--
    points.innerText = `${counter}`
    eyes.style = "background: radial-gradient(rgb(255, 61, 61),rgb(255, 61, 61));"
    eyes2.style = "background: radial-gradient(rgb(255, 61, 61),rgb(255, 61, 61));"
    setTimeout(function () { eyes.style = "background: radial-gradient(#1f48fc, #4762f8);" }, 800)
    setTimeout(function () { eyes2.style = "background: radial-gradient(#1f48fc, #4762f8);" }, 800)
  }
};

let compare = function () {
isEqaul(choices, plays)
    for (let i = 0; i < 8; i++) { 
      game.innerText = (choices[i] + " ");
    }
}




  
