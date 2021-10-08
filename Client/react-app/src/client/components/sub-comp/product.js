import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import swal from 'sweetalert';
import axios from 'axios'

function Item({ item }) {
  
  const history = useHistory()
  const auth = useSelector(state=>state.auth)
  const logged = useSelector(state=>state.logged)
  const user_id = useSelector(state=>state.user_id)

  const onAddCart = (item) => {
    if(logged){
      axios.post(`http://localhost:8080/api/addcart`,{user_id:user_id,name:item.name,imageURL:item.imageURL,description:item.description,rating:item.rating,price:item.price,quantity:item.quantity}).then(res => {
          console.log(res)
      })
      swal("Added To Cart!", "", "success");
    }else{
      swal("Please Login!", "", "error");
    }
  };

  const onAddFav = (item) => {
    if(logged){
      axios.post(`http://localhost:8080/api/addfavorite`,{user_id:user_id,name:item.name,imageURL:item.imageURL,description:item.description,rating:item.rating,price:item.price,quantity:item.quantity}).then(res => {
          console.log(res)
      })
      swal("Added To Favorite!", "", "success");
    }else{
      swal("Please Login!", "", "error");
    }
  };

  const onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this item from cart!?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
            axios.delete(`http://localhost:8080/api/deleteproduct/?id=${id}`).then(()=>{
                swal("Product deleted!", {
                    icon: "success",
                });
            })
            history.push('/login')
            history.push('/'); 
        };
    });
  }

  return (
    <div className="p-2 col-12 col-md-6 col-lg-4 my-2">
      <div className="card" style={{ width: 18 + "rem" }}>
        <Link to={`/detail/${item.id}`}>
          <img
            src={item.imageURL}
            style={{ width: 286 + "px", height: 286 + "px" }}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <div className="d-flex flex-column">
            <div className="p-2 mx-2">
              <b>
                <h5 className="card-title">{item.name}</h5>
              </b>
            </div>
            <div className="p-2">
              <div className="d-flex flex-row justify-content-start">
                {[...Array(item.rating)].map((elementInArray, i) => (
                  <div className="p-2" key={i}>
                    {" "}
                    <i
                      className="fa fa-heart"
                      style={{ fontSize: 24 + "px", color: "#FC3B41" }}
                    ></i>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2">
              <div className="d-flex flex-row justify-content-start mx-2">
                <b>
                  <h5 className="font-weight-normal"> {item.price} THB</h5>
                </b>
              </div>
            </div>
          </div>

          {auth ? (
            <div className="d-flex flex-row justify-content-center">
              <div className="p-2">
                <Link to={`/admin_update/${item.id}`}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#5F7A61", color: "white" }}
                  >
                    <b>Update</b>
                  </button>
                </Link>
              </div>
              <div className="p-2">
                <button
                  className="btn"
                  onClick={() => {
                    onDelete(item.id);
                  }}
                  style={{ backgroundColor: "#5F7A61", color: "white" }}
                >
                  <b>Delete</b>
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="d-flex flex-row justify-content-center">
            <div className="p-2">
              <button
                className="btn"
                style={{ backgroundColor: "#5F7A61", color: "white" }}
                onClick={() => {
                  onAddCart(item);
                }}
              >
                <b>Add To Cart</b>
              </button>
            </div>
            <div className="p-2">
              <button
                className="btn btn-outline-danger mx-2"
                type="submit"
                onClick={() => {
                  onAddFav(item);
                }}
              >
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
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
