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
      <title>enter code</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
          font-family: 'JetBrains Mono', monospace;
          color: orange;
        }
        .container {
          background: rgba(0,0,0,0.0);
          padding: 0px;
          border-radius: 20px;
          text-align: center;
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
          color: orange;
          background-color: #111; /* dark background */
          outline: none;
}

        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>enter code</h1>
        <form method="POST" action="/check">
          <input type="text" name="code" placeholder=" " required />
          <br>
        </form>
      </div>
    </body>
    </html>
  `);
});


// check code
app.post("/check", (req, res) => {
  const userCode = req.body.code;

  const correctCode = "user27"; // 🔑 change this

  if (userCode === correctCode) {
    res.redirect("/secret");
  } else {
    res.send("<h2>incorrect</h2><a href='/'>Back</a>");
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

