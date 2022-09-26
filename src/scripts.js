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
//const daysTraveled = document.querySelector('.days-traveled')


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
    singleTraveler = new Traveler(travelers[getRandomUser()]);
    welcomeUser()
    singleTraveler.addTripsForTraveler(trips, destinations)
    singleTraveler.addTripsToThisYear(trips, currentYearStart)
    displayYearlyFunds()
    displayTrips(trips)
  })
}

// ######### On-Load Function ###########

function getRandomUser() {
  return Math.floor(Math.random() * travelers.length)
}


function welcomeUser() {
  userWelcome.innerText = `Welcome back, ${singleTraveler.returnUserName()} !`
}

function displayTrips(trips) {
  const travelersTripsDisplayed = document.querySelector('.destination-pic-box')
  const results = singleTraveler.trips.map(trip => {
    return `
      <h3 class="trip-destination">${trip.destinationInfo.destination}</h3>
       <img class="destination-pic-box" src=${trip.destinationInfo.image}
       <p class="card-text trip-date">Date: ${trip.date}</p>
       <p class="card-text trip-duration">Duration: ${trip.tripDuration} days</p>
       <p class="card-text trip-participants">Travelers: ${trip.numberOfTravelers}</p>
       <p class="card-text trip-status">Status: ${trip.status}</p>
    `
  })

  return travelersTripsDisplayed.innerHTML = results
}

function displayYearlyFunds(travelerData) {
  travelerMoneySpent.innerHTML = singleTraveler.yearlyTripsTotal()
}


// ######### Event Listeners ###########
window.addEventListener('load', getFetch);

// const dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format()

console.log('This is the JavaScript entry file - your code begins here.');
