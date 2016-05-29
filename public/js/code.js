"use strict";
$(document).ready(() => {
    const HeightPad = 67;
    $('.modal-backdrop.fade.in').show();
    $('.close').remove();
    $('#btnSend').prop("disabled", true);
    $('#myModal').modal({
        keyboard: false,
        backdrop: 'static',
        show: true
    });

    let sizeHeight = () => {
        $('#сontactList').height(($(window).height()) - ($(".well.well-small").height() + HeightPad));
        $('#messages').height(($(window).height()) - (($("#foother").height()) + ($(".well.well-small").height() + HeightPad)));
    };
    sizeHeight();

    $(window).resize(() => {
        sizeHeight();
    });
    $('#messages').resize(() => {
        sizeHeight();
    });
    $('#сontactList').resize(() => {
        sizeHeight();
    });

    const socket = io();

    socket.on('userList', (userList) => {
        for (let user of userList) {
            $('.list-group').prepend($('<li class="list-group-item" id=' + user + '>').text(user));
        }
    });

    let nick = $('#nickname').val();
    socket.emit('disconnect', nick);
    socket.on('disconnect',  (nickName) => {
        if (($('#' + nickName)) != null) {
            $('#' + nickName).remove();
        }
    });

    $(window).unload( () => {
        let nick = $('#nickname').val();
        socket.emit('chat message', '[' + (new Date).toLocaleTimeString() + '] ' + 'user "' + nick + '": disconnected');
    });

    $('form').submit(() => {
        if ($('#m').val() != '') {
            socket.emit('chat message', '[' + (new Date).toLocaleTimeString() + '] ' + $('#nickname').val() + ': ' + ($('#m').val()));
            $('#m').val('');
            return false;
        }
        return false;
    });
    socket.on('chat message', (msg) => {
        $('#messages').prepend($('<li>').text(msg));
    });

    $("#login").click(() => {
        let nick = $('#nickname').val();
        if ($('#nickname').val().length > 2) {
            $('#myModal').modal('hide');
            $('#btnSend').prop("disabled", false);
            socket.emit('news', nick);
            socket.on('news', (nickName) => {
                $('.list-group').prepend($('<li class="list-group-item" id=' + nickName + '>').text(nickName));
            });
            socket.emit('chat message', '[' + (new Date).toLocaleTimeString() + '] ' + 'user "' + nick + '": connected');
        }
        else {
            $('#alert-error').show();
        }
    });

    $("#btnExit").click(() => {
        window.location.reload();
    });
});