const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("invalid name");
  }

  const user = {
    name,
  };
  return store.add(user);
}

function getAllUsers() {
  return store.getAll();
}

module.exports = {
  addUser,
  getAllUsers,
};
