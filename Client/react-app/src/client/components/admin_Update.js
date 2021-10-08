import React from "react";
import { useHistory, useParams } from "react-router";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useState,useEffect } from "react";
import axios from 'axios'

function Admin_Update() {
    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/productid/?id=${id}`).then(res => {
            setProduct(res.data)
            console.log(product)
        })
    }, [])

    const history = useHistory()

    const onUpdate = (id) => {
        let name = document.getElementById('name').value
        let description = document.getElementById('description').value
        let price = document.getElementById('price').value
        let rating = document.getElementById('rating').selected
        let imageURL = document.getElementById('imageURL').value
        let quantity = document.getElementById('quantity').value
        axios.post(`http://localhost:8080/api/updateproduct`,{id:id,name:name,imageURL:imageURL,description:description,rating:rating,price:price,quantity:quantity}).then(() => {
        })
        swal("Update Success",'', "success");
        history.push('/')
    }
    const products = product[0]
  return (
    <div>
        <h2 style={{margin:35+'px'}}>Update Product</h2>
        <div class="container" style={{backgroundColor:'#444941',borderRadius:10+'px',border:1+'px '+'hidden '+ 'black',padding:45+'px'}}>
            
            <div className="d-flex flex-column flex-wrap justify-content-around">
                {products!=undefined ? (<div className="p-2">
                    <div>
                        <Link to="/">
                            <button className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5F7A61" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="p-2">
                        <div class="form-group">
                            <label className="text-white" for="name"><b>Product Name , Current : {products.name}</b></label>
                            <input type="text" class="form-control" id="name" placeholder="Enter Product Name"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <div class="form-group">
                            <label className="text-white" for="description"><b>Product Description , Current : {products.description}</b></label>
                            <input type="text" class="form-control" id="description" placeholder="Enter Product Description"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <div class="form-group">
                            <label className="text-white" for="price"><b>Product Price , Current : {products.price} THB</b></label>
                            <input type="text" class="form-control" id="price" placeholder="Enter Product Price"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <div class="form-group">
                            <label for="rating" className="text-white"><b>Product Rating , Current : {products.rating}</b></label>
                            <select id="rating" class="form-control">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="p-2">
                        <div class="form-group">
                            <label className="text-white" for="imageURL"><b>Product imageURL , Current : {products.imageURL}</b></label>
                            <input type="text" class="form-control" id="imageURL" placeholder="Enter Product imageURL"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <div class="form-group">
                            <label className="text-white" for="quantity"><b>Product Quantity , Current : {products.quantity}</b></label>
                            <input type="text" class="form-control" id="quantity" placeholder="Enter Product quantity"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <button className="btn" onClick={()=>{onUpdate(id)}} style={{backgroundColor:'#5F7A61',color:'white'}}>
                        <b>Update</b>
                        </button>
                    </div>
                    </div>
                    ):(<h1>404 Not Found </h1>)}
                </div>
            </div>
        </div>
  );
}

export default Admin_Update;
