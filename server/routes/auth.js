const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Test = mongoose.model("Test")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../config/keys')
const requireLogin = require('../middleware/requireLogin')
const { post, route } = require('./test')
const Atc = mongoose.model("Atc")
const Assign = mongoose.model("Assign")
const Request = mongoose.model("Request")
const Schedule = mongoose.model("Schedule")

const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")

const Str = require('@supercharge/strings')
const {SENDGRID_ID} = require('../config/keys');


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key: SENDGRID_ID
    }
}))

router.post('/signup', (req,res)=>{
    // age, gender, address, profile pic, phoneno
    const {name,email,password,gender,phoneNo, role} = req.body
    if(!email || !name || !password  || !gender || !phoneNo){
        return res.status(422).json({error:"Please Enter All the Fields"})
    }
    if(email.includes("somaiya.edu"))
    {
        return res.status(422).json({error:"Please use your Gmail ID instead of Somaiya"})
    }
    User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
                return res.status(422).json({error:"User already exists"})
            }
            bcrypt.hash(password, 12)
            .then(hashedpassword=>{
                const user = new User({
                    name:name,
                    email:email,
                    password:hashedpassword,
                    gender:gender,
                    phoneNo:phoneNo,
                    role:role
                })
                user.save()
                    .then(user=>{
                        transporter.sendMail({
                            to: JSON.stringify(user.email),
                            from:"no.reply.psychee@gmail.com",
                            subject:"Signup Successful",
                            html:"Hi " + user.name + ", <br/> You have successfully been registered on our Mental Health Application - Psyche. <br/><br/> Here is the link of our application: <a href='psychee.herokuapp.com'>Psyche</a>"
                        })
                        res.json({message:"Registered Successfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })     
            })
            .catch(err =>{
                console.log(err)
            })
})

router.post('/signin', (req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please Enter All Fields "})
    }
    User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.status(422).json({error:"Invalid Credentials"})
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch=>{
                    if(doMatch){
                        // res.json({message:"Successfully Signed In"})
                        const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                        const {_id,name,email,role} = savedUser
                        res.json({token:token,user:{_id,name,email,role}})

                    }
                    else{
                        return res.status(422).json({error:"Invalid Credentials"})
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        })
})


router.get('/studentprofile', requireLogin, (req,res)=>{
    testDetails = 0
    Test.find({takenBy: req.user._id})
    .populate("takenBy", "_id")
    .then(testDetails=>{
        User.find({_id:req.user._id})
        .populate("_id","_id name email age gender address phoneNo")
        .then(details=>{
            res.json({details, testDetails})
        })
        .catch(err=>{
            console.log(err)    
        })
    })
    .catch(err=>{
        console.log(err)    
    })
})


router.post('/add', requireLogin, (req,res)=>{
    // age, gender, address, profile pic, phoneno
    const {name,email,password, gender,phoneNo, role} = req.body
    if(!email || !name || !password || !gender  || !phoneNo){
        return res.status(422).json({error:"Please Enter All the Fields"})
    }
    User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
                return res.status(422).json({error:"User already exists"})
            }
            bcrypt.hash(password, 12)
            .then(hashedpassword=>{
                const user = new User({
                    name:name,
                    email:email,
                    password:hashedpassword,
                    gender:gender,
                    phoneNo:phoneNo,
                    role:role
                })
                user.save()
                    .then(user=>{
                        res.json({message:"Psychiatrist Added Successfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })     
            })
            .catch(err =>{
                console.log(err)
            })
})


router.get('/psychiatristprofile', requireLogin, (req,res)=>{
    testDetails = 0
    Test.find({takenBy: req.user._id})
    .populate("takenBy", "_id")
    .then(testDetails=>{
        User.find({_id:req.user._id})
        .populate("_id","_id name email age gender address phoneNo")
        .then(details=>{
            Assign.find({p_email: req.user.email})
            .then(assigndetails=>{
                res.json({details, testDetails, assigndetails})
                 })
             .catch(err=>{
                  console.log(err)    
            })
        })
        .catch(err=>{
            console.log(err)    
        })
    })
    .catch(err=>{
        console.log(err)    
    })
})

router.post('/assign', requireLogin, (req,res)=>{
    const {p_name,p_email,s_name,s_email} = req.body
    if(!p_name || !p_email || !s_name || !s_email){
        return res.status(422).json({error:"Please Enter All the Fields"})
    }
    Assign.findOne({s_email:s_email})
        .then((savedUser)=>{
            if(savedUser){
                return res.status(422).json({error:"Student has already been assigned a psychiatrist"})
            }
            let roomCode = Str.random(5)
            const assign = new Assign({
                p_name,
                p_email,
                s_name,
                s_email,
                room_code: roomCode
            })
            assign.save()
            .then(result=>{
                transporter.sendMail({
                    to: JSON.stringify(s_email),
                    from:"no.reply.psychee@gmail.com",
                    subject:"Successfull Assignment of Psychiatrist",
                    html:"Hi "+s_name+ ", <br /><br /> Following are the details of the Psychiatrist assigned to you: <br /> Name: "+ p_name+ "<br /> Email: " + p_email + " <br/><br/> You can now click on the Psychiatrist button on the navbar and directly join the chatroom with the Psychiatrist."
                })

                transporter.sendMail({
                    to: JSON.stringify(p_email),
                    from:"no.reply.psychee@gmail.com",
                    subject:"Successfull Assignment of Student",
                    html:"Hi "+p_name+ ", <br /><br /> Following are the details of the Student assigned to you: <br /> Name: "+ s_name+ "<br /> Email: " + s_email + " <br/>Room Code:"+roomCode
                })
                res.json({assign:result})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err =>{
            console.log(err)
    })
})


router.post('/atc', requireLogin, (req,res)=>{
    // age, gender, address, profile pic, phoneno
    const {AutomaticThought, YourChallenge, AlternativeThought,  Feeling} = req.body
    if(!AutomaticThought) {
        return res.status(422).json({error:"No Text Received"})
    }
    req.user.password = undefined
    const atc = new Atc({
        AutomaticThought,
        YourChallenge,
        AlternativeThought,
        Feeling,
        takenBy: req.user
    })
    atc.save().then(result=>{
        res.json({atc:result})
    })
    .catch(err=>{
        console.log(err)
    })
    
})


router.get('/getatc', requireLogin, (req,res)=>{
    Atc.find({takenBy: req.user._id})
    .populate("takenBy", "_id")
    .then(details=>{
        res.json({details})
         })
     .catch(err=>{
          console.log(err)    
    })
})

router.get('/allatc', requireLogin, (req,res)=>{
    Atc.find()
    .populate("takenBy", "_id name")
    .then(details=>{
        res.json({details})
         })
     .catch(err=>{
          console.log(err)    
    })
})



router.get('/allusers', requireLogin, (req,res)=>{
    User.find()
    .then(details=>{
        res.json({details})
         })
     .catch(err=>{
          console.log(err)    
    })
})

router.get('/allusers', requireLogin, (req,res)=>{
    User.find()
    .then(details=>{
        res.json({details})
         })
     .catch(err=>{
          console.log(err)    
    })
})


router.get('/studentroom', requireLogin, (req,res)=>{
    testDetails = 0
    Test.find({takenBy: req.user._id})
    .populate("takenBy", "_id")
    .then(testDetails=>{
        User.find({_id:req.user._id})
        .populate("_id","_id name email age gender address phoneNo")
        .then(details=>{
            Assign.find({s_email: req.user.email})
            .then(assigndetails=>{
                res.json({details, testDetails, assigndetails})
                 })
             .catch(err=>{
                  console.log(err)    
            })
        })
        .catch(err=>{
            console.log(err)    
        })
    })
    .catch(err=>{
        console.log(err)    
    })
})

router.post('/requestPsych', requireLogin, (req,res)=>{
    Request.findOne({takenBy: req.user})
    .populate("takenBy", "_id name email")
    .then((savedUser) => {
        if(savedUser) {
            return res.status(422).json({error:"Request for a Psychiatrist has already been sent!"})
        }
        const request = new Request({
            takenBy: req.user
        })
        request.save()
        .then(user=>{
            transporter.sendMail({
                to: "no.reply.psychee@gmail.com",
                from:"no.reply.psychee@gmail.com",
                subject:"Request for Psychiatrist",
                html:"Dear Admin, <br /><br /> Following are the details of the Student to whom a Psychiatrist is to be assigned. <br /> Name: "+ req.user.name+ "<br /> Email: " + req.user.email
            })
            res.json({message:"Successfull"})
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err =>{
        console.log(err)
    })
})


router.post('/confirmSchedule', requireLogin, (req,res)=>{
    const {p_name, p_email, s_email, datetime} = req.body
    Schedule.findOne({datetime:datetime})
    .then((savedTime) => {
        console.log(savedTime)
        if(savedTime) {
            return res.status(422).json({error:"Schedule for a Psychiatrist has already been sent!"})
        }
    
    User.findOne({email:s_email})
    .then((savedUser) => {
        const schedule = new Schedule({
            p_name: p_name,
            p_email: p_email,
            s_name: savedUser.name,
            s_email: s_email,
            datetime: datetime
        })
        schedule.save()
        .then(user=>{
            transporter.sendMail({
                to: JSON.stringify(p_email),
                from:"no.reply.psychee@gmail.com",
                subject:"Schedule for Student Session",
                html:"Hi "+p_name+ ", <br /><br /> Following are the details of the Session with your Student: <br /><br /> Name: "+ savedUser.name+ "<br /> Email: " + s_email + " <br/>Date and Time:(YYYY-MM-DD)"+datetime
            })
            transporter.sendMail({
                to: JSON.stringify(s_email),
                from:"no.reply.psychee@gmail.com",
                subject:"Schedule for Psychiatrist Session",
                html:"Hi "+savedUser.name+ ", <br /><br /> Following are the details of the Session with your Psychiatrist: <br /><br /> Name: "+ p_name+ "<br /> Email: " + p_email + " <br/>Date and Time:(YYYY-MM-DD)"+datetime
            })
            res.json({message:"Successfull"})
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
    .catch(err =>{
        console.log(err)
    })
})


module.exports = router