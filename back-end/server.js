import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
