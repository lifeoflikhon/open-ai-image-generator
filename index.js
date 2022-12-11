const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5100;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/open-ai.routes'))

app.listen(port, () => handleStartup(port));

function handleStartup(port) {
  console.log(`Server started on port ${port}`);
}