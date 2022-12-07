const express = require("express");
const app = express();
const PORT = 6000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("server/public"));
app.use(express.static("server/public/scripts"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("http://localhost:", PORT);
});
