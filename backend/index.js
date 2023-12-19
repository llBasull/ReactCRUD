const express = require('express')
const mongoose =require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/Users')

const app= express();

app.use(cors());
app.use(express.json())

app.listen(3001,()=>{
    console.log('server is running');
});

mongoose.connect("mongodb://127.0.0.1:27017/CRUDproject")



app.post('/createuser', (req, res) => {
    const user = UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(e => res.json(e));
});

app.get('/',(req,res)=>{
    UserModel.find({}).then(users=>res.json(users)).catch(err=>res.json(err));
})
