"use strict";
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(require('express').static(__dirname + '/public'));

const userList = new Set();
io.on('connection', (socket) => {
    console.log('user connected');

    socket.emit('userList', Array.from(userList));
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('news', (nickName) => {
        socket.nickName = nickName;
        userList.add(nickName);
        io.emit('news', nickName);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');

        io.emit('disconnect', socket.nickName);
        userList.delete(socket.nickName);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

