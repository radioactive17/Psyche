const express = require('express')
const router = express.Router();
const AssistantV2= require("ibm-watson/assistant/v2");
const {IamAuthenticator} = require("ibm-watson/auth");
const {WATSON_ASSISTANT_APIKEY} = require('../config/keys');
const {WATSON_ASSISTANT_URL} = require('../config/keys');
const {WATSON_ASSISTANT_ID} = require('../config/keys');
const requireLogin = require('../middleware/requireLogin')

const authenticator = new IamAuthenticator({
    apikey: WATSON_ASSISTANT_APIKEY,
});

const assistant =  new AssistantV2({
    version: "2021-04-06",
    authenticator: authenticator,
    url: WATSON_ASSISTANT_URL,
});

router.get("/session", async(req,res)=>{
    try {
        const session = await assistant.createSession({
            assistantId: WATSON_ASSISTANT_ID
        })
        res.json(session['result'])
    }
    catch(err){
        res.send("there was an error");
        console.log(err)
    }
});

router.post("/message", async (req, res) => {
    payload = {
      assistantId: WATSON_ASSISTANT_ID,
      sessionId: req.headers.session_id,
      input: {
        message_type: "text",
        text: req.body.input,
      },
    };
  
    // If successs
    try {
      const message = await assistant.message(payload);
      res.json(message["result"]);
  
    } catch (err) {
      res.send("There was an error processing your request.");
      console.log(err);
    }
  });

module.exports = router;
