require('dotenv').config()
const express = require('express')
const cors = require("cors");
const router = require('./routes/index')
const errorMiddleware = require('./middleware/ErrorMiddleware')
const path = require('path')
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorMiddleware)

app.listen(PORT, ()=> {
   console.log('server started on port', PORT);
})
