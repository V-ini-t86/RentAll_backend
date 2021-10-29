const express = require("express");
const initRoutes = require("./routes/routes");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initRoutes(app);

app.listen(port, () => {
  console.log(`backend app listening at http://localhost:${port}`);
});
