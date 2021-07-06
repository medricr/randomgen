const Card = require ("./card.js")
/* 
The deck class requires the Card class, and has it's own set of methods which can be invoked to populate the deck, shuffle the deck, and draw a card as well as methods for getting the number of cards yet to be flipped, and showing all the remaining cards in the deck. 

It includes a constructor with a single argument, a boolean true or false, which will determine whether or not jokers are included in the deck when it is generated. 

If, when a card is drawn there are no cards "remaining" in the deck (array length = 0), the dealCard method returns a new Card object with a numerical value of 0, a numberString value of "No more cards!" and a suit of "No more cards!"
*/
class Deck {
  constructor(includeJokers){
    this.jokers = includeJokers;
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
    if(this.jokers === true){
      console.log("jokers detected")
      this.cards.push(new Card(0,"Joker", "Red"));
      this.cards.push(new Card(0,"Joker", "Black"));
    }
    this.shuffle();
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
    else return new Card(0, "No more cards!", "No more cards!");
  }
}

module.exports = (Deck);
return;

