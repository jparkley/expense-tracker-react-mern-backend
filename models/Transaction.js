const { ObjectID } = require("mongodb")

const transactionsCollection = require("../db").db().collection("transactions")

let Transaction = function (data) {
  this.data = data
  //console.log("Model Data: ", this.data)
}

Transaction.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      await transactionsCollection.find().toArray(function (error, result) {
        if (error) throw error
        resolve(result)
      })
    } catch (e) {
      reject(e)
    }
  })
}

Transaction.prototype.createOne = function () {
  return new Promise((resolve, reject) => {
    transactionsCollection
      .insertOne(this.data)
      .then(info => {
        resolve(info.ops[0])
      })
      .catch(e => {
        reject(e)
      })
  })
}

Transaction.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let transaction = await transactionsCollection.findOne({ _id: new ObjectID(id) })
      if (transaction) {
        resolve(transaction)
      } else {
        reject("ERROR")
      }
    } catch (e) {
      reject(e)
    }
  })
}

Transaction.delete = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let transaction = await Transaction.findById(id)
      if (transaction) {
        await transactionsCollection.deleteOne({ _id: new ObjectID(id) })
        resolve("SUCCESS")
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = Transaction
