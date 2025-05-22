const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Server-side validation
  if (!username || !email || !password) {
    return res.send("All fields are required.");
  }

  if (password.length < 8 || !/\d/.test(password)) {
    return res.send("Password must be at least 8 characters long and contain a number.");
  }

  res.send(`<h2>Welcome, ${username}!</h2><p>Registration successful.</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
