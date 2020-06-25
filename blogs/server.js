const express = require("express");
const createBlogRoute = require("../blogs/routes/blogRoutes");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hi there");
});

createBlogRoute.createBlogRoute(app);
app.listen(port, () => console.log(`server started listining at-${port}`));
