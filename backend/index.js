require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT ||8000;
const app = express()
const homeRouters = require("./src/routers/homeRouters")

app.use(express.json())
app.use("/api/user", homeRouters);
app.listen(PORT, () => console.log(`server is running at port ${PORT}`));