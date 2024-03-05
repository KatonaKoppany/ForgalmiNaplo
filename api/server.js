const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forgalminaplo",
});

connection.connect((err) => {
  if (err) {
    console.error("Hiba a MySQL adatbázis kapcsolódásnál: ", err);
  } else {
    console.log("Sikeres MySQL adatbázis kapcsolódás");
  }
});

// Egy egyszerű példa lekérdezés
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM student";
  connection.query(query, (err, rows) => {
    if (err) {
      console.error("Hiba a lekérdezésnél: ", err);
      res.status(500).send("Szerver hiba");
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Szerver fut a http://localhost:${port} címen`);
});
