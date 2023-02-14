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

  add(card) {
    this.cards.push(card);
  }

  next() {
    this._current++;
  }
}
