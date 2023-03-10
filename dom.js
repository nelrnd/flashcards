import { decks } from './script.js';

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

function displayDecks(decks) {
  document.body.innerHTML = null;
  decks.forEach((deck) => displayDeck(deck));
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

function createTestInteraction(deck) {
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

  showBtn.onclick = () => showAnswer(deck.current);
  incorrectBtn.onclick = () => rateCard(false, deck);
  correctBtn.onclick = () => rateCard(true, deck);

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
  const testInteraction = createTestInteraction(deck);

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

function showQuestion(card) {
  showCard(card.question);
  document.querySelector('.rate-wrapper').classList.add('hidden');
  document.querySelector('.test-interaction button').classList.remove('hidden');
}

function showAnswer(card) {
  showCard(card.answer);
  document.querySelector('.rate-wrapper').classList.remove('hidden');
  document.querySelector('.test-interaction button').classList.add('hidden');
}

function showCard(value) {
  document.querySelector('.card p').innerText = value;
}

function rateCard(value, deck) {
  deck.current.isCorrect = value;
  deck.next();
  if (!deck.current) {
    displayResult(deck);
    deck.reset();
    return;
  }
  showQuestion(deck.current);
  updateCardNumber(deck._current);
}

function updateCardNumber(index) {
  document.querySelector('.test-info-card-number').innerText = index + 1;
}

function createResult(deck) {
  const elem = document.createElement('div');
  const top = document.createElement('div');
  const left = document.createElement('div');
  const right = document.createElement('div');
  const subtext = document.createElement('p');
  const title = document.createElement('h3');

  const correctIcon = document.createElement('span');
  const incorrectIcon = document.createElement('span');
  const correctText = document.createElement('p');
  const incorrectText = document.createElement('p');

  const quitBtn = document.createElement('button');
  const againBtn = document.createElement('button');

  elem.className = 'result';
  top.className = 'result-top';
  subtext.className = 'subtext';
  againBtn.className = 'secondary';
  correctIcon.className = 'correct-icon icon';
  incorrectIcon.className = 'incorrect-icon icon';

  subtext.textContent = 'You finished testing yourself on';
  title.textContent = deck.title;

  correctText.textContent = `${deck.corrects} correct answers`;
  incorrectText.textContent = `${deck.incorrects} incorrect answers`;

  quitBtn.textContent = 'Quit';
  againBtn.textContent = 'Study again';

  quitBtn.onclick = () => displayDecks(decks);
  againBtn.onclick = () => displayTest(deck);

  top.appendChild(subtext);
  top.appendChild(title);
  correctText.prepend(correctIcon);
  incorrectText.prepend(incorrectIcon);
  left.appendChild(correctText);
  left.appendChild(incorrectText);
  right.appendChild(quitBtn);
  right.appendChild(againBtn);
  elem.appendChild(top);
  elem.appendChild(left);
  elem.appendChild(right);

  return elem;
}

function displayResult(deck) {
  const elem = createResult(deck);
  document.body.innerHTML = null;
  document.body.appendChild(elem);
}

export { displayDecks };
