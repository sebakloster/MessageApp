const db = require("mongoose");

db.Promise = global.Promise; //Le decimos a mongoose que si quiere usar promesas, que use las nativas de JS

async function connectDB(uri) {
  await db
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "db_chat",
    })
    .then(() => console.log("[db] conectada con exito"))
    .catch(() => console.error("[db]", err));
}

module.exports = connectDB;
