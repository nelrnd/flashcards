import Card from '../classes/card.js';
import Deck from '../classes/deck.js';

describe('Class for creating deck element', () => {
  it('Create a new deck', () => {
    const title = 'Basic arithmetic';
    const cards = [
      new Card('What is 2+2?', '2+2 is 4'),
      new Card('What is 6-2?', '6-2 is 4'),
      new Card('What is 5x3?', '5x3 is 15'),
    ];
    const deck = new Deck(title, cards);
    expect(deck.title).toBe(title);
    expect(deck.cards).toBe(cards);
  });
});
