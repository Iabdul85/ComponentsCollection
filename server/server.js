import express from "express";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users", (req, res) => {
  console.log("body", req.body.f_name);
  console.log("body", req.body.l_name);
  res.json({});
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


