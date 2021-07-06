const Card = require ("./card.js")

class Deck {
  constructor(){
    this.cards = new Array();
    this.populateDeck();
    this.unflippedCards = this.cards.length;
    this.cardsFlipped = 0;
  }

  cardsRemaining(){
    return this.unflippedCards;
  }

  showCards() {
    return this.cards;
  }

  populateDeck(){
    for(let i = 1; i <56; i++){
      let suit = ""
      let numberString = "";

      if( 0 >= i || i <= 13) suit = "Hearts";
      else if (12 >= i || i <= 29) suit = "Clubs";
      else if (26 >= i || i <= 42) suit = "Diamonds";
      else suit = "Spades";

      let number = (i % 14);
      if (number == 0) continue;
      

      if(number == 13) numberString = "King";
      else if(number == 1) numberString = "Ace";
      else if(number == 12) numberString = "Queen";
      else if(number == 11) numberString = "Jack";

      else numberString = number.toString();

      this.cards.push(new Card(number, numberString, suit));
    }
    return;
  }

  shuffle() {
    for(let i  = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return;
  }

  dealCard() {
    if(this.cards.length > 0){
      let topCard = this.cards.pop();
      this.unflippedCards--;
      return topCard;
    }
    else return "no more cards";
  }
}

let deck1 = new Deck();
// console.log(deck1.cardsRemaining());
deck1.shuffle();
// console.table(deck1.showCards());
for(let i = 0; i < 53; i++){
  let testVal = deck1.dealCard();
  
  // console.log(typeof(testVal))
  if(typeof(testVal) != "string") {
    console.log(testVal.read());
  } else console.log(testVal);
}

console.log(deck1.cardsRemaining());

module.exports = {Deck};
return;

