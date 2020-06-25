const blogControllers = require("../controllers/blogControllers");
//routes
export async function createBlogRoute(app) {
  console.log("create Blog route");
  const { req, res } = app;
  app.get("/createBlog", blogControllers.createBlog(req, res));
}
