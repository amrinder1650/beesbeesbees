var Bee = function() {
  Grub.call(this) //Bee instance = this
  //instance differentiation
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing'
};

//Overwrite Bee prototype to delegate to Grub prototype
Bee.prototype = Object.create(Grub.prototype);
//Explicitly preserve constructor prop
Bee.prototype.constructor = Bee;

//every instance of bee
// Bee.prototype.job = 'keep on growing';

//why doesn't this overwrite ? Because Bee prototype has been set to Grub prototype. Finds age prop in Grub prototype.
// Bee.prototype.age = 5;

//bee gets all grub props from class constructor

//binds this to the Bee instance object that gets created when class constructor called

//new Bee --> creates instance object bound to this