const express = require("express");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(port, () => console.log(`server started listining at-${port}`));
