// "start": "node server.js"
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
// const port = 3000;

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

//Server end point for getting message
app.get('/messages', function(req,res){
  retreiveMessages(req,res);

});

let collectionMessage;
const uri = "mongodb+srv://assignment1:SIT725@assignment1.5cgvp.mongodb.net/spotifydb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  collectionMessage = client.db("spotifyDB").collection("spotify");
  // perform actions on the collection object
  // collectionMessage.insert({_id:5,message:'Memories is a song by American pop rock band Maroon 5. Released on September 20, 2019'})
  // client.close();
});

//retreivemessage funtion for DB
const retreiveMessages=(req,res)=>{
  let id = parseInt(req.query.id);
  collectionMessage.find({_id : id }).toArray(function(err,result){   
    if (err) throw err;
    res.send(result)
  })
}

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
