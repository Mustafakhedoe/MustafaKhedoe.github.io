const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-btn');

let score = 0;
let lastHole;
let gameActive = false;
let timer;

// Kies een willekeurige molpositie
function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes); // Zorg ervoor dat dezelfde mol niet 2x achter elkaar verschijnt
  }
  lastHole = hole;
  return hole;
}

// Laat de mol verschijnen
function showMole() {
  const time = Math.random() * (1500 - 500) + 500; // Willekeurige tijd tussen 500ms en 1500ms
  const hole = randomHole(holes);
  const mole = document.createElement('div');
  mole.classList.add('mole');
  hole.appendChild(mole);

  setTimeout(() => {
    mole.remove(); // Verwijder de mol na een tijdje
    if (gameActive) showMole(); // Blijf doorgaan zolang het spel actief is
  }, time);

  mole.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    mole.remove(); // Verwijder de mol als hrt is geklikt
  });
}

// Start het spel
function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  gameActive = true;
  startButton.disabled = true; // Deactiveer de startknop tijdens het spel
  showMole();

  timer = setTimeout(() => {
    gameActive = false;
    startButton.disabled = false; // Activeer de startknop opnieuw
    alert(`Spel afgelopen! Je score: ${score}`);
  }, 15000); // Spel duurt 15 seconden
}

// Eventlistener voor de startknop
startButton.addEventListener('click', startGame);