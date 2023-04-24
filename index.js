require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require("cors");

const app = express()
app.use(cors());
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, "static")));
// app.use(fileUpload({}));
// app.use("/api", router);

app.listen(PORT, ()=> {
   console.log('server started on port', PORT);
})
