import Trip from './Trip';

class Traveler {
    constructor(travelers) {
      this.id = travelers.id;
      this.name = travelers.name;
      this.travelerType =travelers.travelerType;
      this.trips = [];
      this.tripsThisYear = [];
      this.totalSpentThisYear;
    };

    returnUserName() {
      const firstName = this.name.split(" ")
      return firstName[0];
    }


    addTripsForTraveler(trip, destination) {
      this.trips = [];
      const travelerTrips = trip.filter((trip) => {
        return trip.userID === this.id;
      })
      let tripDestination;
      travelerTrips.forEach(trip => {
        destination.forEach(destination => {
          if (trip.destinationID === destination.id) {
            tripDestination = destination;
          }
          return tripDestination;
        })
        this.trips.push(new Trip(trip, tripDestination))
      })
    }


    addTripsToThisYear(trips, date) {
      const currentYear = date.split('/')[0];
      this.trips.forEach((trip) => {
        if (trip.date.includes(currentYear)) {
          this.tripsThisYear.push(trip)
        }
      })
    }


    yearlyTripsTotal() {
      let totalYearlyCost = this.tripsThisYear.reduce((total, trip) => {
        total += trip.calculateTotalCostForOneTrip()
        return total
      }, 0);
      this.totalSpentThisYear = +totalYearlyCost
      return this.totalSpentThisYear.toFixed(0)
    }


}

export default Traveler
