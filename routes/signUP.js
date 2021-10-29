function signUp(app) {
  app.post("/signup", (req, res) => {
    let fName = req.body.firstName;
    let lName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    const data = {
      firstName: fName,
      lastName: lName,
      email,
      password,
    };
    console.log(data);
    return res.json(data);
  });
}

module.exports = signUp;
