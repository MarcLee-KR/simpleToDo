const express = require("express");
const app = express();
const PORT = 6000;

// router
const indexRouter = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("http://localhost:", PORT);
});
