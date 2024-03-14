const express = require('express');
const sqlite = require('sqlite3');
const parser = require('body-parser');
const app = express();
const db = new sqlite.Database('database.sqlite');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});

app.get('/api/petsitters', (req, res) => {
  db.all('SELECT * FROM petsitters', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
    console.info('Sent petsitters to client');
  })
});

app.get('/api/reviews', (req, res) => {
  db.all('SELECT * FROM reviews', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(rows);
    console.info('Sent reviews to client');
  })
});

app.post('/api/getrequests', (req, res) => {
  console.info(req.body);
  db.all('SELECT * FROM requests WHERE requesterId = ' + req.body.accountId, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json(rows);
    console.info('Sent requests to client');
  })
});

app.post('/api/addreview', (req, res) => {
  const review = req.body;
  db.run('INSERT INTO reviews (author, authorEmail, comment, date) VALUES (?, ?, ?, ?)',
    [review.author, review.authorEmail, review.comment, review.date], (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(201).json({ message: 'Review added' });
    });
});

app.post('/api/postrequest', (req, res) => {
  const request = req.body;
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
