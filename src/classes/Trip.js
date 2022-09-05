class Trip {
  constructor(trips) {
    this.id = trips.id;
    this.userID = trips.userID;
    this.travelers = trips.travelers;
    this.date = trips.date;
    this.duration = trips.duration;
    this.status = trips.status;
    this.suggestedActivities = [];
  };
};

export default Trip
