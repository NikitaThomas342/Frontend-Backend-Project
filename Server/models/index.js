const db = require('../config/database')
const mysql = require('mysql')

const Product = require('./product')
const Cart = require('./cart')
const User = require('./user')
const Favorite = require('./favorite')

const connection = mysql.createConnection(db)

connection.connect(err => {
    if(err) throw err
    console.log(connection.threadId)
})

module.exports = {
    connection:connection,
    Product:Product,
    Cart:Cart,
    User:User,
    Favorite:Favorite
}