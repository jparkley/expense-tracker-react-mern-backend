const express = require("express")
const { getTransactions, addTransaction, deleteTransaction } = require("./controllers/transactions")
const cors = require("cors")

const router = express.Router()
router.use(cors())

router.route("/").get(getTransactions).post(addTransaction)
router.route("/:id").delete(deleteTransaction)

module.exports = router
