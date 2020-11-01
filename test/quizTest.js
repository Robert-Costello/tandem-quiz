const chai = require('chai');
const assert = chai.assert;
const Quiz = require('../Quiz');
const quiz = new Quiz('<ul />');

describe('Quiz', function () {
  it('should have a score property of 0', function () {
    assert.equal(quiz.score, 0);
  });
  it('score should be a number', function () {
    assert.typeOf(quiz.score, 'number');
  });
  it('score should increment', function () {
    quiz.score++;
    assert.isAbove(quiz.score, 0);
  });
  it('score should have questions array', function () {
    assert.isArray(quiz.questions);
  });
  it('questions array can be added to', function () {
    quiz.questions.push('What time is it?');
    assert.isAbove(quiz.questions.length, 0);
  });
  it('should have list property', function () {
    assert(quiz.list, 'list prop not found');
  });
  it('should have correct answer property', function () {
    quiz.correctAnswer = 'penguin';
    assert(quiz.correctAnswer, 'correctAnswer prop not found');
  });
  it('correct answer property should be a string', function () {
    assert.typeOf(quiz.correctAnswer, 'string');
  });
  it('should have getQs method', function () {
    assert.typeOf(quiz.getQs, 'function');
  });
  it('should have render method', function () {
    assert.typeOf(quiz.render, 'function');
  });
  it('should have endGame method', function () {
    assert.typeOf(quiz.endGame, 'function');
  });
});
