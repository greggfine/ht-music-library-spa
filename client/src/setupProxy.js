const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy(["/categories/**", "/tracks/**", "/audio/**", "/files/**"], {
      target: "http://localhost:3001/"
    })
  );
};
