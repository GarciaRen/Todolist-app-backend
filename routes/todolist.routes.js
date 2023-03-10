const { Router } = require("express");
const todoListController = require("../controllers/todoList.controller");
const router = Router();

router.post("/", todoListController.createTodo);
router.get("/", todoListController.displayTodos);
router.get("/:id", todoListController.viewTodo);
router.put("/:id", todoListController.updateTodo);
router.put("/complete/:id", todoListController.completeTodo);
router.delete("/:id", todoListController.deleteTodo);
module.exports = router;
