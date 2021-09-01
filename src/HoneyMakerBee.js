var HoneyMakerBee = function() {
  //lookup the chain for properties
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey'
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// HoneyMakerBee.prototype.job = 'make honey';
// HoneyMakerBee.prototype.honeyPot = 0;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot  -= 1;
};



//first look in honmbee instance to find job prop

//fall back lookup to prototype

//method should live on prototype

//property unique to instance