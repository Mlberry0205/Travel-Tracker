import { expect } from 'chai';
import Traveler from '../src/classes/Traveler';
import Trip from '../src/classes/Trip';
import Destination from '../src/classes/Destination';
import tripData from './test-datasets/trip-data';
import destinationData from './test-datasets/destination-data';
import travelerData from './test-datasets/travelers-data';
import dayjs from 'dayjs'
dayjs().format();

describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let todaysDate;
  let currentYearStart;
  let trip1

  beforeEach( () => {

    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[1]);
    todaysDate = dayjs().format('YYYY/MM/DD');
    currentYearStart = dayjs().startOf('year').format('YYYY/MM/DD')
    trip1 = new Trip(tripData[2], destinationData[21])
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  });

  it('should have a traveler id', () => {
    expect(traveler1.id).to.equal(1);
  });

  it('should have a traveler name', () => {
   expect(traveler1.name).to.equal('Ham Leadbeater');
 });

 it('should have a traveler type', () => {
  expect(traveler1.travelerType).to.equal('relaxer');
});

it('should have an empty trip array to begin with', () => {
 expect(traveler2.trips).to.deep.equal([]);
});

it('should be able to store trips for the current year (begin w/empty array)', () => {
 expect(traveler1.tripsThisYear).to.deep.equal([]);
});

it('should return a users first name', () => {
 expect(traveler1.returnUserName()).to.equal('Ham');
});

// it('should be able to add trips to the trip array', () => {
// expect(traveler1.addTripsToMyTripsArray(tripData)).to.deep.equal();
// });

it('should be able to store all trips for a taveler', () => {
  traveler1.addTripsForTraveler(tripData, destinationData)
 expect(traveler1.trips.length).to.equal(3);
});

it('should be able to add trips from a specific year to the tripsThisYear array', () => {
  traveler1.addTripsForTraveler(tripData, destinationData)
  expect(traveler1.trips.length).to.equal(3);
  expect(traveler1.tripsThisYear).to.eql([]);
  traveler1.addTripsToThisYear(tripData, currentYearStart)
  expect(traveler1.tripsThisYear.length).to.equal(2);
});

it('should return a travelers yearly trip total', () => {
  traveler1.addTripsForTraveler(tripData, destinationData)
  traveler1.addTripsToThisYear(tripData, currentYearStart)
  expect(traveler1.yearlyTripsTotal()).to.equal(11033);
});


});
