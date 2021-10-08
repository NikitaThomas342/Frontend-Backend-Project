const express = require('express')

const DB = require('./models')

const router = express.Router();

//PRODUCT
//getproduct
router.get('/api/products', async (req, res) => {
    try{
        let products = await DB.Product.allProducts()
        res.json(products)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})
//getproductbyid
router.get('/api/productid', async (req,res) => {
    try{
        let product = await DB.Product.getProductByID(req.query.id)
        res.json(product)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//addproduct
router.post('/api/addproduct', async (req,res) => {
    try{
        await DB.Product.addProduct(req.body)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//deleteproduct
router.delete('/api/deleteproduct', async (req,res) => {
    try{
        await DB.Product.deleteProduct(req.query.id)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//updateproduct
router.post('/api/updateproduct', async (req,res) => {
    try{
        await DB.Product.addProduct(req.body)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//CART
//addcart
router.post('/api/addcart', async (req,res) => {
    try{
        await DB.Cart.addCartByUserID(req.body)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//getcart
router.get('/api/getcart', async (req,res) => {
    try{
        let products = await DB.Cart.getCartByUserID(req.query.id)
        res.json(products)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//deletecart
router.delete('/api/deletecart', async (req,res) => {
    try{
        await DB.Cart.deleteCartByID(req.query.id)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//updatecartqty
router.post('/api/updatecart', async (req,res) => {
    try{
        await DB.Cart.updateCartByID(req.body)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

//FAVORITE
//addfav
router.post('/api/addfavorite', async (req,res) => {
    try{
        await DB.Favorite.addFavoriteByUserID(req.body)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//getfavorite
router.get('/api/getfavorite', async (req,res) => {
    try{
        let products = await DB.Favorite.getFavoriteByUserID(req.query.id)
        res.json(products)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//deletefavorite
router.delete('/api/deletefavorite', async (req,res) => {
    try{
        await DB.Favorite.deleteFavoriteByID(req.query.id)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})


//USER
//register
router.post('/api/register', async (req,res) => {
    try{
        await DB.User.registerUser(req.body)
        res.json('success')
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
//login
router.get('/api/login', async (req,res) => {
    try{
        let user = await DB.User.loginUser(req.query.username)
        res.json(user)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router