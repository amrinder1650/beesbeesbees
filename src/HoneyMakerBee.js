var HoneyMakerBee = function() {
  //lookup the chain for properties
  Bee.call(this);
  this.age = 10;

};


HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.job = 'make honey';
HoneyMakerBee.prototype.honeyPot = 0;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot  -= 1;
};

//var 10yearbee = new HoneyMakerBee
//this 10year