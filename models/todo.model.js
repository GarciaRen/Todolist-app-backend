const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
      default: null,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
