const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded data
app.use(bodyParser.json()); // To parse JSON data

app.post('/submit', (req, res) => {
  const { name, email } = req.body; // Access form data
  console.log(`Name: ${name}, Email: ${email}`);
  res.send(`Form submitted successfully! Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
