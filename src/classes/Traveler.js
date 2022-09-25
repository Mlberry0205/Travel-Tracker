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

    addTripsToMyTripsArray(trips) {
      trips.forEach((trip) => {
        if (trip.userID === this.id) {
          this.trips.push(trip);
        }
      })
      return this.trips
    }

    addTripsForTraveler(tripData, destinationData) {
      const travelerTrips = tripData.filter((trip) => {
        return trip.userID === this.id
      })
      let tripDestination;
      travelerTrips.forEach(trip => {
        destinationData.forEach(destination => {
          if (trip.destinationID === destination.id) {
            tripDestination = destination;
          }
          return tripDestination;
        })
        this.trips.push(new Trip(trip, tripDestination))
        console.log('hey', this.trips)
      })
    }



    addTripsToThisYear(trips, yearStart) {
      //console.log('33', yearStart)
      const currentYear = yearStart.split('-')[0];
      this.addTripsToMyTripsArray(trips).filter((trip) => {
        //console.log('hey', !this.tripsThisYear.includes(trip) )

      if (trip.date.split('/')[0] === '2022') {
          this.tripsThisYear.push(trip)
        }
      })
        return this.tripsThisYear
    }

    // getTripsTaken() {
    //   const approved = this.trips.filter((trip) => trip.status === 'approved')
    //   return approved.length
    // }

    yearlyTripsTotal() {
      let totalYearlyCost = this.tripsThisYear.reduce((total, trip) => {
        total += trip.calculateTotalCostForOneTrip()
        return total
      }, 0);
      this.totalSpentThisYear = +totalYearlyCost
      return this.totalSpentThisYear
    }


}






export default Traveler
