import Destination from './Destination';

class Trip {
  constructor(trip, destinationInfo) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID
    this.numberOfTravelers = trip.travelers;
    this.date = trip.date;
    this.tripDuration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.totalTripCost = 0;
    this.destinationInfo = destinationInfo;
  };

  calculateTotalCost() {
    const lodgingCost = this.destinationInfo.estimatedLodgingCostPerDay * this.tripDuration;
    const flightCost = this.destinationInfo.estimatedFlightCostPerPerson * this.numberOfTravelers;
    const totalCost = lodgingCost + flightCost;
    const agentFee = totalCost * .10;
    this.totalTripCost = totalCost + agentFee;
    return this.totalTripCost;
  }
};

export default Trip
