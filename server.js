const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// homepage (code input)
app.get("/", (req, res) => {
  res.send(`
    <html>
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

        h1 {
          margin-bottom: 20px;
        }

        input {
          padding: 10px;
          border-radius: 8px;
          border: none;
          width: 200px;
          margin-bottom: 15px;
          font-size: 16px;
          font-family: 'JetBrains Mono', monospace;
        }

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          background: #6c63ff;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          background: #5848d6;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>Enter Access Code</h1>
        <form method="POST" action="/check">
          <input type="text" name="code" placeholder="Enter code..." required />
          <br>
          <button type="submit">Unlock</button>
        </form>
      </div>
    </body>
    </html>
  `);
});


// check code
app.post("/check", (req, res) => {
  const userCode = req.body.code;

  const correctCode = "USER27"; // 🔑 change this

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

