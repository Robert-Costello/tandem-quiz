class Quiz {
  constructor(list) {
    this.score = 0;
    this.list = list;
    this.score = 0;
    this.questions = [];
    this.correctAnswer = '';
  }
  // FETCH QUESTIONS FROM JSON FILE AND ADD 10 TO QUIZ
  async getQs() {
    const response = await fetch('Apprentice_TandemFor400_Data.json')
    return response.json().then((data) => {
      let qCount = 0, index = data.length-1;

      // FISHER-YATES SHUFFLE QUESTIONS
      for (let index = data.length-1; index > 0; index--) {
        const j = Math.floor(Math.random() * index);
        const temp = data[index];
        data[index] = data[j];
        data[j] = temp;
      }

      while (qCount < 10) {
        this.questions.push(data[qCount]);
        qCount++;
      }
    })
  }

  render() {
    const answers = [];
    const q = this.questions.pop();
    this.correctAnswer = q.correct;
    const html = `<li class='list-group-item h3'>
    <span class='prompt'>${q.question} </span>
    </li>
    `;
    this.list.innerHTML = html;
    answers.push(q.correct, ...q.incorrect);

    // FISHER-YATES SHUFFLE ANSWERS
    for(let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
    choices.innerHTML = `<div class="input-group-append">
            <input type="submit" class="btn submit-ans" id="submit-ans" value="submit"/>
            </div>`;
    answers.forEach((ans) => {
      let html = `<div class="choice"><input type="radio" class="form-control radio" id="radio" name="answer" value=${ans.replace(
        / /g,
        '-'
      )}>${ans}</input></div>`;
      choices.innerHTML += html;
    })
  }

  endGame() {
    const grade = quiz.score / 10 * 100;
    currScore.classList.remove(`${scoreColor}`);
    if(quiz.score > 7) scoreColor = 'text-success';
    else if(quiz.score <= 7 && quiz.score >= 5) scoreColor = 'text-warning';
    currScore.innerText = `You Scored ${grade}%!`;
    currScore.classList.add('h1', `${scoreColor}`);
    playAgain.classList.remove('d-none');
    submitAns.classList.add('d-none');
  }
}
