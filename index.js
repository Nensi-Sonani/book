const express = require("express");
const app = express();
app.use(express.json());
const user = require("./about");
const connect = require("./book");

app.get("/", async (req, res) => {
  let data = await user.find();
  res.send(data);
});

app.post("/about", async (req, res) => {
  await user.create(req.body);
  res.send("done");
  console.log(req.body);
});

app.patch("/:id", async (req, res) => {
  await user.findByIdAndUpdate(req.params.id, req.body);
  res.send("it's updated");
});

app.delete("/:id", async (req, res) => {
  await user.findByIdAndDelete(req.params.id);
  res.send("it's deleted");
});

app.listen(8092, () => {
  console.log("listening on port 8092");
  connect();
});

module.exports = connect;