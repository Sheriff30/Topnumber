'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const current0 = document.querySelector('.current0');
const current1 = document.querySelector('.current1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const overlay = document.querySelector('.overlay');
const howitworks = document.querySelector('.works');
const btnSettings = document.querySelector('.btn--settings');
const btnColor = document.querySelector('.btn--color');
const label0 = document.querySelector('.label0');
const label1 = document.querySelector('.label1');
const name0 = document.querySelector('#name--0');
const name1 = document.querySelector('#name--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const players = document.querySelectorAll('.player');
const btnStart = document.querySelector('.btn--start');

const switchPlyer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
let currentScore, scores, activePlayer, playing;

const init = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlyer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  if (scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlyer();
  }
});

btnNew.addEventListener('click', init);

btnStart.addEventListener('click', function () {
  overlay.classList.add('hidden');
  howitworks.classList.add('hidden');
});

btnSettings.addEventListener('click', function () {
  btnColor.classList.toggle('hidden');
});

btnColor.addEventListener('click', function () {
    btnColor.classList.add('hidden');
  document.body.style.backgroundImage =
    ' linear-gradient(to top left, #a0e0ab 0%, #339a46 100%) ';
  score0El.style.color = '#d9f2dd';
  score1El.style.color = '#d9f2dd';
  current0.style.backgroundColor = '#53c668';
  current1.style.backgroundColor = '#53c668';
  label0.style.color = '#fff';
  label1.style.color = '#fff';
  name0.style.color = '#d9f2dd';
  name1.style.color = '#d9f2dd';
});
