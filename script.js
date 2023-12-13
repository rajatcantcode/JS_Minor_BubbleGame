var gamebtm = document.querySelector("#game-bottom");

function createBubble() {
  var clutter = "";
  for (var i = 0; i <= 104; i++) {
    var nbr = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${nbr}</div>`;
  }
  gamebtm.innerHTML = clutter;
}
createBubble();

var timerbox = document.querySelector("#Timerbox");
var timer = 60;
function runTimer() {
  var timerfxn = setInterval(function () {
    if (timer > 0) {
      timer--;
      timerbox.textContent = timer;
    } else {
      //if we won't use else condition the timer will be used and will eat memory
      clearInterval(timerfxn);
      gamebtm.innerHTML = "";
      scorebox.style.color = "green";
    }
  }, 1000);
}
runTimer();

var hitbox = document.querySelector("#Hitbox");
var hitnbr = 0;
function tohit() {
  hitnbr = Math.floor(Math.random() * 10);
  hitbox.textContent = hitnbr;
}
tohit();

var scorebox = document.querySelector("#Scorebox");
var score = 0;
function increaseScore() {
  score += 10;
  scorebox.textContent = score;
}

function click() {
  // To get the details of the every bubble
  // Instead of adding all the event listener to the all 100+ bubbles
  // we will add eventlistener to the parent
  gamebtm.addEventListener("click", function (details) {
    // we need to change the bubble content to number as it is in string by default
    var clickedbubble = Number(details.target.textContent);
    if (clickedbubble === hitnbr) {
      increaseScore();
      createBubble();
      tohit();
    }
  });
}
click();
