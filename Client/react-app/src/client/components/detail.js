import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

function Detail() {

    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/productid/?id=${id}`).then(res => {
            setProduct(res.data)
        })
    }, [])


    const logged = useSelector(state=>state.logged)
    const user_id = useSelector(state=>state.user_id)

    const onAddCart = (item) => {
        if(logged){
            swal({
                title: "Are you sure?",
                text: "You want to add this item to cart!?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    swal("Item has been added!", {
                    icon: "success",
                    }); 
                    axios.post(`http://localhost:8080/api/addcart`,{user_id:user_id,name:item.name,imageURL:item.imageURL,description:item.description,rating:item.rating,price:item.price,quantity:item.quantity}).then(res => {
                        console.log(res)
                    })
                }
            });
        }else{
            swal('Please Login First!','','error')
        }
    };

    const onAddFav = (item) => {
        if(logged){
            swal({
                title: "Are you sure?",
                text: "You want to add this item to favorite!?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    swal("Item has been added!", {
                    icon: "success",
                    }); 
                    axios.post(`http://localhost:8080/api/addfavorite`,{user_id:user_id,name:item.name,imageURL:item.imageURL,description:item.description,rating:item.rating,price:item.price,quantity:item.quantity}).then(res => {
                        console.log(res)
                    })
                }
            });
        }else{
            swal('Please Login First!','','error')
        }
        
    };
    const item = product[0]
  return (
      <div>
          {item!=undefined ? (
              <div style={{backgroundColor:'#2E2E2E',padding:45+'px',border:'1px ' + 'hidden ' + 'black',borderRadius:10+'px'}}>
              <div className="d-flex flex-row justify-content-center">
              <div className="p-2">
                          <Link to="/">
                              <button className="btn">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5F7A61" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                                      <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                                  </svg>
                              </button>
                          </Link>
                      </div>
                <div className="p-2">
                  <img alt="..." src={item.imageURL} style={{height:400+'px',width:400+'px'}}className="rounded"/>
      
                </div>
                <div className="p-2">
                  <div className="d-flex flex-column">
                    <div className="p-2">
                      <p>
                        <h2 className="text-white"><b>{item.name}</b></h2>
                      </p>
                    </div>
                    <div className="p-2">
                      <h4 className="text-white">
                        <b>{item.price} THB</b>
                      </h4>
                    </div>
                    <div className="p-2">
                      <b><p className="text-white">{item.description}</p></b>
                    </div>
                    <div className="p-2">
                          <p class="font-weight-bold text-white">Stock : {item.quantity}</p>
                    </div>
                    <div className="p-2">
                      <button className="btn" style={{backgroundColor:'#608E62',color:'white'}} onClick={() => {onAddCart(item)}}>
                        <b>Add To Cart</b>
                      </button>
                    </div>
                    <div className="p-2">               
                                <button className="btn btn-outline-danger mx-2" type="submit" onClick={() => {onAddFav(item)}}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-heart"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                  </svg>
                                </button> 
                          </div>
                  </div>
                </div>
              </div>
            </div>
          ):(
              <div className="justify-content-center">
                <h1>Item Not Found!</h1>
              </div>
          )}
      
      </div>
  );
}

export default Detail