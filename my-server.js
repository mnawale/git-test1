var http = require('http');

http.createServer(function(req,res){
    res.write('Hello,Welcome to the world of NodeJS!');
    res.write('\nMegha Nawale');
    res.end();
    }).listen(3000,function(){
        console.log("Server is running on port 3000");
    });