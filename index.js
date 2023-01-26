const express = require("express")


const app = express();

app.get('/',(req,res)=>{
    res.send('Assadathon');
});

app.get('/users',(req,res)=>{
    res.send('Show all users');
});

app.listen(3000,() =>
console.log('Server Started'),
);