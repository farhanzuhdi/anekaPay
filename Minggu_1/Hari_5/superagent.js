const superagent = require('superagent'); // instal => npm install superagent@3.5.2

superagent.get('https://api.nasa.gov/planetary/apod')
.query({api_key: 'DEMO_KEY', date: '2017-08-02'})
.end((err, res) => {
    if(err){return console.log(err);}
    console.log(res.body.url);
    console.log(res.body.explanation);
});