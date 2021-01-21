const router = require("express").Router()
const { getTransactions, addTransaction, deleteTransaction } = require("./controllers/transactions")
const cors = require("cors")

router.use(cors())

router.get("/", (req, res) => res.json("Hello, if you see this message, it means your backend is up and running."))

router.get("/api/v1/transactions", getTransactions)
router.post("/api/v1/transactions", addTransaction)
router.delete("/api/v1/transactions/:id", deleteTransaction)

module.exports = router
