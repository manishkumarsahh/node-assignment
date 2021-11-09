
const express = require('express');

const port = process.env.PORT ||  8000;

const app = express();

const db=require('./config/mongoose');

const User = require('./models/user');


const db=require('./config/mongoose');


app.use(express.urlencoded({extended:true}));


//Add user to the database
app.post('/addUser', async function(req,res){

    try{
        let userLists = await Books.create({
            name:req.body.name,
            username:req.body.username,
            password:req.body.password,
        });
        res.status(200).send(userLists);
    }catch(err){
        res.status(400).send('error');
         next();
    }

    
});

      
   //get all user
app.get('/getAllUser', async function(req,res){

    try{
        let userLists = '';
        
        userLists = await  User.find({}); 
        
        
        
        res.status(200).send(userLists);
    }catch(err){
        res.status(400).send('error');
        
    }

    
});

      //get user by id
app.get('/getUserById', async function(req,res){

    try{
        let userLists = await User.find({_id:req.body.id});
        res.status(200).send(userLists);
    }catch(err){
        res.status(400).send('error');
        next();
    }

    
});

      //delete user by id
app.delete('/deleteById', async function(req,res){

    try{
        let userLists = await User.findOneAndDelete({_id:req.body.id});
        res.status(200).send('deleted succesfully');
    }catch(err){
        res.status(400).send('error');
        next();
    }

    
});


//update user details by ids
app.put('/updateUserById', async function(req,res){

    try{
        let userLists = await User.findOneAndUpdate({_id:req.body.id},{
        
            username:req.body.username,
            name:req.body.name
        });
        res.status(200).send('updated');
    }catch(err){
        res.status(400).send('error');
         next();
    }

    
});




app.listen(port,function(err){
    if(err){
        console.log('error in running server ',err  );
    }
    console.log('yup my server is running on port',port);


});