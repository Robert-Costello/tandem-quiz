const questionWindow = document.querySelector('.question-window');
const qList = document.querySelector('.question-list');
const choices = document.querySelector('.choices');
const start = document.querySelector('.start');
const submitAns = document.querySelector('.new-question');
const p = document.querySelector('p');
const corrAns = document.querySelector('.corr-ans');
const playAgain = document.querySelector('.play-again');
const finalScore = document.querySelector('.final-score');

let quiz;
let scoreColor = 'text-danger';

const newGame = () => {
  quiz = new Quiz(qList);
  quiz.getQs();
};

const showAnswer = () => {
  corrAns.classList.remove('d-none');
  corrAns.innerText = `The correct answer was: ${quiz.correctAnswer}`;
  // setTimeout(() => (corrAns.innerText = ''), 2500);
};

newGame();

submitAns.addEventListener('submit', (e) => {
  e.preventDefault();
  const answers = document.getElementsByName('answer');
  let selected = '';
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      selected = answers[i].value;
    }
  }

  // PROMPT USER TO SELECT AN ANSWER IF ONE ISN'T SELECTED
  if (!selected.length) alert('Please choose an answer');
  // INCREMENT SCORE AND UPDATE UI IF SELECTED IS CORRECT
  else if (selected === quiz.correctAnswer.replace(/ /g, '-')) {
    quiz.score++;
    showAnswer();
    if (quiz.questions.length) {
      quiz.render();
    }

    // DISPLAY SCORE IF THERE ARE NO MORE QUESTIONS IN CURRENT QUIZ CLASS
    else {
      quiz.endGame();
      // NEW LINE KEEP THE ELEMENTS IN POSITION WHILE REMOVING CORRECT ANSWER
      setTimeout(() => (corrAns.innerText = '\n'), 2500);
    }
  }

  // UPDATE UI IF SELECTED IS INCORRECT
  else {
    if (quiz.questions.length) {
      showAnswer();
      quiz.render();
    }

    // DISPLAY SCORE IF THERE ARE NO MORE QUESTIONS IN CURRENT QUIZ CLASS
    else {
      showAnswer();
      quiz.endGame();

      setTimeout(() => (corrAns.innerText = '\n'), 2500);
    }
  }
});

start.addEventListener('click', (e) => {
  e.preventDefault();
  quiz.render();
  start.classList.add('d-none');
  p.classList.remove('d-none');
});

playAgain.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
});
