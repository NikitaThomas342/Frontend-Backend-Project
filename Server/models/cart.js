const db = require('../config/database')
const mysql = require('mysql')

const connection = mysql.createConnection(db)

const getCartByUserID = async (user_id) => {
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM cart WHERE user_id = (?)',[user_id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const addCartByUserID = async (body) => {
    
    let user_id = body.user_id
    let name = body.name
    let imageURL = body.imageURL
    let description = body.description
    let rating = body.rating
    let price = body.price
    let quantity = 1

    return new Promise((resolve,reject)=>{
        connection.query('INSERT INTO cart (user_id,name,imageURL,description,rating,price,quantity) values (?,?,?,?,?,?,?)',[user_id,name,imageURL,description,rating,price,quantity],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const deleteCartByID = async (id) => {
    return new Promise((resolve,reject) => {
        connection.query('DELETE FROM cart WHERE id = (?)',[id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const updateCartByID = async (body) => {

    let id = body.id
    let quantity = body.quantity

    return new Promise((resolve,reject) => {
        connection.query('UPDATE cart SET quantity = (?) WHERE id = (?)',[quantity,id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

module.exports = {
    getCartByUserID:getCartByUserID,
    addCartByUserID:addCartByUserID,
    deleteCartByID:deleteCartByID,
    updateCartByID:updateCartByID
}