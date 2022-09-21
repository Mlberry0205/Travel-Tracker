class Traveler {
    constructor(travelers) {
      this.id = travelers.id;
      this.name = travelers.name;
      this.travelerType =travelers.travelerType
      this.trips = []
      this.tripsThisYear = []
    };

    returnUserName() {
      const firstName = this.name.split(" ")
      return firstName[0];
    }

    addMatchingTrips(trips) {
      trips.forEach((trip) => {
        if (trips.userID === this.id) {
          this.trips.push(trip);
        }
      })
    }


    // getCurrentYearApprovedTrips() {
    //   const today = Date.now()
    //   const currentYear = new Date(today).getFullYear
    //   console.log(currentYear)
    // }

    // moneySpentPerYear() {
    //   let tripsYearlyCost = this.
    // }

};


export default Traveler
