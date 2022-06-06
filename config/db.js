// connect mysql
const mysql = require('mysql');

const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'we'
});

// start connect
conn.connect();

// execute sql
function exec(sql, params) {
  const promise = new Promise((resolve, reject) => {
    conn.query(sql, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.log('results==>', results)
        resolve(results);
      }
    });
  })
  return promise;
}

module.exports = exec;