const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

// app.use(cors({
//   origin: process.env.NETLIFY_BASE_URL,
//   credentials: true
// }));

app.use(cors())


app.use(express.json())


app.use('/ai', aiRoutes)

module.exports = app
