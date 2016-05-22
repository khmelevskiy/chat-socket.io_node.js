$(document).ready(function () {
    var HeightPad = 67;
    $('.modal-backdrop.fade.in').show();
    $('.close').remove();
    $('#btnSend').prop("disabled", true);
    $('#myModal').modal({
        keyboard: false,
        backdrop: 'static',
        show: true
    });

    $('#сontactList').height(($(window).height()) - ($(".well.well-small").height() + HeightPad));
    $('#messages').height(($(window).height()) - (($("#foother").height()) + ($(".well.well-small").height() + HeightPad)));

    $(window).resize(function () {
        $('#сontactList').height(($(window).height()) - ($(".well.well-small").height() + HeightPad));
        $('#messages').height(($(window).height()) - (($("#foother").height()) + ($(".well.well-small").height() + HeightPad)));
    });
    $('#messages').resize(function () {
        $('#сontactList').height(($(window).height()) - ($(".well.well-small").height() + HeightPad));
        $('#messages').height(($(window).height()) - (($("#foother").height()) + ($(".well.well-small").height() + HeightPad)));
    });
    $('#сontactList').resize(function () {
        $('#сontactList').height(($(window).height()) - ($(".well.well-small").height() + HeightPad));
        $('#messages').height(($(window).height()) - (($("#foother").height()) + ($(".well.well-small").height() + HeightPad)));
    });

    var socket = io();
    socket.on('userList', function (userList) {
        for (const user of userList) {
            $('.list-group').prepend($('<li class="list-group-item" id=' + user + '>').text(user));
        }
    });

    var nick = $('#nickname').val();
    socket.emit('disconnect', nick);
    socket.on('disconnect', function (nickName) {
        if (($('#' + nickName)) != null) {
            $('#' + nickName).remove();
        }
    });

    $(window).unload(function () {
        var nick = $('#nickname').val();
        socket.emit('chat message', '[' + (new Date).toLocaleTimeString() + '] ' + 'user "' + nick + '": disconnected');
    });

    $('form').submit(function () {
        if ($('#m').val() != '') {
            socket.emit('chat message', '[' + (new Date).toLocaleTimeString() + '] ' + $('#nickname').val() + ': ' + ($('#m').val()));
            $('#m').val('');
            return false;
        }
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').prepend($('<li>').text(msg));
    });

    $("#login").click(function () {
        var nick = $('#nickname').val();
        if ($('#nickname').val().length > 2) {
            $('#myModal').modal('hide');
            $('#btnSend').prop("disabled", false);
            socket.emit('news', nick);
            socket.on('news', function (nickName) {
                $('.list-group').prepend($('<li class="list-group-item" id=' + nickName + '>').text(nickName));
            });
            socket.emit('chat message', '[' + (new Date).toLocaleTimeString() + '] ' + 'user "' + nick + '": connected');
        }
        else {
            $('#alert-error').show();
        }
    });

    $("#btnExit").click(function () {
        window.location.reload();
    });
});