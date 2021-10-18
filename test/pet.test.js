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
  });