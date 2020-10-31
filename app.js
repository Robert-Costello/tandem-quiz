const questionWindow = document.querySelector('.question-window');
const qList = document.querySelector('.question-list');
const choices = document.querySelector('.choices');
const start = document.querySelector('.start');
const submitAns = document.querySelector('.new-question');
const p = document.querySelector('p');
const currScore = document.querySelector('.score');
const playAgain = document.querySelector('.play-again');
let quiz;
let scoreColor = 'text-danger';

const newGame = () => {
  quiz = new Quiz(qList);
  quiz.getQs();
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
    currScore.innerText = `Correct Answers: ${quiz.score}`;
    if (quiz.questions.length) {
      quiz.render();
    }

    // DISPLAY SCORE IF THERE ARE NO MORE QUESTIONS IN CURRENT QUIZ CLASS
    else {
      quiz.endGame();
    }
  }

  // UPDATE UI IF SELECTED IS INCORRECT
  else {
    if (quiz.questions.length) {
      quiz.render();
    }

    // DISPLAY SCORE IF THERE ARE NO MORE QUESTIONS IN CURRENT QUIZ CLASS
    else {
      quiz.endGame();
    }
  }
});

start.addEventListener('click', (e) => {
  e.preventDefault();
  quiz.render();
  start.classList.add('d-none');
  p.classList.remove('d-none');
  currScore.classList.remove('d-none');
});

playAgain.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
});
