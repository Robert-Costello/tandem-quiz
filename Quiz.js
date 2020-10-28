class Quiz {
  constructor(list) {
    this.score = 0;
    this.list = list;
    this.score = 0;
    this.questions = [];
    this.correctAnswer = '';
  }

  async getQs() {
    const response = await fetch('Apprentice_TandemFor400_Data.json');
    return response.json()
    .then(data => {
      let qCount = 0;

      while(qCount < 10) {
        let index = Math.floor(Math.random() * 21);
        this.questions.push(data[index])
        qCount++;
      }

      console.log(this.questions);
    });
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
    choices.innerHTML = `<div class="input-group-append">
            <input type="submit" class="btn submit-ans" id="submit-ans" value="submit"/>
            </div>`;
    answers.forEach(ans => {
      let html = `<input type="radio" id="message" class="form-control" name="answer" value=${ans.replace(/ /g, '-')}>${ans}</input>`
      choices.innerHTML += html;
      console.log(choices)
    })
  }
}
