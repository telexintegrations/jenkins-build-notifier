import express from "express";
import { data } from "./data.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors()).use(express.json());
app.get("/integration", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
