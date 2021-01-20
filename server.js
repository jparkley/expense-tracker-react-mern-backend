const express = require("express")
const dotenv = require("dotenv")
const router = require("./router")

const server = express()
server.use(express.json()) // bodyparser middleware
dotenv.config()

server.use("/", router)

module.exports = server
