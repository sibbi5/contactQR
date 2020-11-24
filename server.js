// "start": "node server.js"
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const https = require('https');
// var cytoscape = require('cytoscape');
// const Instascan = require('instascan');

// const port = 3000;

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/auth/google/callback",function(req, res) {
  console.log("Request is pringting");
  console.log(req.query.name);
  console.log(req.query.url);
  https.get(req.query.url+"&user="+req.query.id, (response) => {
    let data = "";
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log("Before printing res json");
      console.log(data);
    });

  })
  .on('error', (error) => {
    console.log(error);
  });
  
  console.log("After printing after res json");
  res.send();
}
)



app.listen(port);
console.log("Listening on port ", port);