const Todo = require("../models/todo.model");
const customErrorHandler = require("../middlewares/customerrorhandler");

const getTodo = async (req, res, next) => {
  try {
    const data = await Todo.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return next(customErrorHandler(401, "Title is mandatory"));
    }
    const todoItem = await Todo.create({ title, description });
    res.status(201).json(todoItem);
  } catch (error) {
    next(error);
  }
};
const updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const present = await Todo.find({ _id: id });
    if (!present) return next(customErrorHandler(404, "Not Found"));
    const { title, description } = req.body;
    if (!title) {
      return next(customErrorHandler(401, "title mandatory"));
    }
    const updatedItem = await Todo.findOneAndUpdate(
      { _id: id },
      { title, description },
      { new: true }
    );
    res.status(201).json(updatedItem);
  } catch (error) {
    next(error);
  }
};
const updateChecked = async (req, res, next) => {
  try {
    const id = req.params.id;
    const present = await Todo.find({ _id: id });
    if (!present) return next(customErrorHandler(404, "Not Found"));
    const { isChecked } = req.body;
    const updatedItem = await Todo.findOneAndUpdate(
      { _id: id },
      { checked: isChecked },
      { new: true }
    );
    res.status(201).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const present = Todo.find({ _id: id });
    if (!present) return next(customErrorHandler(404, "Not Found"));
    await Todo.deleteOne({ _id: id });
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTodo, createTodo, updateTodo, deleteTodo, updateChecked };
