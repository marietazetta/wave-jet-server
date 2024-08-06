require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

// Requiere y configura http y socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require('socket.io')(server, {
  cors: { origin: '*' }
})


io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('registered-user', (data) => {
    console.log('User registered:', data);
  });

  socket.on('send-message', (message) => {
    // Broadcast the new message to all connected clients
    io.emit('receive-message', message);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Configurar middleware y rutas de Express
require("./config")(app);
require('./routes')(app);
require("./error-handling")(app);

const PORT = process.env.PORT || 5005;

// Empieza a escuchar con el servidor HTTP en vez de 'app.listen'
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
