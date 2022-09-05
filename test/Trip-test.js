import { expect } from 'chai';
import Trip from '../src/classes/Trip';

describe('Trip', () => {
  let traveler;
  let travelers;
  let trip;
  let trips;

  beforeEach( () => {
    trips = [
      {
  id: 1,
  userID: 44,
  destinationID: 49,
  travelers: 1,
  date: "2022/09/16",
  duration: 8,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 2,
  userID: 35,
  destinationID: 25,
  travelers: 5,
  date: "2022/10/04",
  duration: 18,
  status: "approved",
  suggestedActivities: [ ]
  },
  {
  id: 3,
  userID: 3,
  destinationID: 22,
  travelers: 4,
  date: "2022/05/22",
  duration: 17,
  status: "approved",
  suggestedActivities: [ ]
  }
  ]
    trips = new Trip(trips)
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trips).to.be.an.instanceOf(Trip);
  });

  it.skip('should have a traveler id', () => {
  expect(trips.id).to.equal(1);
});

  it.skip('should have a traveler User id', () => {
  expect().to.equal();
});

  it.skip('should have the number of travelers', () => {
  expect().to.equal();
});

  it.skip('should have the date of the trip', () => {
  expect().to.equal();
});

it.skip('should have the duration of the trip', () => {
expect().to.equal();
});

it.skip('should have the status of the trip', () => {
expect().to.equal();
});

it.skip('should have suggested actvities for the trip', () => {
expect().to.equal();
});

});
