//pseudoclassical -- we can add 'universal instance' props to the class constructor using the this kw .

var Grub = function() {
  //this = object.create(Grub.prototype) {}
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(){

};

