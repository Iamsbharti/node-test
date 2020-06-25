const express = require("express");
const router = require("./routes/blogRoutes");
const config = require("./app.config");
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to blog API!!!");
});

//add middleware
app.use("/blog", router);
app.listen(config.port, () =>
  console.log(`server started listining at-${config.port}`)
);
