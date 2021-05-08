const express = require ('express');
const cors = require('cors')
const app =express();
app.use(express.json());
app.use(cors());
const port = 4000;
app.use(express.static('public'));

app.post('/register', handleRegister)
  
function handleRegister(req,res){
 
    const UserRegist = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    console.log(UserRegist);
    res.json({result: 'Data sent'});
    
}

function handleLogin (req,res){
    
    const UserLogin = {
        email: req.body.email,
        password: req.body.password,
    };
    if (UserLogin.email && UserLogin.password){
        console.log("ok");
        return res.json({result:'User data found successfully'});
    }else{
        return res.json({message:'User data does not found'});
    }
}


app.put('/login', handleLogin)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})