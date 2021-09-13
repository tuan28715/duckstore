const express = require('express'); 
const server = express(); 
const cors = require('cors');
server.use(express.json());

server.use(cors())

// Serve only the static files form the dist directory
server.use(express.static(__dirname + '/dist/store'));

server.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/store/index.html'));
});

server.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/store/index.html'));
});
//start server
server.listen(process.env.PORT || 3000, function(){
    console.log("Your app running on port 3000");
})