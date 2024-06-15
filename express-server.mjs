import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

let test = 'buna ziua'

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

// Comanda rulare server: node express-server.mjs