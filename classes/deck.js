export default class Deck {
  constructor(title, cards) {
    this.title = title;
    this.cards = cards;
  }

  get length() {
    return this.cards.length;
  }
}
