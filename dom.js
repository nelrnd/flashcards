function createDeck(deck) {
  const elem = document.createElement('div');
  const title = document.createElement('h2');
  const text = document.createElement('p');

  elem.className = 'deck';
  title.textContent = deck.title;
  text.textContent = `${deck.length} cards`;

  elem.appendChild(title);
  elem.appendChild(text);

  return elem;
}

function createCard(card) {
  const elem = document.createElement('div');
  const text = document.createElement('p');

  elem.className = 'card';
  text.textContent = card.question;

  elem.appendChild(text);

  return elem;
}
