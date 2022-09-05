class Destination {
  constructor(destinations) {
    this.id = destinations.id;
    this.estimatedLodgingCostPerDay = destinations.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destinations.estimatedFlightCostPerPerson;
    this.image = destinations.image;
    this.alt = destinations.alt;
  };
};


export default Destination
