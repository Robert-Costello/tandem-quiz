const qList = document.querySelector('.question-list');
const choices = document.querySelector('.choices');
const start = document.querySelector('.start');
const submitAns = document.querySelector('.new-question');
const quiz = new Quiz(qList);
const p = document.querySelector('p');

quiz.getQs();

submitAns.addEventListener('submit', (e) => {
  e.preventDefault();
  const answers = document.getElementsByName('answer');
  let selected;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      selected = answers[i].value;
    }
  }
  // console.log(submitAns.elements["answer"].value);
  if (selected === quiz.correctAnswer.replace(/ /g, '-')) {
    quiz.score++;
  }
  console.log(quiz.score);
  if(quiz.questions.length) {

    quiz.render();
  }

  else {
    alert(`You Scored ${quiz.score} / 10!`);
    location.reload();
  }
})

start.addEventListener('click', (e) => {
  e.preventDefault();
  quiz.render();
  start.classList.add('d-none');
  p.classList.remove('d-none');
})
