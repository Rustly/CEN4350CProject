const express = require('express');
const sqlite = require('sqlite3');
const app = express();
const db = new sqlite.Database('database.sqlite');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('api/petsitters', (req, res) => {
  db.all('SELECT * FROM petsitters', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  })
});

app.get('api/reviews', (req, res) => {
  db.all('SELECT * FROM reviews', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
  })
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
