let config = {};
config.port = 3000;
config.allowedCorsOrigin = "*";
config.env = "dev";
config.db = {
  url: "mongodb://127.0.0.1:27017/blogs",
};
config.apiVersion = "api/v1";
module.exports = config;
