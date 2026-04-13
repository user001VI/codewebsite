const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// homepage (code input)
app.get("/", (req, res) => {
  res.send(`
    <head>
  <title>Enter Code</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #1e1e2f, #3a3a6a);
      font-family: 'JetBrains Mono', monospace;
      color: white;
    }

    .container {
      background: rgba(0,0,0,0.6);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    input, button {
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
</head>
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

