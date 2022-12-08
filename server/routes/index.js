const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// http://localhost:PORT/

// GET / - Home page
router.get("/", async (req, res) => {
  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

// POST /post
router.post("/todo", async (req, res) => {
  // error handling
  if (
    req.body.title == null ||
    req.body.title == "" ||
    req.body.description == null ||
    req.body.description == "" ||
    req.body.due_date == null ||
    req.body.due_date == ""
  ) {
    return res.status(400).send({
      message: "Title, description, and due date cannot be empty",
    });
  }
  try {
    let newTodo = Todo.create({
      title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

// GET /todo/:id
router.get("/todo/:id", (req, res) => {
  // error handling
  if (
    req.params.id == 0 ||
    req.params.id == null ||
    isNaN(req.params.id) ||
    req.params.id < 0
  ) {
    return res.status(400).send({
      message: "Id cannot be 0 or null or NaN or negative",
    });
  }
  Todo.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data == null) {
        return res.status(400).send({
          message: "Id not found",
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// PATCH /todo/:id
router.patch("/todo/:id", (req, res) => {
  // error handling
  if (
    req.params.id == 0 ||
    req.params.id == null ||
    isNaN(req.params.id) ||
    req.params.id < 0
  ) {
    return res.status(400).send({
      message: "Id cannot be 0 or null or NaN or negative",
    });
  }

  Todo.update(
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// DELETE /todo/:id
router.delete("/todo/:id", (req, res) => {
  // error handling
  if (
    req.params.id == 0 ||
    req.params.id == null ||
    isNaN(req.params.id) ||
    req.params.id < 0
  ) {
    return res.status(400).send({
      message: "Id cannot be 0 or null or NaN or negative",
    });
  }
  // confirmation
  if (confirm("Are you sure you want to delete this?") == false) {
    res.status(400).send({ message: "Delete cancelled" });
  } else {
    Todo.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

module.exports = router;
