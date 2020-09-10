const express = require('express');
const cors = require('cors');
require('./database');
const routes = require('./routes');
require('dotenv').config();
const app = express();

const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);