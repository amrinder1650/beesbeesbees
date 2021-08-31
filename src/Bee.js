var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
};

//Grub is the superclass

//Bee needs to set its prototype to delegate lookups to Grub.prototype
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype.job = 'keep on growing';