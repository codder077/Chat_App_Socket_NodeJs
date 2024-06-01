const express = require('express');
const http = require('http');
const socketio = require('socket.io');

// const connect = require('./config/database-config');

// const Chat = require('./models/chat');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("user",socket.id);
});
app.use('/', express.static(__dirname + '/public'));

server.listen(3000, async () => {
    console.log('Server started');
});