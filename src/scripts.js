// ######### Imports ###########
//import TravelerRepository from './classes/TravelerRepository';
import Traveler from './classes/Traveler';
import Destination from './classes/Destination';
import Trip from './classes/Trip';
import './css/styles.css';
import './images/turing-logo.png';
import './images/baggage.png';
import { fetchAll } from './apiCalls';
import  dayjs from 'dayjs'
dayjs().format();

// ######### Query Selectors ###########
const userWelcome = document.querySelector('.user-welcome')
const travelerMoneySpent = document.querySelector('#travelerMoney')
const formDestination = document.getElementById("travelerDestination")
const formDepartureDate = document.getElementById("travelerDeparture")
const formTripDuration = document.getElementById("travelerDuration")
const formNumTravelers = document.getElementById("numTravelers")
const addTripButton = document.getElementById('adventureButton')
const loginButton = document.querySelector('.login-button')

// ######### Global Variables ###########
let travelers;
let travelerData;
let trips;
let destinations;
let singleTraveler;
let trip1;
let traveler1;
let currentTraveler;
const todaysDate = dayjs().format('YYYY/MM/DD');
const currentYearStart = dayjs().startOf('year').format('YYYY/MM/DD')

// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    travelers = data[0].travelers;
    trips = data[1].trips;
    destinations = data[2].destinations;
    // singleTraveler = new Traveler(travelers[getRandomUser()]);
    singleTraveler = new Traveler(travelers[0]);
    // trip1 = new Trip(trips[singleTraveler.id], destinations[singleTraveler.id])
    welcomeUser()
    singleTraveler.addTripsForTraveler(trips, destinations)
    singleTraveler.addTripsToThisYear(trips, currentYearStart)
    displayYearlyFunds()
    displayTrips(trips)
    showDestinations()


  })
}

// ######### On-Load Function ###########

function getRandomUser() {
  return Math.floor(Math.random() * travelers.length)
}

function welcomeUser() {
  userWelcome.innerText = `Welcome back, ${singleTraveler.returnUserName()} !`
}

function displayTrips() {
  // trip1.updatePastTrips(todaysDate)
  // trip1.updatePendingTrips(todaysDate)
  const travelersTripsDisplayed = document.querySelector('.destination-pic-box')
  const results = singleTraveler.trips.map(trip => {
    return `
      <h3 class="trip-destination">${trip.destinationInfo.destination}</h3>
       <img alt="photo of your trip" class="destination-pic-box" src=${trip.destinationInfo.image}
       <p tabindex="9" class="card-text trip-date">Date: ${trip.date}</p>
       <p tabindex="10" class="card-text trip-duration">Duration: ${trip.tripDuration} days</p>
       <p tabindex="11" class="card-text trip-participants">Travelers: ${trip.numberOfTravelers}</p>
       <p tabindex="12" class="card-text trip-status">Status: ${trip.status}</p>
    `
  })

  return travelersTripsDisplayed.innerHTML = results
}

function displayYearlyFunds(travelerData) {
  travelerMoneySpent.innerHTML = singleTraveler.yearlyTripsTotal()
}

// function loginTraveler() {
//     let userName = usernameInput.value;
//     if (userName.length < 8) {
//       return;
//     }
//     let userPassword = passwordInput.value;
//     let userId = userName.substr(8, userName.length);
//     let parsedId = parseInt(userId);
//     if (isNaN(parsedId)) {
//       console.log('username is invalid type!');
//       return;
//     }
//     if (userPassword !== 'travel') {
//       console.log('Invalid password entry!');
//       return;
//     }
//     console.log('password correct!');
//     traveler = travelersRepo.getTravelerInfoById(parsedId);
//     if (traveler === undefined) {
//       console.log('traveler ID is invalid');
//       return;
//     }
//     onLoginSuccess();
//   };

// ######### Add Destinations to Form Function & POST ###########

function showDestinations() {
   const destinationSelection = document.querySelector('.destination-entry-selection')
   const destinationOptions = destinations.map(option => {
        return `<option> ${option.destination} </option>`
    })
    destinationSelection.innerHTML = `
    <form>
    <label for="destination-selection">Select Destination:</label>
    <select id="select-destination" name="destination-selection" class="destination-entry-selection" required>
    ${destinationOptions}
    </select>
    </form>
    `
}

const postNewTrip = () => {
  //event.preventDefault()
  const findDestination = destinations.find(destination => destination.destination === formDestination.value)
  let tripToPost = {
        id: Date.now(),
        userID: singleTraveler.id,
        destinationID: findDestination.id,
        travelers: Number(formNumTravelers.value),
        date: dayjs(formDepartureDate.value).format('YYYY/MM/DD'),
        duration: Number(formTripDuration.value),
        status: "pending",
        suggestedActivities: []
    }
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: tripToPost.id,
      userID: tripToPost.userID,
      destinationID: tripToPost.destinationID,
      travelers: tripToPost.travelers,
      date: tripToPost.date,
      duration: tripToPost.duration,
      status: tripToPost.status,
      suggestedActivities: []
    })
  })
    .then(response => handleErrors(response))
    .then(response => response.json())
    .then((response) => {
          getFetch()
          })
    //.catch(err => showErrorMessage())
};
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
  return response;
  }
}
// function showErrorMessage() {
//  alert('There was an error!')
// }

function bookNewTrip(event) {
  event.preventDefault();
  //const newTripInfo = getFormInputValues()
  //const newTravelerTrip = new Trip(newTripInfo);
  postNewTrip()
}
window.addEventListener('load', getFetch);
addTripButton.addEventListener('click', bookNewTrip);
console.log('This is the JavaScript entry file - your code begins here.');
