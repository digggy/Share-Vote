require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require('./models/index');
const handle = require("./handlers/index");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
// Api for authentication of users : Login and Register
app.use('/api/auth', routes.auth);
// Api for getting polls from the database
app.use('/api/polls', routes.poll);

// Error Handlers
app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`Started server at ${port}`));