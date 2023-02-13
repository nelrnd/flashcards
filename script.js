import Card from './classes/card.js';
import Deck from './classes/deck.js';

const decks = [];

// load deck

async function loadDeck(fileName) {
  const response = await fetch(`./decks/${fileName}.json`);
  const json = await response.json();
  const cards = json.cards.map((card) => new Card(card.question, card.answer));

  decks.push(new Deck(json.title, cards));
}

loadDeck('array-methods');
