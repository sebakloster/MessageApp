const store = require("./store");

function addChat(users) {
  if (!users || users.lenght < 2) {
    return Promise.reject("No hay suficientes usuarios");
  }
  const newChat = {
    users: users,
  };
  return store.add(newChat);
}

function listChat(userId) {
  return store.list(userId);
}

module.exports = {
  addChat,
  listChat,
};
