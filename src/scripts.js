// ######### Imports ###########
//import TravelerRepository from './classes/TravelerRepository';
import Traveler from './classes/Traveler';
import Destination from './classes/Destination';
import Trip from './classes/Trip';
import './css/styles.css';
import './images/turing-logo.png';
import './images/baggage.png';
import { fetchAll } from './apiCalls';

// ######### Query Selectors ###########

const userWelcome = document.querySelector('.user-welcome')


// ######### Global Variables ###########
let travelers;
let travelerData;
let trips;
let destinations;
let singleTraveler;

// ######### On-Load Function ###########

function getRandomUser() {
  return Math.floor(Math.random() * travelers.length)
}


function welcomeUser() {
  userWelcome.innerText = `Welcome back, ${singleTraveler.returnUserName()} !`
}


// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    travelers = data[0].travelers;
    console.log(travelers)
    trips = data[1].trips;
    destinations = data[2].destinations;
    //travelers = new Traveler(travelers);
    singleTraveler = new Traveler(travelers[getRandomUser()]);
    console.log(singleTraveler)
    trips = new Trip(trips);
    destinations = new Destination(destinations);
    welcomeUser()
  })
}

// ######### Event Listeners ###########
window.addEventListener('load', getFetch);


console.log('This is the JavaScript entry file - your code begins here.');
