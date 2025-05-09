const express = require('express');
const routing = require('./routes/auth')
const routes = require('./routes/courseapi')
const route = require('./routes/stud_registerapis')
const betch = require('./routes/betchApi')
const Fees = require('./routes/FeesAPI')
const app = express();
const portnum = 4050;

app.use(routing)
app.use(routes)
app.use(route)
app.use(betch)
app.use(Fees)
app.listen(portnum, () => {
    console.log(`Example app listening on port ${portnum}`)
  })