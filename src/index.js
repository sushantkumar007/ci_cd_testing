import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
const NAME = process.env.NAME || "Guest";

app.get("/", (req, res) => {
  res.send(`Hello World! V28, hello from the server! ${PORT}, hello ${NAME}`);
});

app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
