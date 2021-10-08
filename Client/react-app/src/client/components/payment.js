import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function Payment({products}) {
  let totalprice = 0
  if(products!=null){
    for(let i = 0;i<products.length;i++){
      totalprice += products[i].price*products[i].quantity
    }
  }else{
    totalprice = 0
  }

  const history = useHistory()
  
  const logged = useSelector(state=>state.logged)
  const username = useSelector(state=>state.current)

  const orderproducts = (totalprice) => {
    if(logged){
      if(products<=0){
        alert('Please add item to cart before payment.')
      }else{
        let address = document.getElementById('address').value
        let items = []
        products.forEach(element => {
          items.push(element)
        });
        // createOrder(username,items,address,totalprice)
        swal("Order Success!",'', "success");
        history.push('/')
      }
    }else{
      swal("Please Login First!",'', "error");
      history.push('/login')
    }
  }

  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="p-2">
          <div className="d-flex flex-column">
            <div className="p-2">
              <h5>Address</h5>
            </div>
            <div className="p-2">
              <div class="form-group">
                <textarea class="form-control" id="address" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex flex-column">
            <div className="p-2">
              <h5>Items</h5>
            </div>
            {products.map((data)=>(
              <div className="p-2 my-1" style={{backgroundColor:'#444941',height:250+'px'}}>
                <div className="container d-flex flex-row ">
                  <div className="p-2 col-4">
                    <img src={data.imageURL} style={{width:50+'%',height:75+'%'}} alt="..."/>
                  </div>
                  <div className="p-2 col-8 d-flex flex-column">
                    <div className="p-2">
                      <h5 class="text-white">{data.name}</h5>
                    </div>
                    <div className="p-2">
                      <p class="text-white">{data.description}</p>
                    </div>
                    <div className="p-2 d-flex flex-row">
                      <div className="p-2">
                        <h6 class="text-white">{data.price} THB</h6>
                      </div>
                      <div className="p-2">
                        <h6 class="text-white"> x {data.quantity}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="navbar fixed-bottom navbar-dark" style={{backgroundColor:'#444941'}}>
        <div className="d-flex flex-row col-12 justify-content-end">
          <div className="p-2 my-auto text-white">Total : {totalprice}</div>
          <div className="p-2 my-auto float-right">
            
              <button type="button" className="btn" style={{backgroundColor:'#5F7A61',color:'white'}} onClick={()=>{orderproducts(totalprice)}}>
                Order
              </button>
            
          </div>
        </div>
      </nav>
    
    </div>
  );
}

Payment.propTypes = {
  products: PropTypes.array.isRequired
};

export default Payment
