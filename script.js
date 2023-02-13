const decks = [];

// load deck

async function loadDeck(fileName) {
  const response = await fetch(`./decks/${fileName}.json`);
  const json = await response.json();
  console.log(json);
}

loadDeck('array-methods');
