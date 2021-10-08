import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios'

function Item({ item }) {

  const history = useHistory();
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
            axios.delete(`http://localhost:8080/api/deletecart/?id=${id}`).then(()=>{
                swal("Item has been deleted!", {
                    icon: "success",
                });
            })
            history.push('/favorite')
            history.push('/cart'); 
        };
    });
  }

  const quantityincrease = (id,quantity) => {
    if(100>=quantity){
        axios.post('http://localhost:8080/api/updatecart/',{id:id,quantity:quantity+1}).then(()=>{
            history.push('/favorite')
            history.push('/cart');
        })
    }else{
        swal('Out Of Stock','','error')
    }
  }

  const quantitydecrease = (id,quantity) => {
    if(quantity!==0){
        axios.post('http://localhost:8080/api/updatecart/',{id:id,quantity:quantity-1}).then(()=>{
            history.push('/favorite')
            history.push('/cart');
        })
    }
  }

  return (
        <div className="p-2 col-12 col-md-6 col-lg-4">
        <div className="card" style={{width: 20+"rem",border:'1px '+ 'solid ' + '#608E62'}}>
            <div className="card-header" style={{backgroundColor:'#5F7A61'}}>
                <div className="d-flex flex-row justify-content-end">
                    <div className="p-2">
                      <button type="button" className="close" style={{color:'white'}}onClick={() => {onDelete(item.id)}} aria-label="Close">
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
                      <p className="card-text" style={{height:80+'px'}}>{item.description}</p>
                    </div>
                    <div className="p-2">
                      <h3>{item.price} THB</h3>
                    </div>
                </div>
                <div className="p-2">
                      <div class="d-flex flex-row justify-content-center">
                        <div class="p-1">
                          <button class="btn btn-outline-secondary" onClick={()=>{quantitydecrease(item.id,item.quantity)}}>-</button>
                        </div>
                        <div class="p-1">
                          <input value={item.quantity} class="form-control" style={{height:38+'px',width:50+'px',textAlign:'center',marginLeft:5+'px',marginRight:5+'px'}} placeholder={item.quantity}/>
                        </div>
                        <div class="p-1">
                          <button class="btn btn-outline-secondary" onClick={()=>{quantityincrease(item.id,item.quantity)}}>+</button>
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