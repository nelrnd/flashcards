export default class Deck {
  constructor(title, cards) {
    this.title = title;
    this.cards = cards;
    this._current = 0;
  }

  get length() {
    return this.cards.length;
  }

  get current() {
    return this.cards[this._current];
  }

  get corrects() {
    return this.cards.reduce(
      (prev, curr) => (curr.isCorrect ? prev + 1 : prev),
      0
    );
  }

  get incorrects() {
    return this.cards.reduce(
      (prev, curr) => (curr.isCorrect ? prev : prev + 1),
      0
    );
  }

  add(card) {
    this.cards.push(card);
  }

  next() {
    this._current++;
  }
}
