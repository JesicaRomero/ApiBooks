const connection = require('./../database')

function register(data) {
  const keys = Object.keys(data)
  const values = Object.values(data).map((element) =>
    isNaN(Number(element)) ? `"${element}"` : element
  )
  const sql = `INSERT INTO user (${keys.join(', ')}) VALUES (${values.join(
    ', '
  )})`
  return makeQuery(sql)
}

function login(data) {
  const sql = `SELECT * FROM user WHERE email="${data.email}"`
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
  register,
  login,
}
