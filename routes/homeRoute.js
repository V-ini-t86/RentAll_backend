function homeRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Hello backend!");
  });
}
module.exports = homeRoutes;
