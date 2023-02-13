import Card from '../classes/card.js';
import Deck from '../classes/deck.js';

const title = 'Basic arithmetic';
const cards = [
  new Card('What is 2+2?', '2+2 is 4'),
  new Card('What is 6-2?', '6-2 is 4'),
  new Card('What is 5x3?', '5x3 is 15'),
];

describe('Class for creating deck element', () => {
  it('Create a new deck', () => {
    const deck = new Deck(title, cards);
    expect(deck.title).toBe(title);
    expect(deck.cards).toBe(cards);
  });

  it('Return the length of deck (number of cards)', () => {
    const deck = new Deck(title, cards);
    expect(deck.length).toBe(3);
  });
});