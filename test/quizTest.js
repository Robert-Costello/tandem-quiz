const assert = require('chai').assert;
const Quiz = require('../Quiz');
const quiz = new Quiz('<ul />');

describe('Quiz', function () {
  it('quiz should have a score prop of 0', function () {
    assert.equal(quiz.score, 0);
  });
  it('quiz score should increment', function () {
    quiz.score++;
    assert.isAbove(quiz.score, 0);
  });
  it('quiz score should have questions array', function () {
    assert.isArray(quiz.questions);
  });
  it('quiz should have list property', function () {
    assert(quiz.list, 'list prop found');
  });
});
