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
