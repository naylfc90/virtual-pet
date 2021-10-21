const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
    it('checks initial age', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
    it('checks age after pet has grown up', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
    it('checks initial hunger', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
    it('checks hunger after pet has grown up', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
    });
    it('checks initial fitness', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
    it('checks fitness after pet has grown up', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.fitness).toEqual(7);
    });
    it('checks fitness after pet has been for a walk', () => {
      const pet = new Pet('Fido');
      pet.fitness = 2;
      pet.walk();
      expect(pet.fitness).toEqual(6);
    });
    it('checks fitness level does not go above 10', () => {
      const pet = new Pet('Fido');
      pet.fitness = 9;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
    it('checks hunger level after pet has been fed', () => {
      const pet = new Pet('Fido');
      pet.hunger = 9;
      pet.feed();
      expect(pet.hunger).toEqual(6);
    });
    it('checks hunger level does not go below 0', () => {
      const pet = new Pet('Fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
    it('checks up on pet to see what they need', () => {
      const pet = new Pet('Fido');
      pet.fitness = 3;
      expect(pet.checkUp()).toEqual('I need a walk');

      const pet2 = new Pet('Milo');
      pet2.hunger = 5;
      expect(pet2.checkUp()).toEqual('I am hungry');

      const pet3 = new Pet('Dido');
      pet3.fitness = 2;
      pet3.hunger = 6;
      expect(pet3.checkUp()).toEqual('I am hungry AND I need a walk');

      const pet4 = new Pet('Liro');
      pet3.fitness = 4;
      pet3.hunger = 4;
      expect(pet4.checkUp()).toEqual('I feel great!');
    })
    it('checks pet is alive', () => {
      const pet = new Pet('Fido');
      pet.age = 10;
      pet.hunger = 5;
      pet.fitness = 5;
      expect(pet.isAlive).toEqual(true);

      const pet2 = new Pet('Dido');
      pet2.age = 31;
      pet2.hunger = 5;
      pet2.fitness = 5;
      expect(pet2.isAlive).toEqual(false);
    });
    it('checks that exceptions are thrown if pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.fitness = -1;
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');

      const pet2 = new Pet('Milo');
      pet2.hunger = 10;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');

      const pet3 = new Pet('Dido');
      pet3.age = 31;
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');

      const pet4 = new Pet ('Lido');
      pet4.age = 31;
      expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');

      const pet5 = new Pet ('Bido');
      expect(pet5.checkUp()).toEqual('I feel great!');

      const pet6 = new Pet ('Tido');
      pet6.hunger = 9;
      pet6.feed();
      expect(pet6.checkUp()).toEqual('I am hungry');
    });
  });