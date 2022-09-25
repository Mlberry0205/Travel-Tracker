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
const travelerMoneySpent = document.querySelector('.money-spent')
const daysTraveled = document.querySelector('.days-traveled')


// ######### Global Variables ###########
let travelers;
let travelerData;
let trips;
let destinations;
let singleTraveler;
let trip1;
const todaysDate = dayjs().format('YYYY-MM-DD');
const currentYearStart = dayjs().startOf('year').format('YYYY-MM-DD')

// ######### On-Load Function ###########

function getRandomUser() {
  return Math.floor(Math.random() * travelers.length)
}


function welcomeUser() {
  userWelcome.innerText = `Welcome back, ${singleTraveler.returnUserName()} !`
}

function displayTravelersMoneySpent() {
  travelerMoneySpent.innerText = `You have spent, ${trip1.calculateTotalCostForOneTrip()}`
}

// function displayTravelDays() {
//   daysTraveled.innerText = `You have traveled ${singleTraveler.getDaysTraveled()} total days`
// }


// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    travelers = data[0].travelers;
    trips = data[1].trips;
    destinations = data[2].destinations;
    //trip1 = new Trip(tripData[2], destinationData[21])
    //travelers = new Traveler(travelers);
    singleTraveler = new Traveler(travelers[getRandomUser()]);
    console.log(singleTraveler)
    trips = new Trip(trips);
    destinations = new Destination(destinations);
    welcomeUser()
    displayTravelersMoneySpent()
    displayTravelDays()
  })
}

// ######### Event Listeners ###########
window.addEventListener('load', getFetch);

// const dayjs = require('dayjs')
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format()

console.log('This is the JavaScript entry file - your code begins here.');
