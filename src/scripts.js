// ######### Imports ###########
import Traveler from './classes/Traveler';
import Destination from './classes/Destination';
import Trip from './classes/Trip';
import './css/styles.css';
import './images/baggage.png';
import { fetchAll } from './apiCalls';
import  dayjs from 'dayjs'
dayjs().format();

// ######### Query Selectors ###########
const userWelcome = document.querySelector('.user-welcome');
const travelerMoneySpent = document.querySelector('#travelerMoney');
const formDestination = document.getElementById("travelerDestination");
const formDepartureDate = document.getElementById("travelerDeparture");
const formTripDuration = document.getElementById("travelerDuration");
const formNumTravelers = document.getElementById("numTravelers");
const addTripButton = document.getElementById('adventureButton');
const loginButton = document.querySelector('.login-button');
const formView = document.querySelector('.form-view');
const userInformation = document.querySelector('.user-information');
const mainSection = document.querySelector('.main-section');
const loginContainer = document.querySelector('.login-in-container');
const travelerName = document.querySelector('.client-name-input');
const travelerPassword = document.querySelector('.client-password-input');
const loginError = document.querySelector('#login-error');

// ######### Global Variables ###########
let travelers;
let travelerData;
let trips;
let destinations;
let singleTraveler;
let todaysDate = dayjs().format('YYYY/MM/DD');
let currentYearStart = dayjs().startOf('year').format('YYYY/MM/DD');

// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    travelers = data[0].travelers;
    trips = data[1].trips;
    destinations = data[2].destinations;
    verifyLogin();
  })
}

// ######### On-Load Function ###########
function loadTravelerPage(travelers, trips, destinations) {
  let userID = parseInt(travelerName.value.slice(8, travelerName.value.length))
  singleTraveler = new Traveler(travelers[userID - 1]);
  singleTraveler.addTripsForTraveler(trips, destinations);
}

function displayTravelerPage() {
  welcomeUser();
  singleTraveler.addTripsToThisYear(trips, currentYearStart);
  displayYearlyFunds();
  displayTrips(trips);
  showDestinations();
  show(formView);
  show(userInformation);
  show(mainSection);
  hide(loginContainer);

}

function welcomeUser() {
  userWelcome.innerText = `Welcome back, ${singleTraveler.returnUserName()} !`
}

function displayTrips() {
  const travelersTripsDisplayed = document.querySelector('.destination-pic-box');
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
  travelerMoneySpent.innerHTML = singleTraveler.yearlyTripsTotal();
}

const verifyLogin = (event) => {
      if (travelerName.value === "" || travelerPassword.value === "") {
        loginError.innerText = `PLEASE SUBMIT BOTH USERNAME AND PASSWORD!`;
      } else if (travelerPassword.value !== "travel") {
        loginError.innerText = `INCORRECT PASSWORD!`;
      } else if (!travelerName.value.includes("traveler")) {
        loginError.innerText = `USERNAME DOES NOT EXIST! PLEASE TRY AGAIN.`;
      } else {
        loginError.innerText = '';
         loadTravelerPage(travelers, trips, destinations);
         displayTravelerPage();
         displayYearlyFunds(travelerData);
         displayTrips();
         showDestinations();
      };
    };

// ######### Add Destinations to Form Function & POST ###########
function showDestinations() {
   const destinationSelection = document.querySelector('.destination-entry-selection');
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
  const findDestination = destinations.find(destination => destination.destination === formDestination.value);
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
  .then((response) => {
          if (!response.ok) {
            throw new Error(
              "There was an error adding your Trip Information, please retry later"
            );
          } else {
            return response.json();
          }
        })
    .then((response) => {
          getFetch()
          })
    .catch((err) => {
      postErrorMessage.innerText = 'Error updating data, please retry later'
    });
  }

function bookNewTrip(event) {
  event.preventDefault();
  postNewTrip();
}

window.addEventListener('load', getFetch);
addTripButton.addEventListener('click', bookNewTrip);
loginButton.addEventListener('click', verifyLogin);

const show = (event) => event.classList.remove("hidden");
const hide = (event) => event.classList.add("hidden");
