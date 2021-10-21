// added magic number variables outside of constructor function
const BIRTHDAY = 1;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_FITNESS = 10;
const MAXIMUM_AGE = 30;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];

    Pet.prototype = {
        get isAlive() {
          return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
        }
    };
    Pet.prototype.growUp = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
        this.age += BIRTHDAY;
        this.hunger += 5;
        this.fitness -= 3;
    };
    Pet.prototype.walk = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        } 
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    };
    Pet.prototype.feed = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        } 
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    };
    Pet.prototype.checkUp = function() {
        let needsWalk = false;
        let needsFood = false;

        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
        }
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
    };
    Pet.prototype.adoptChild = function(child) {
        this.children.push(child);
    };
    Pet.prototype.haveBaby = function(childName) {
        childName = new Pet(childName);
        this.children.push(childName);
    };
}

module.exports = Pet;