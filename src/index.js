import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! V4");
})

app.get("/health", ( req,res )=> {
  res.send('Server is healthy')
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})