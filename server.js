const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// homepage (code input)
app.get("/", (req, res) => {
  res.send(`
    <h1>Enter Code</h1>
    <form method="POST" action="/check">
      <input type="text" name="code" placeholder="Enter code" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// check code
app.post("/check", (req, res) => {
  const userCode = req.body.code;

  const correctCode = "SECRET123"; // 🔑 change this

  if (userCode === correctCode) {
    res.redirect("/secret");
  } else {
    res.send("<h2>Wrong code. Try again.</h2><a href='/'>Back</a>");
  }
});

// secret page
app.get("/secret", (req, res) => {
  res.send("<h1>Welcome to the secret page 👀</h1>");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

