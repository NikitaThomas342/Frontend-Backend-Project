const db = require('../config/database')
const mysql = require('mysql')

const connection = mysql.createConnection(db)

const getFavoriteByUserID = async (user_id) => {
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM favorite WHERE user_id = (?)',[user_id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const addFavoriteByUserID = async (body) => {
    
    let user_id = body.user_id
    let name = body.name
    let imageURL = body.imageURL
    let description = body.description
    let rating = body.rating
    let price = body.price
    let quantity = body.quantity

    return new Promise((resolve,reject)=>{
        connection.query('INSERT INTO favorite (user_id,name,imageURL,description,rating,price,quantity) values (?,?,?,?,?,?,?)',[user_id,name,imageURL,description,rating,price,quantity],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const deleteFavoriteByID = async (id) => {
    return new Promise((resolve,reject) => {
        connection.query('DELETE FROM favorite WHERE id = (?)',[id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

module.exports = {
    getFavoriteByUserID:getFavoriteByUserID,
    addFavoriteByUserID:addFavoriteByUserID,
    deleteFavoriteByID:deleteFavoriteByID
}