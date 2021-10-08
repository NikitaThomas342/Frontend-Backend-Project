const db = require('../config/database')
const mysql = require('mysql')

const connection = mysql.createConnection(db)

const registerUser = async (body) => {

    let username = body.username
    let password = body.password
    let email = body.email
    var timestamp = new Date()
    timestamp.toISOString().slice(0, 19).replace('T', ' ')

    return new Promise((resolve,reject)=>{
        connection.query('INSERT INTO users (username,password,email,created,updated) values (?,?,?,?,?)',
        [username,password,email,timestamp,timestamp],
        (err,results)=>{
            if(err){
                return reject(err)
            }
            resolve()
        })
    })
}

const loginUser = async (username) => {

    var timestamp = new Date()
    timestamp.toISOString().slice(0, 19).replace('T', ' ')
    
    return new Promise((resolve,reject) => {
        connection.query('SELECT * FROM users WHERE username = (?)',
        [username],
        (err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })

}
module.exports = {
    registerUser:registerUser,
    loginUser:loginUser
}