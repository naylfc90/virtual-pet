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
      pet.hunger = 10;
      pet.feed();
      expect(pet.hunger).toEqual(7);
    });
    it('checks hunger level does not go below 0', () => {
      const pet = new Pet('Fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });

  });