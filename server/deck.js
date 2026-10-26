const crypto = require("crypto");

const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const SUITS = ["s", "h", "d", "c"];

function createDeck() {
  const deck = [];
  for (const r of RANKS) {
    for (const s of SUITS) {
      deck.push(r + s);
    }
  }
  return deck;
}

// Fisher-Yates shuffle using secure randomness
function shuffle(deck) {
  const a = [...deck];
  for (let i = a.length - 1; i > 0; i--) {
    const j = crypto.randomInt(0, i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Deals 2 cards to each player, one at a time like a real dealer
function dealHoleCards(deck, numPlayers) {
  const hands = Array.from({ length: numPlayers }, () => []);
  for (let round = 0; round < 2; round++) {
    for (let p = 0; p < numPlayers; p++) {
      hands[p].push(deck.pop());
    }
  }
  return hands;
}

module.exports = { createDeck, shuffle, dealHoleCards };
