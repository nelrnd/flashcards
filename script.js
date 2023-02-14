import Card from './classes/card.js';
import Deck from './classes/deck.js';
import { displayDecks } from './dom.js';

export const decks = [];

async function loadDeck(fileName) {
  const response = await fetch(`./decks/${fileName}.json`);
  const json = await response.json();
  const cards = json.cards.map((card) => new Card(card.question, card.answer));

  decks.push(new Deck(json.title, cards));
}

await loadDeck('array-methods');

displayDecks(decks);
