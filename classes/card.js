class Card {
  constructor(numValue, stringValue, suit) {
    this.numValue = numValue;
    this.stringValue = stringValue;
    this.suit = suit;
    this.flipped = false;
  }
 
  read(){
    return `"${this.stringValue} of ${this.suit}"`;
  }
}

// let card1  = new Card(7, "7", "clubs");
// let card2  = new Card(3, "3", "spades");



// console.log(card1.read());
// console.log(card2.read());

module.exports = (Card)

return;
