const socketIO = require("socket.io");
const socket = {};

function connectSocket(server) {
  socket.io = socketIO(server);
}

module.exports = {
  connectSocket,
  socket,
};
