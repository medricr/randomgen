var assert = require('assert');
const Deck = require('../classes/deck.js');

// let myDeck = new Deck(true);


// Canary test
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Deck object tests
describe ('Deck', function(){
  it('should return a value of 54 when the value is called for, before any cards have been drawn', function(){
    let myDeck = new Deck(true);
    assert.strictEqual(54, myDeck.cardsRemaining());
  })

  it('should return a value of 50 when the value is called for, after four cards have been drawn', function(){
    let myDeck = new Deck(true);
    for(let i = 0; i < 4; i++){
      myDeck.dealCard();
    }
    assert.strictEqual(50, myDeck.cardsRemaining());
  })
})