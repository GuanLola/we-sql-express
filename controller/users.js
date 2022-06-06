const exec = require('../config/db');

// register
const register = (user) => {
  console.log('>>>>user>>>>', user)
  const sql = 'insert into users(phone, password) values(?, ?)';
  const params = [user.phone, user.password];
  return exec(sql, params).then(results => {
    console.log('results>>>>', results)
    return {
      id: results.insertId
    };
  })
}

module.exports = {
  register
}