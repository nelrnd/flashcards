import Card from '../classes/card.js';

describe('Class for creating card element', () => {
  it('Create a new card from a question and an answer', () => {
    const question = 'What is 2+2?';
    const answer = '2+2 is 4';
    const card = new Card(question, answer);
    expect(card.question).toBe(question);
    expect(card.answer).toBe(answer);
  });
});
