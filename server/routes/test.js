const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Test = mongoose.model("Test")
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))

router.post('/test1', requireLogin, (req,res)=>{
    const {score,testName,results,info} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 1,
        score,
        testName,
        takenBy: req.user
    })
    test.save().then(result=>{
        transporter.sendMail({
            to: JSON.stringify(result.takenBy.email),
            from:"no.reply.psychee@gmail.com",
            subject: testName + " Result",
            html:"Hi " + result.takenBy.name + ", <br/> You have successfully taken the " +testName+ ". <br/><br/> Your score is " + score + ". <br/><br/>" + results + "<br/><br/> " + info 
        })
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test2', requireLogin, (req,res)=>{
    const {score,testName,results,info} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 2,
        score,
        testName,
        takenBy: req.user
    })
    test.save().then(result=>{
        transporter.sendMail({
            to: JSON.stringify(result.takenBy.email),
            from:"no.reply.psychee@gmail.com",
            subject: testName + " Result",
            html:"Hi " + result.takenBy.name + ", <br/> You have successfully taken the " +testName+ ". <br/><br/> Your score is " + score + ". <br/><br/>" + results + "<br/><br/> " + info 
        })
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test3', requireLogin, (req,res)=>{
    const {score,testName,results,info} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 3,
        score,
        testName,
        takenBy: req.user
    })
    test.save().then(result=>{
        transporter.sendMail({
            to: JSON.stringify(result.takenBy.email),
            from:"no.reply.psychee@gmail.com",
            subject: testName + " Result",
            html:"Hi " + result.takenBy.name + ", <br/> You have successfully taken the " +testName+ ". <br/><br/> Your score is " + score + ". <br/><br/>" + results + "<br/><br/> " + info 
        })
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test4', requireLogin, (req,res)=>{
    const {score,testName,results,info} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 4,
        score,
        testName,
        takenBy: req.user
    })
    test.save().then(result=>{
        transporter.sendMail({
            to: JSON.stringify(result.takenBy.email),
            from:"no.reply.psychee@gmail.com",
            subject: testName + " Result",
            html:"Hi " + result.takenBy.name + ", <br/> You have successfully taken the " +testName+ ". <br/><br/> Your score is " + score + ". <br/><br/>" + results + "<br/><br/> " + info 
        })
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/test5', requireLogin, (req,res)=>{
    const {score,testName,results,info} = req.body
    if(score<0) {
        return res.status(422).json({error:"No Score Received"})
    }
    req.user.password = undefined
    const test = new Test({
        testId: 5,
        score,
        testName,
        takenBy: req.user
    })
    test.save().then(result=>{
        transporter.sendMail({
            to: JSON.stringify(result.takenBy.email),
            from:"no.reply.psychee@gmail.com",
            subject: testName + " Result",
            html:"Hi " + result.takenBy.name + ", <br/> You have successfully taken the " +testName+ ". <br/><br/> Your score is " + score + ". <br/><br/>" + results + "<br/><br/> " + info 
        })
        res.json({test:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/alltests', requireLogin, (req,res)=>{
    Test.find()
    .populate("takenBy", "_id name age phoneNo gender")
    .then(details=>{
        res.json({details})
         })
     .catch(err=>{
          console.log(err)    
    })
})

module.exports = router