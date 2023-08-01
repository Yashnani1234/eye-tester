const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO signin (email, username, password) VALUES (?, ?, ?)";
  const values = [req.body.email, req.body.username, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) return res.json("Signup failed");
    return res.json(data);
  });
});

app.listen(3306, () => {
  console.log("Listening on port 8080...");
});
