class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    // reduce target res by power
    target.res -= this.power
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  // target is unit class
  played(target) {
    if (target instanceof Unit) {
      if (this.stat === "resilience") target.res += this.magnitude;
      else target.power += this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect(
  "Hard Algorithm",
  2,
  "increase target's resilience by 3",
  "resilience",
  3
);
const effect2 = new Effect(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  "resilience",
  -2
);
const effect3 = new Effect(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "power",
  2
);

effect1.played(redBeltNinja);
effect2.played(redBeltNinja);
effect3.played(redBeltNinja);
console.log(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja);
console.log(blackBeltNinja);
