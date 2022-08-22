const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded());

app.engine(".html", require("ejs").__express);

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "html");

const users = [
  { name: "Nipun", email: "nipun@gmail.com" },
  { name: "Thevindu", email: "thevindu@gmail.com" },
  { name: "Naveen", email: "naveen@gmail.com" },
];

app.get("/", function (req, res) {
  res.render("index", {
    title: "Login Page",
  });
});

app.post("/home", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;

  res.render("home", {
    current_user_name: name,
    current_user_email: email,
    users: users,
    title: "Home Page",
    header: "Other users",
  });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}
