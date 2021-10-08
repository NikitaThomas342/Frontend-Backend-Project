const db = require('../config/database')
const mysql = require('mysql')

const connection = mysql.createConnection(db)

const allProducts = async () => {
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM product',(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const addProduct = async (body) => {
    let name = body.name
    let imageURL = body.imageURL
    let description = body.description
    let rating = body.rating
    let price = body.price
    let quantity = body.quantity
    
    return new Promise((resolve,reject)=>{
        connection.query('INSERT INTO product (name,imageURL,description,rating,price,quantity) VALUES (?,?,?,?,?,?)',[name,imageURL,description,rating,price,quantity],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const deleteProduct = async (id) => {
    return new Promise((resolve,reject) => {
        connection.query('DELETE FROM product WHERE id = (?)',[id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

const updateProduct = async (body) => {
    let id = body.id
    let name = body.name
    let imageURL = body.imageURL
    let description = body.description
    let rating = body.rating
    let price = body.price
    let quantity = body.quantity

    return new Promise((resolve,reject)=>{
        connection.query('UPDATE product SET name = (?),imageURL = (?),description = (?),rating = (?),price = (?),quantity = (?) WHERE id = (?)',[name,imageURL,description,rating,price,quantity,id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })

}

const getProductByID = async (id) => {
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM product WHERE id=(?)',[id],(err,results)=>{
            if(err){
                return reject(err)
            }
            resolve(results)
        })
    })
}

module.exports = {
    allProducts:allProducts,
    addProduct:addProduct,
    deleteProduct:deleteProduct,
    updateProduct:updateProduct,
    getProductByID:getProductByID
}