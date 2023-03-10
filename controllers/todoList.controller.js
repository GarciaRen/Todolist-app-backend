const Todo = require("../models/todo.model");
const { isValidObjectId } = require("mongoose");

exports.createTodo = async (req, res, next) => {
  const { todoName } = req.body || {};

  try {
    const todo = await Todo.create({ todoName });
    if (!todo)
      return res.status(422).json({ message: "Unable to create todo" });
    res.status(201).json({ message: "Successfully created" });
  } catch (error) {
    next(error);
  }
};

exports.displayTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).exec();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

exports.viewTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id))
    return res.status(400).json({ message: "Invalid params" });
  try {
    const todo = await Todo.findById({ _id: id }).exec();
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const { todoName } = req.body;
  if (!isValidObjectId(id))
    return res.status(400).json({ message: "Invalid params" });
  try {
    const todo = await Todo.findByIdAndUpdate({ _id: id }, { todoName }).exec();
    if (!todo)
      return res.status(422).json({ message: "Unable to update todo" });
    res.status(201).json({ message: "Successfully updated" });
  } catch (error) {
    next(error);
  }
};

exports.completeTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id))
    return res.status(400).json({ message: "Invalid params" });
  try {
    const data = await Todo.findById({ _id: id });
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { isDone: !data.isDone }
    ).exec();
    if (!todo)
      return res.status(422).json({ message: "Unable to complete todo" });
    res.status(201).json({ message: "Successfully updated" });
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id))
    return res.status(400).json({ message: "Invalid params" });
  try {
    const todo = await Todo.findByIdAndDelete({ _id: id }).exec();
    if (!todo)
      return res.status(422).json({ message: "Unable to delete todo" });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    next(error);
  }
};
