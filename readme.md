## Tandem Quiz

## </br>

### Description

    Code Challenge for Tandem’s Apprenticeship Program for software engineers.

---

### Goal

    Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.
    Use creative license in terms of how you want us to see this game. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.
    We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

---

### Assumptions

    A round of trivia has 10 Questions.
    All questions are multiple-choice questions
    Your score does not need to update in real time.
    Results can update on form submit, button click, or any interaction you choose
    We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

---

### Acceptance Criteria

    A user can view questions.
    Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
    A user can select only 1 answer out of the 4 possible answers.
    The correct answer must be revealed after a user has submitted their answer. A user can see the score they received at the end of the round.

---

### Clone Repository

    git clone https://github.com/Robert-Costello/tandem-quiz.git

### Run Locally

    npm i
    npm start

---

### Run Tests

    npm run test

---

### Notes on implementation

    The getQs method on the Quiz class fetches questions asynchronously to simulate real-world api implementation. 
    The questions are then shuffled so that the user is served up a random selection of ten questions. Before rendering 
    each question the answer options are shuffled so that they are displayed in random order. (all shuffling is a Fisher-Yates implementation) 
    A nice future addition would be storing the user's stats (scores, number of quizes taken, averages) in local storage to be displayed later. 
    If broken down by subject, a user could see how strong they are in specific areas, e.g. geography, computer science, history.
