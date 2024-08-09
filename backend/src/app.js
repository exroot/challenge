const express = require("express");
const cors = require("cors");

const routeFiles = require("./routes/files.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/files", routeFiles);
app.use("/test", (req, res) => res.send("test"));

module.exports = app;
