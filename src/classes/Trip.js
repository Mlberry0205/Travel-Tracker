import Destination from './Destination';
import  dayjs from 'dayjs'
dayjs().format();

class Trip {
  constructor(trip, destinationInfo) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID
    this.numberOfTravelers = trip.travelers;
    this.date = trip.date;
    this.tripDuration = trip.duration;
    this.tripEndDate;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.totalTripCost = 0;
    this.destinationInfo = destinationInfo;
  };

  calculateTripEndDate() {
    const tripStart = dayjs(this.date).format('YYYY/MM/DD')
    this.tripEndDate = dayjs(tripStart).add(this.tripDuration, 'days').format('YYYY/MM/DD')
  }

  updatePastTrips(today) {
    this.calculateTripEndDate()
    const pastTrips = dayjs(this.date).format('YYYY/MM/DD')
    if (dayjs(this.tripEndDate).isBefore(today)) {
      this.status = 'past trip';
    } else if (dayjs(upcomingTrips).isAfter(today) && this.status === 'approved') {
      this.status = 'upcoming Trip';
    }

    console.log('pastTrip', this.status)
    return this.status
  }


  updatePendingTrips() {
    this.calculateTripEndDate()
    const pendingTrips = dayjs(this.date).format('YYYY/MM/DD')
    if (this.status === 'pending') {
      this.status = 'trip pending'
    }
    console.log('pending', this.status)
    return this.status
  }
  

  calculateTotalCostForOneTrip() {
    const lodgingCost = this.destinationInfo.estimatedLodgingCostPerDay * this.tripDuration;
    const flightCost = this.destinationInfo.estimatedFlightCostPerPerson * this.numberOfTravelers;
    const totalCost = (lodgingCost + flightCost) * 1.1
    this.totalTripCost = totalCost
    return this.totalTripCost;
  }
};

export default Trip
