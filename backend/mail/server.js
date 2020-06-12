const express=require('express')
const app=express();
const bcrypt=require('bcrypt')
var cors = require('cors');
const connectDB =require('./Connection')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

connectDB()
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./API'));
app.use('/data', require('./API'));

// app.get('/',(req,res)=>{
//     const custumer=[
//         {id: '1', email: 'torosyan252@gmail.com', password: '123456'}
//     ]
//     res.json(custumer)
// })
// app.post('/', async (req, res) => {
//   // const today = new Date()
//   // const userData = {
//   //   login: req.body.first_name,
//   //   pass: req.body.last_name,
//   //   // email: req.body.email,
//   //   // password: req.body.password,
//   //   // created: today
//   // }
//   // console.log(userData)
//   // res.json(userData)
//   // if(true){
//   //   res.status(200).send({
//   //     massage: 'yes'
//   //   })
//   // }
//   // eslint-disable-next-line no-use-before-define

//   let result =user.find(user=>user.login===req.body.login)
//   const salt=await bcrypt.genSalt()
//   const hasedPssword= await bcrypt.hash(req.body.login,salt)
//   console.log(salt)
//   console.log(hasedPssword)

// if(result){

//   res.status(200).send({
//     msg: hasedPssword
//   })
// }else{
  
//   res.status(200).send({
//     msg: 'invalid login'
//   })
// }
// })

const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));