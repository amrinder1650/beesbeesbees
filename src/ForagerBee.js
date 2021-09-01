var ForagerBee = function() {

  //this = Object.create(ForagerBee.prototype)
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen'
  this.canFly = true;
  this.treasureChest = [];
};



// var walter = new ForagerBee ()
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}

