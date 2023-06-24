const express = require('express');
const app = express();
const port = 8000;
app.use('/',require('./route'));
app.listen(port,(err)=>
{
    if(err){
        console.log(`Error while running the server ${err}`);
    }
    console.log(`server is up and running on port ${port}`);
});
