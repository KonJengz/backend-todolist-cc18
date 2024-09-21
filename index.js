require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`run port ${port}`));
