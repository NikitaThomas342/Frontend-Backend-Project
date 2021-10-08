import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios'

function Register() {

  const history = useHistory()

  const createaccount = () => {
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('psw').value

    axios.post(`http://localhost:8080/api/register/`,{username:username,password:password,email:email}).then(res => {
        console.log(res)
    })

    swal("Register Success!",'', "success");
    history.push('/login');
  }

  return (
    <div>
      <h2 style={{margin:35+'px'}}>Register</h2>
      <div className="container w-10 my-5" style={{backgroundColor:"#f3f3f3",borderRadius:10+'px',border:1+'px hidden black',padding:45+'px'}}>
        <div className="d-flex flex-column justify-content-start">
          <div className="p-2">
            <p>Please fill in this form to create an account.</p>
          </div>
          <div className="p-2">
            <hr />
          </div>
          <div className="p-2 d-flex flex-row">
            <div className="p-2 my-1">
              <label for="username">Username</label>
            </div>
            <div className="p-2">
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                id="username"
                class="form-control"
                required
              />
            </div>
          </div>
          <div className="p-2 d-flex flex-row">
            <div className="p-2 my-1">
              <label for="email">E-Mail</label>
            </div>
            <div className="p-2">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                class="form-control"
                required
              />
            </div>
          </div>
          <div className="p-2 d-flex flex-row">
            <div className="p-2 my-1">
              <label for="psw">Password</label>
            </div>
            <div className="p-2">
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                class="form-control"
                required
              />
            </div>
          </div>
          <div className="p-2">
            <hr />
          </div>
          <div className="p-2">
            <p>
              By creating an account you agree to our{" "}
              <a>Terms & Privacy</a>.
            </p>
          </div>
          <div className="p-2">
            <button type="submit" class="btn" style={{backgroundColor:'#5F7A61',color:'white'}} onClick={()=>{createaccount()}}>
              Register
            </button>
          </div>
        </div>
        <div className="mx-2 my-2">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <a href="#">Sign in</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register
