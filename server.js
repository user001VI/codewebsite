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

  const codes = {
  "user27": "/27",
  "67": "/67",
};
  if (userCode === "user27") {
  return res.redirect("/27");
} else if (userCode === "67") {
  return res.redirect("/67");
} else {
    res.send(`
    <html>
    <head>
      <title>   </title>
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
      </style>
    </head>

    <body>
      <div class="container">
        <h1>incorrect</h1>
          <br>
        </form>
      </div>
    </body>
    </html>
  `);
});
app.get("/27", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>   </title>
      </style>
    </head>

    <body>
      <div class="container">
        <img src="Public/Vergence Inc..png" style="max-width:100%; max-height:100%;" />
          <br>
        </form>
      </div>
    </body>
    </html>
  `)
});
app.get("/67", (req, res) => {
  res.send(`
    <html>
     <head>
      <title>   </title>
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
      </style>
    </head>

    <body>
      <div class="container">
        <h1>ha ha you're so funny</h1>
          <br>
      </div>
    <script>
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
    </body>
    </html>
  `)
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
