const store = require("./store");

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No hay usuario o mensaje");
      return reject("Los datos son incorrectos");
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
    store
      .add(fullMessage)
      .catch((e) => console.error("los datos son incorrectos", e));
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Invalid data");
      return false;
    }

    store
      .delete(id)
      .then(resolve())
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
