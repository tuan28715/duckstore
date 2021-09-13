const express = require('express'); 
const server = express(); 
const cors = require('cors');
server.use(express.json());
server.use(cors());

//route
const productRoute = require('./server/route/product.route');
server.use('/api/product', productRoute);

//angular
server.use(express.static(__dirname + '/dist/store'));

server.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/store/index.html'));
});
//start server
server.listen(process.env.PORT || 3000, function(){
    console.log("Your app running on port 3000");
})