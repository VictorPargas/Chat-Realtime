const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;


io.on('connection', (socket) => {
    console.log('Usuário conectado', socket.id);

    socket.on('message',(data) => {
        io.emit('message', data);
    });

    socket.on('disconnect',() => {
        console.log('Usuário desconectado:', socket.id);
    });
});

server.listen(PORT,() => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});