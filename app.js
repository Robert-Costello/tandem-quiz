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
  console.log("New Game!");
}

newGame();

submitAns.addEventListener('submit', (e) => {
  e.preventDefault();
  const answers = document.getElementsByName('answer');
  let selected ="";
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      selected = answers[i].value;
    }
  }
  console.log(selected);


  // PROMPT USER TO SELECT AN ANSWER IF ONE ISN'T SELECTED
  if(!selected.length) alert("Please choose an answer");

  // INCREMENT SCORE AND UPDATE UI IF SELECTED IS CORRECT
  else if (selected === quiz.correctAnswer.replace(/ /g, '-')) {
    quiz.score++;
    currScore.innerText = `Your Score: ${quiz.score}`;
    if(quiz.questions.length) {
      quiz.render();
    }

    // DISPLAY SCORE IF THERE ARE NO MORE QUESTION IN CURRENT QUIZ CLASS
    else {
      currScore.classList.remove(`${scoreColor}`);
      if(quiz.score > 7) scoreColor = 'text-success';
      else if(quiz.score < 7 && quiz.score >= 5) scoreColor = 'text-warning';
      currScore.innerText = `You Scored ${quiz.score} / 10!`;
      currScore.classList.add('h1', `${scoreColor}`);
      playAgain.classList.remove('d-none');
    }
  }

  // UPDATE UI IF SELECTED IS INCORRECT
  else {
    if(quiz.questions.length) {
      quiz.render();
    }

    // DISPLAY SCORE IF THERE ARE NO MORE QUESTION IN CURRENT QUIZ CLASS
    else {
      currScore.classList.remove(`${scoreColor}`);
      if(quiz.score > 7) scoreColor = 'text-success';
      else if(quiz.score < 7 && quiz.score >= 5) scoreColor = 'text-warning';
      currScore.innerText = `You Scored ${quiz.score} / 10!`;
      currScore.classList.add('h1', `${scoreColor}`);
      playAgain.classList.remove('d-none');
    }
  }

})

start.addEventListener('click', (e) => {
  e.preventDefault();
  quiz.render();
  start.classList.add('d-none');
  p.classList.remove('d-none');
  currScore.classList.remove('d-none');
})


playAgain.addEventListener('click', e => {
  e.preventDefault();
  location.reload()
})
