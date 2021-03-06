class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 0;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log("Ninja Name: ", this.name);
  }
  showStats() {
    console.log(
      "Ninja Name: ",
      this.name,
      " Strength: ",
      this.strength,
      " Health: ",
      this.health
    );
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.wisdom = 10;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
  }
  speakWisdom() {
    this.drinkSake();
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
  }
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
