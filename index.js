const express = require('express'); 
const server = express(); 
const cors = require('cors');
server.use(express.json());
server.use(cors());

//route
const productRoute = require('./server/route/product.route');
const userRoute = require('./server/route/user.route');

server.use('/api/product', productRoute);
server.use('/api/user', userRoute);

// Serve only the static files form the dist directory
server.use(express.static(__dirname + '/dist/store'));

server.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/store/index.html'));
});

// (function wakeup() {
//   require('open')('https://duckstore.herokuapp.com/', (err) => {
//     if (err) throw err;
//     console.log('Woke up!');
//     setTimeout(wakeup, 1740000); //29m
//   });
// })()

server.listen(process.env.PORT || 3000, function(){
    console.log("Your app running on port 3000");
})