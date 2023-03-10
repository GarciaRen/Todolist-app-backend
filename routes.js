module.exports = function (app) {
  const todolistRoute = require("./routes/todolist.routes");

  app.use("/api/todos", todolistRoute);
};
