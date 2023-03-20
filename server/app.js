const express = require('express')
const mongoose = require('mongoose')
const socketio = require('socket.io')
const http = require('http')
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./config/keys')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./helper.js');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });
  
      if(error) return callback(error);
  
      socket.join(user.room);
  
      socket.emit('message', { user: 'Admin', text: `${user.name}, Welcome to Room ${user.room}.`});
      socket.broadcast.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has joined!` });
  
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });
  
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
  
      io.to(user.room).emit('message', { user: user.name, text: message });
  
      callback();
    });
  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
  
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
  });

mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected', ()=>{
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err)=>{
    console.log("Connection Failed to MongoDB", err)
})


require('./models/user')
require('./models/test')
require('./models/atc')
require('./models/assign')
require('./models/request')
require('./models/schedule')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/watson'))
app.use(require('./routes/test'))

if(process.env.NODE_ENV == "production")
{
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



server.listen(PORT, ()=>{
    console.log("Server is running on",PORT)
})

