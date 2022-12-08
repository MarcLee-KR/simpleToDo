const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// http://localhost:PORT/

// GET / - Home page
router.get("/", (req, res) => {
  Todo.findAll().then((data) => {
    res.send(data);
  });
});

// POST /todo
router.post("/todo", (req, res) => {
  Todo.create({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    due_date: req.body.due_date,
  }).then((data) => {
    res.send(data);
  });
});

// PATCH /todo/:id

// DELETE /todo/:id

module.exports = router;
