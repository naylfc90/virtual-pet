// added a magic number variables outside of constructor function
const MAXIMUM_FITNESS = 10;
const BIRTHDAY = 1;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    
    Pet.prototype.growUp = function() {
        this.age += BIRTHDAY;
        this.hunger += 5;
        this.fitness -= 3;
    };
    Pet.prototype.walk = function() {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
            this.fitness += 4;
          } else {
            this.fitness = MAXIMUM_FITNESS;
          }
    };
}

module.exports = Pet;