const Transaction = require("../models/Transaction")

exports.getTransactions = async (req, res, next) => {
  let all = await Transaction.findAll()
    .then(function (transactions) {
      res.status(200).json(transactions)
    })
    .catch(function (error) {
      res.status(500).json({
        success: false,
        error: error
      })
    })
}

exports.addTransaction = (req, res, next) => {
  let transaction = new Transaction(req.body)
  transaction
    .createOne()
    .then(function (transactions) {
      res.status(201).json({
        success: true,
        data: transactions
      })
    })
    .catch(function (error) {
      res.status(500).json({
        success: false,
        error: error
      })
    })
}

exports.deleteTransaction = (req, res, next) => {
  Transaction.delete(req.params.id)
    .then(() => {
      res.status(201).json("SUCCESS")
    })
    .catch(e => {
      res.json(e)
    })
}
