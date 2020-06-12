const express = require('express');
const User = require('./User');
const route = express.Router();
const bcrypt=require('bcrypt')
const MongoClient=require('mongodb').MongoClient



route.post('/', async (req, res) => {
  const salt=await bcrypt.genSalt()

  const { login, pass} = req.body;
  let user = {};
  user.login = login
  user.pass = await bcrypt.hash(pass,salt);
  user.data=new Date()
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get('/', (req,res)=>{
 User.find({})
 .exec((err,users)=>{
   if(err){
     console.log(err)
   }else{
     res.json(users)
     res=users
   }
 })
  });
module.exports = route;