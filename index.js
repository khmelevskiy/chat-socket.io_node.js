var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(require('express').static(__dirname + '/public'));

const userList = new Set();
io.on('connection', function (socket) {
    console.log('user connected');

    socket.emit('userList', Array.from(userList));
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on('news', function (nickName) {
        socket.nickName = nickName;
        userList.add(nickName);
        io.emit('news', nickName);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');

        io.emit('disconnect', socket.nickName);
        userList.delete(socket.nickName);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});