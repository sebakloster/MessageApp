const getAllUsers = require("./controller");
const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUsers() {
  const Users = await Model.find();
  return Users;
}

module.exports = {
  add: addUser,
  getAll: getUsers,
};
