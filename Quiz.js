class Quiz {
  constructor(list) {
    this.score = 0;
    this.list = list;
    this.score = 0;
    this.questions = [];
    this.correctAnswer = '';
  }

  async getQs() {
    const response = await fetch('Apprentice_TandemFor400_Data.json')
    return response.json().then((data) => {
      let qCount = 0, index = data.length-1;

      // FISHER YATES SHUFFLE QUESTIONS
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
    const html = `<li class='list-group-item'>
    <span class='prompt'>${q.question} </span>
    </li>
    `;
    this.list.innerHTML = html;
    answers.push(q.correct, ...q.incorrect);

    // FISHER YATES SHUFFLE ANSWERS
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
      let html = `<input type="radio" class="form-control radio" name="answer" value=${ans.replace(
        / /g,
        '-'
      )}>${ans}</input>`;
      choices.innerHTML += html;
    })
  }
}
