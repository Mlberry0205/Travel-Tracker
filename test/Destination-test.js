import { expect } from 'chai';
import Destination from '../src/classes/Destination';

describe('Destination', () => {
  let destinations;

  beforeEach( () => {
    destinations = [
      {
  id: 1,
  destination: "Lima, Peru",
  estimatedLodgingCostPerDay: 70,
  estimatedFlightCostPerPerson: 400,
  image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  alt: "overview of city buildings with a clear sky"
  },
  {
  id: 2,
  destination: "Stockholm, Sweden",
  estimatedLodgingCostPerDay: 100,
  estimatedFlightCostPerPerson: 780,
  image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "city with boats on the water during the day time"
  },
  {
  id: 3,
  destination: "Sydney, Austrailia",
  estimatedLodgingCostPerDay: 130,
  estimatedFlightCostPerPerson: 950,
  image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  alt: "opera house and city buildings on the water with boats"
  }
  ]
    destinations = new Destination(destinations[0])
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destinations).to.be.an.instanceOf(Destination);
  });

  it('should have the destination Id', () => {
  expect(destinations.id).to.equal(1);
});

  it('should have the estimated lodging cost per day', () => {
  expect(destinations.estimatedLodgingCostPerDay).to.equal(70);
});

  it('should have the estimated flight cost per person', () => {
  expect(destinations.estimatedFlightCostPerPerson).to.equal(400);
});

  it('should have a destination image', () => {
  expect(destinations.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
});

  it('should have an alternative name for image', () => {
  expect(destinations.alt).to.equal("overview of city buildings with a clear sky");
});



});
