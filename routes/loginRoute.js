function loginRoute(app) {
  app.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const data = {
      email,
      password,
    };
    return res.render(data);
  });
}

module.exports = loginRoute;
