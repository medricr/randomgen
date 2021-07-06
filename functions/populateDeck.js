const Card = require ("../card.js")

let card3 = new Card(5, "5", "hearts");

console.log(card3.read());

class Deck {
  constructor(){
    this.unflippedCards = 52;
    this.cards = new Array();
  }

  cardsRemaining(){
    return this.unflippedCards;
  }
}

let deck1 = new Deck();
console.log(deck1);

return;