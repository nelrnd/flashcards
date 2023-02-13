import Card from './classes/card.js';
import Deck from './classes/deck.js';
import { displayDeck } from './dom.js';

const decks = [];

async function loadDeck(fileName) {
  const response = await fetch(`./decks/${fileName}.json`);
  const json = await response.json();
  const cards = json.cards.map((card) => new Card(card.question, card.answer));

  decks.push(new Deck(json.title, cards));
}

await loadDeck('array-methods');

decks.forEach((deck) => displayDeck(deck));
