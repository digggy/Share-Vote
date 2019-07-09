const express = require("express");
const handle = require("./handlers/index");
const app = express();

const port = 4000;

app.get("/", (req, res) => res.json({ message: "hello world" }));
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`Started server at ${port}`));
