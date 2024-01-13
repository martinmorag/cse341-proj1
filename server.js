const express = require('express')
const expressLayouts = require("express-ejs-layouts")
const static = require("./routes/static")
const app = express()
const env = require('dotenv').config()

app.use(static)

app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout") // not at views root

app.get("/", function(req, res){
    res.render("index", {title: "Home"})
})

const port = process.env.PORT
const host = process.env.HOST

app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
})