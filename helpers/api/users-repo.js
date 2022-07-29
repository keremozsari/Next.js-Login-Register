const fs = require("fs");

let users = require("data/users.json");

export const usersRepo = {
  getById: (id) => users.find((x) => x.id.toString() === id.toString()),
  find: (x) => users.find(x),
  create,
};

function create(user) {
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;

  users.push(user);
  saveData();
}

function saveData() {
  fs.writeFileSync("data/users.json", JSON.stringify(users, null, 4));
}
