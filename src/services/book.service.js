const connection = require('./../database')

function findMany(userId) {
  const sql = `SELECT * FROM book WHERE userId="${userId}"`
  return makeQuery(sql)
}

function findOne(id, userId) {
  const sql = `SELECT * FROM book WHERE id="${id}" AND userId="${userId}"`
  return makeQuery(sql)
}

function create(data) {
  const keys = Object.keys(data)
  const values = Object.values(data).map((element) =>
    isNaN(Number(element)) ? `"${element}"` : element
  )
  const sql = `INSERT INTO book (${keys.join(', ')}) VALUES (${values.join(
    ', '
  )})`
  return makeQuery(sql)
}

function deleteOne(id) {
  const sql = `DELETE FROM book WHERE id="${id}"`
  return makeQuery(sql)
}

function makeQuery(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  findMany,
  findOne,
  create,
  deleteOne,
}
