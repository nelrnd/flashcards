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

  button.onclick = () => displayTest(deck);

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
  text.innerHTML = ` / ${deck.length} cards`;

  text.prepend(cardNb);
  elem.appendChild(title);
  elem.appendChild(text);

  return elem;
}

function createTestInteraction() {
  const elem = document.createElement('div');
  const showBtn = document.createElement('button');
  const rateWrapper = document.createElement('div');
  const incorrectBtn = document.createElement('button');
  const incorrectIcon = document.createElement('img');
  const correctBtn = document.createElement('button');
  const correctIcon = document.createElement('img');

  elem.className = 'test-interaction';
  rateWrapper.className = 'rate-wrapper hidden';
  incorrectBtn.className = 'incorrect big';
  correctBtn.className = 'correct big';

  showBtn.textContent = 'Show answer';

  incorrectIcon.src = './assets/incorrect.svg';
  incorrectIcon.alt = 'answer is incorrect';
  correctIcon.src = './assets/correct.svg';
  correctIcon.alt = 'answer is correct';

  incorrectBtn.appendChild(incorrectIcon);
  correctBtn.appendChild(correctIcon);
  rateWrapper.appendChild(incorrectBtn);
  rateWrapper.appendChild(correctBtn);
  elem.appendChild(showBtn);
  elem.appendChild(rateWrapper);

  return elem;
}

function createTestCards(deck) {
  const elem = document.createElement('div');
  const card = createCard(deck.cards[0]);

  elem.className = 'test-cards';
  elem.appendChild(card);

  return elem;
}

function createTest(deck) {
  const elem = document.createElement('div');

  const testInfo = createTestInfo(deck);
  const testCards = createTestCards(deck);
  const testInteraction = createTestInteraction();

  elem.className = 'test-container';

  elem.appendChild(testInfo);
  elem.appendChild(testCards);
  elem.appendChild(testInteraction);

  return elem;
}

function displayTest(deck) {
  const elem = createTest(deck);
  document.body.innerHTML = null;
  document.body.appendChild(elem);
}

export { displayDeck };
