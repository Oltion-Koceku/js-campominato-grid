// creo le costanti
const boxGioco = document.querySelector(".box-gioco");
const bottone = document.querySelector("button");
const sqN = [100, 81, 49];
let arrayBombe = [];
const bombe = 16;
const scritta = document.querySelector("h2")
let punteggio = 0;

start();
console.log(arrayBombe);
console.log(punteggio);
// function
function start() {

  bottone.addEventListener("click", function(){
    const difficolta = document.querySelector("select");
    reset()
    resetPunteggio()
    randomBomb();
    for (let i = 1; i < sqN[difficolta.value] + 1; i++) {
      const squereDiv = document.createElement("div")
      if (difficolta.value === "0") {
        squereDiv.className = "facile"
      }else if(difficolta.value === "1"){
        squereDiv.className = "normale"
      }else if(difficolta.value === "2"){
        squereDiv.className = "difficile"
      }
      squereDiv.classList.add("click")
      boxGioco.append(squereDiv)
      squereDiv._n = i
      squereDiv.addEventListener("click", function(){
        const numero = this._n
        // squereDiv.classList.add("color-squere")
        // bomba
        if (arrayBombe.includes(numero)) {
          squereDiv.classList.add("box-bomba")
          punteggioF()
          gameOver()
          // espolosione delle bombe
          const esplosione = document.querySelectorAll(".click")
          for (let i = 0; i < esplosione.length; i++) {
            if (arrayBombe.includes(esplosione[i]._n)) {
              esplosione[i].classList.add("box-bomba")
              console.log(esplosione[i]._n);
            }
          }
        }else{
          squereDiv.classList.add("color-squere")
          punteggio++;

        }
        

      })
    }
    console.log(difficolta.value);
  })
}

function bomb(_n){
  if (arrayBombe.includes(_n)) {
    _n.classList
  }
}

function randomBomb(){
  do{
    const difficolta = document.querySelector("select");
     const numeriEstratti = Math.floor(Math.random() * sqN[difficolta.value] + 1) + 1;
     if (!(arrayBombe.includes(numeriEstratti))) {
      arrayBombe.push(numeriEstratti)
     }
    
  } while (arrayBombe.length < bombe) {
  }
}

function punteggioF() {
  const difficolta = document.querySelector("select");
  const punteggioDaFare = sqN[difficolta.value] - bombe;
  scritta.innerHTML += `Hai fatto ${punteggio} Punti su ${punteggioDaFare}`
  console.log(punteggio);
}

function reset(){
  boxGioco.innerHTML = "";
  arrayBombe = [];
  scritta.innerHTML = ""
}
function resetPunteggio(){
  punteggio = 0;
}

function gameOver() {
  const over = document.createElement("div");
  over.className = "game-over"
  over.innerHTML +=`<h3>Game Over</h3>`
  boxGioco.append(over)
}