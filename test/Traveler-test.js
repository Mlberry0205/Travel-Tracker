import { expect } from 'chai';
import Traveler from '../src/classes/Traveler';

describe('Traveler', () => {
  let traveler;
  let travelers;

  beforeEach( () => {
    travelers = [
        {
    id: 1,
    name: "Ham Leadbeater",
    travelerType: "relaxer"
    },
    {
    id: 2,
    name: "Rachael Vaughten",
    travelerType: "thrill-seeker"
    },
    {
    id: 3,
    name: "Sibby Dawidowitsch",
    travelerType: "shopper"
    }
  ]
    traveler = new Traveler(travelers[0])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should have a traveler id', () => {
    expect(traveler.id).to.equal(1);
  });

  it('should have a traveler name', () => {
   expect(traveler.name).to.equal('Ham Leadbeater');
 });

 it('should have a traveler type', () => {
  expect(traveler.travelerType).to.equal('relaxer');
});

it.skip('should be able to store an array of trips', () => {
 expect(traveler.trips).to.equal([]);
});

it.skip('a traveler should be able to add trips', () => {
 expect(traveler.travelerType).to.equal('relaxer');
});


it.skip('should have the total spent plus a 10% traveler fee', () => {
 expect(traveler.travelerType).to.equal('relaxer');
});


});
