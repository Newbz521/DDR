let robot = document.querySelector(".largeContainer")
let moveLeft = 1;
let moveTop = 7;
let body = document.querySelector("body")
let field = document.querySelector(".PlayField")
let rows = document.querySelector(".charMovement")
let playField = document.querySelector(".plays")
let game = document.querySelector(".game")
let plays = [];
let points = document.querySelector(".points")
let leftArm = document.querySelector(".leftArm")
let rightArm = document.querySelector(".rightArm")
let previous = document.querySelector(".previousScore")
let face = document.querySelector(".head")
console.log(leftArm)
// let gamePlays = [];

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
      // console.log('left');
      if (plays.length < 4) {
        plays.push("⬅");
        let x = document.createElement('div')
        x.classList.add("left")
        x.innerText = "⬅"
        playField.appendChild(x)
      
      }
      // moveLeft -= 1;
      leftArm.style = "animation: leftArmMoveDanceLeft 2s ease-in-out forwards infinite;"
      rightArm.style = "animation: rightArmMoveDanceLeft 2s ease-in-out forwards infinite;"
      // face.style = "background-image: url(/putin1.png);"
      // face.style = "background-size: cover;"
          break;

      case 39:
      // console.log('right');
      if (plays.length < 4) {
        plays.push("➡");
        let x = document.createElement('div')
        x.classList.add("right")
        x.innerText = "➡"
        playField.appendChild(x)}
        leftArm.style = "animation: leftArmMoveDanceRight 2s ease-in-out forwards infinite;"
      rightArm.style = "animation: rightArmMoveDanceRight 2s ease-in-out forwards infinite;"
      // face.style = "background-image: url(/putin2.png);"
      // face.style = "background-size: 100%;"
      break;
    
      case 38:
      // console.log('up');
      if (plays.length < 4) {
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
      // console.log('down');
      if (plays.length < 4) {
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
        // console.log('down');
     
      compare();
      game.innerText = "";
      setTimeout(shuffle(choices), 1000);
      console.log(plays)
      plays = [];
      console.log(plays)
      for (let i = 0; i < 4; i++) {
        remove()
        // checkScore()
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

let startTimer = function () {
  timeCount()
  // setInterval(function () { timer.style = "animation: shrink 20s;" }, 20000 )
  setInterval(function () { previous.innerText = counter }, 20000)
  setInterval(function(){counter = 0}, 20000)
}

startTimer()



console.log(plays)

let choices = ["⬅", "➡", "⬆", "⬇"]

let remove = function () {
  playField.removeChild(playField.lastElementChild)
  // game.removeChild(game.lastElementChild)
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  // return array;
  for (let i = 0; i< array.length; i++) {
    game.innerText += (array[i])
  }
}

shuffle(choices); 

let counter = 0;

let isEqaul = (arrOne, arrTwo) => {
  let equal = true;
  for (let i = 0; i < arrOne.length; i++) {
    if (!(arrOne[i] === arrTwo[i])) {
      //do stuff
      equal = false;
    }
  }

  if (equal) {
    // console.log("plus one point");
    counter++ 
    points.innerText = `${counter}`
    console.log(counter)
  } else {
    // console.log("minus one point");
    counter--
    points.innerText = `${counter}`
  }
};



let compare = function () {
console.log(isEqaul(choices, plays))
    for (let i = 0; i < 8; i++) {
      game.innerText += (choices[i] + " ");
    }
  console.log(choices)
}




  
