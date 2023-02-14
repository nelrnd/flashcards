function createDeck(deck) {
  const elem = document.createElement('div');
  const wrapper = document.createElement('div');
  const title = document.createElement('h2');
  const text = document.createElement('p');
  const button = document.createElement('button');

  elem.className = 'deck';
  title.className = 'deck-title';
  text.className = 'deck-text';

  title.textContent = deck.title;
  text.textContent = `${deck.length} cards`;
  button.textContent = 'Start';

  wrapper.appendChild(title);
  wrapper.appendChild(text);
  elem.appendChild(wrapper);
  elem.appendChild(button);

  return elem;
}

function displayDeck(deck) {
  const elem = createDeck(deck);
  document.body.appendChild(elem);
}

function createCard(card) {
  const elem = document.createElement('div');
  const text = document.createElement('p');

  elem.className = 'card';
  text.textContent = card.question;

  elem.appendChild(text);

  return elem;
}

function createTestInfo(deck) {
  const elem = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const cardNb = document.createElement('span');

  elem.className = 'test-info';
  cardNb.className = 'test-info-card-number';

  title.textContent = deck.title;
  cardNb.textContent = '1';
  text.innerHTML = `/${deck.length} cards`;

  text.prepend(cardNb);
  elem.appendChild(title);
  elem.appendChild(text);

  return elem;
}

export { displayDeck };
