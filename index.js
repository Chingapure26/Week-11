const express = require ('express');
const cors = require('cors')
const app =express();
app.use(cors());
const port = 4000;
let dataUser=[];

app.post('/register', handleRegister)

app.put('/login', handleLogin)
  
function handleRegister(req,res){
    dataUser = req.body;
    res.json({result: 'Data sent'});
}

function handleLogin (){

}
