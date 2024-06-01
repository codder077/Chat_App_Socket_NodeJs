
var socket = io();


btn.onclick = function exec() {
    socket.emit('msg_send', {
        msg: inputMsg.value
    });
}

