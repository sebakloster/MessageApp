const Model = require("./model");

const uri =
  "mongodb+srv://db_user_chat:ndgTqigpkG1AlUeD@cluster0.3vhjh.mongodb.net/db_chat?retryWrites=true&w=majority";

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundedMessage = await Model.findById(id);
  foundedMessage.message = message;
  const newMessage = await foundedMessage.save();
  return newMessage;
}

function deleteMessage(id) {
  return Model.findByIdAndDelete(id);
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  delete: deleteMessage,
  // get
  // update
  // delete
};
