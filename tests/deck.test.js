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

  it('Add a new card to deck', () => {
    const deck = new Deck(title, [...cards]);
    const card = new Card('What is 10/2?', '10/2 is 5');
    deck.add(card);
    expect(deck.length).toBe(4);
    expect(deck.cards[3]).toBe(card);
  });

  it('Get current card', () => {
    const deck = new Deck(title, cards);
    expect(deck.current.question).toBe(cards[0].question);
  });

  it('Pass to next card', () => {
    const deck = new Deck(title, cards);
    deck.next();
    expect(deck.current.question).toBe(cards[1].question);
  });

  it('Get number of cards answered correctly and incorrectly', () => {
    const deck = new Deck(title, cards);
    while (deck.current) {
      deck.current.isCorrect = deck._current % 2 ? true : false;
      deck.next();
    }
    expect(deck.corrects).toBe(1);
    expect(deck.incorrects).toBe(2);
  });

  it('Reseting a deck', () => {
    const deck = new Deck(title, cards);
    deck.current.isCorrect = true;
    deck.next();
    deck.current.isCorrect = false;
    deck.next();
    deck.current.isCorrect = true;
    deck.next();

    deck.reset();
    expect(deck.corrects).toBe(0);
    expect(deck.incorrects).toBe(0);
    expect(deck._current).toBe(0);
  });
});
