import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios'
import { useSelector } from "react-redux";

function Item({ item }) {

  const history = useHistory();

  const user_id = useSelector(state=>state.user_id)

  const favoritedelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this item from favorite!?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        axios.delete(`http://localhost:8080/api/deletefavorite/?id=${id}`).then(()=>{
            swal("Item has been deleted!", {
                icon: "success",
            });
            history.push('/cart')
            history.push('/favorite'); 
        })
      }
    });
  };

  const addTocart = (item) => {
    swal({
      title: "Are you sure?",
      text: "You want to add this item to cart!?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        axios.post(`http://localhost:8080/api/addcart`,{user_id:user_id,name:item.name,imageURL:item.imageURL,description:item.description,rating:item.rating,price:item.price,quantity:item.quantity}).then(()=>{
            swal("Item has been Added!", {
                icon: "success",
            }); 
            history.push('/favorite');
        })
      }
    });
  };

  return (
        <div className="p-2 col-12 col-md-6 col-lg-4">
            <div className="card" style={{width: 20+"rem",border:'1px solid #5F7A61'}}>
                <div className="card-header" style={{backgroundColor:'#5F7A61'}}>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="p-2">
                            <button type="button" style={{color:'white'}}onClick={()=>{favoritedelete(item.id)}} className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Link to={`/detail/${item.id}`}>
                    <img src={item.imageURL} class="card-img-top" alt="..."/>       
                </Link>
                <div className="card-body" >
                    <h5 className="card-title">{item.name}</h5>
                    <div className="d-flex flex-column align-items-start">
                        <div className="p-2">
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="p-2">
                            <h3>{item.price} THB</h3>
                        </div>
                        <div class="d-flex flex-row justify-content-center">
                            <div class="p-2">
                                <a href="#" class="btn" style={{backgroundColor:'#5F7A61',color:'white'}} onClick={() => {addTocart(item)}}> Add To Cart</a>
                            </div>
                            <div class="p-2">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item