const express = require("express");
const router = require("./routes/blogRoutes");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to blog API!!!");
});

//add middleware
app.use("/blog", router);
app.listen(port, () => console.log(`server started listining at-${port}`));
