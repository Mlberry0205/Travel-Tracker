const fetchData = (url) => {
  return fetch(url)
  .then(data => data.json())
}
const fetchAll = () => {
  return Promise.all([fetchData('http://localhost:3001/api/v1/travelers'),
                      fetchData('http://localhost:3001/api/v1/trips'),
                      fetchData('http://localhost:3001/api/v1/destinations')])
}


// const postNewTrip = (newTrip) => {
//   console.log("starting fetch...")
//   return fetch(http:'http://localhost:3001/api/v1/trips', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(newTrip)
//   })
//     .then(response => handleErrors(response))
//     .then(response => response.json())
//     .catch(err => showErrorMessage())
// };
// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   } else {
//   return response;
//   }
// }
// function showErrorMessage() {
//  alert('There was an error!')
// }

export { fetchAll }
