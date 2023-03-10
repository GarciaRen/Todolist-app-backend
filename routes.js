module.exports = function (app) {
  const todolistRoute = require("./routes/todolist.routes");

  app.use("/todos", todolistRoute);
};
