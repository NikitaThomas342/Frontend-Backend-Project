import * as React from 'react';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Product from './sub-comp/product'

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/products").then(res => {
            setProducts(res.data)
        })
    }, [])

    const auth = useSelector(state=>state.auth)
    
    return (
        <div style={{'paddingTop':40+'px','paddingBottom':40+'px'}}>
        <div className="container">
            <Carousel>
            <div>
                <img src='/assets/images/cactus3.jpg' alt="..." />
                <p className="legend">Mammillaria</p>
            </div>
            <div>
                <img src='/assets/images/cactuspro2.jpg' alt="..." />
                <p className="legend">Astrophytum</p>
            </div>
            <div>
                <img src='/assets/images/cactuspro.jpg' alt="..." />
                <p className="legend">Astrophytum</p>
            </div>
            </Carousel>
        </div>

        <div className="container" style={{border:1+'px '+ 'solid ' + 'lightgrey',borderRadius:10+'px',padding:70+'px',backgroundColor:'#444941'}}>
            <div className="d-flex flex-row justify-content-between">
            <div className="p-2">
                <h2 className="text-white" style={{'marginBottom':40+'px'}}>All Products</h2>
            </div>
            <div className="p-2">
                {auth ? (<Link to="admin_add">
                        <button className="btn btn-success">Add Product</button>
                        </Link>):(<></>)}
            </div>
            </div>
            
            <div className="d-flex flex-row flex-wrap justify-content-around" >
            
            {products.length>0 ? (
            products.map((data)=>(
                <Product key={data.id} item={data}/>
            ))
            ):(<h5 className="text-white">Loading Products...</h5>)
            }
            </div>
            </div>
        </div>
    );
}

export default Home