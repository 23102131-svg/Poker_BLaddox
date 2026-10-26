const { createDeck, shuffle, dealHoleCards } = require("./deck");
const { Hand } = require("pokersolver");

const deck = shuffle(createDeck());
console.log("Deck size:", deck.length);

const hands = dealHoleCards(deck, 3);
const board = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];

console.log("Board:", board.join(" "));

const solved = hands.map((h) => Hand.solve([...h, ...board]));
solved.forEach((s, i) => {
  console.log("Player " + (i + 1) + ":", hands[i].join(" "), "->", s.descr);
});

const winners = Hand.winners(solved);
console.log("Winner(s): Player", winners.map((w) => solved.indexOf(w) + 1).join(", "));
console.log("Cards left in deck:", deck.length);
