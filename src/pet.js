// added a magic number variables outside of constructor function
const MAXIMUM_FITNESS = 10;
const BIRTHDAY = 1;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;

    Pet.prototype = {
        get isAlive() {
          return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
    };
    Pet.prototype.growUp = function() {
        this.age += BIRTHDAY;
        this.hunger += 5;
        this.fitness -= 3;
    };
    Pet.prototype.walk = function() {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4;
          } else {
            this.fitness = MAXIMUM_FITNESS;
          }
    };
    Pet.prototype.feed = function() {
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    };
    Pet.prototype.checkUp = function() {
        let needsWalk = false;
        let needsFood = false;
        
        if (this.fitness <= 3) {
            needsWalk = true;
        }
        if (this.hunger >= 5) {
            needsFood = true;
        }
        if (needsWalk && needsFood) {
            return 'I am hungry AND I need a walk';
        }
        if (needsWalk) {
            return 'I need a walk';
        }
        if (needsFood) {
            return 'I am hungry';
        }
        else {
            return 'I feel great!';
        }
    }
}

module.exports = Pet;