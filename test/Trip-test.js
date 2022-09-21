import { expect } from 'chai';
import Trip from '../src/classes/Trip';
import Traveler from '../src/classes/Traveler';
import Destination from '../src/classes/Destination';
import tripData from './test-datasets/trip-data';
import destinationData from './test-datasets/destination-data';

describe('Trip', () => {

  let trip1;

  beforeEach( () => {

    trip1 = new Trip(tripData[2], destinationData[21])

  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  });

  it('should have a traveler id', () => {
  expect(trip1.id).to.equal(3);
});

  it('should have a traveler UserID', () => {
  expect(trip1.userID).to.equal(3);
});

it('should have a traveler destination id', () => {
expect(trip1.destinationID).to.equal(22);
});

  it('should have the number of travelers', () => {
  expect(trip1.numberOfTravelers).to.equal(4);
});

  it('should have the date of the trip', () => {
  expect(trip1.date).to.equal("2022/05/22");
});

it('should have the duration of the trip', () => {
expect(trip1.tripDuration).to.equal(17);
});

it('should have the status of the trip', () => {
expect(trip1.status).to.equal('approved');
});

it('should have the totalTrip cost starting at zero', () => {
expect(trip1.totalTripCost).to.equal(0);
});


it('should have a travelers destination info', () => {
expect(trip1.destinationInfo).to.deep.equal({
  id: 22,
  destination: "Rome, Italy",
  estimatedLodgingCostPerDay: 90,
  estimatedFlightCostPerPerson: 650,
  image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "people standing inside a colosseum during the day"});
})

it('should calculate the total cost of the trip', () => {
expect(trip1.calculateTotalCost()).to.equal(4543);
});


});
