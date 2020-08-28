const axios = require('axios'); // install => npm install axios@0.16.2

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response =>{
    console.log(response.data.url);
    console.log(response.data.explanation);
})
.catch(error => {
    console.log(error);
});

axios.all([
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017=08=03'),
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017=08=02')
]).then(axios.spread((response1, response2) => {
    console.log(response1.data.url);
    console.log(response2.data.url);
})).catch(error => {
    console.log(error);
})