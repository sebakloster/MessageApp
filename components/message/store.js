const db = require("mongoose");
const Model = require("./model");

const uri =
  "mongodb+srv://db_user_chat:ndgTqigpkG1AlUeD@cluster0.3vhjh.mongodb.net/db_chat?retryWrites=true&w=majority";

db.Promise = global.Promise; //Le decimos a mongoose que si quiere usar promesas, que use las nativas de JS
db.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "db_chat",
})
  .then(() => console.log("[db] conectada con exito"))
  .catch(() => console.error("[db]", err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  // get
  // update
  // delete
};
