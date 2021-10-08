import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import axios from "axios"
import swal from 'sweetalert';
import {loginStatus, userLogin, useridLogin, adminMode} from '../actions'

function Login() {

    const dispatch = useDispatch()
    const history = useHistory()

    const loginacc = () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        
        axios.get(`http://localhost:8080/api/login/?username=${username}`).then(res => {
            let user = res.data[0]
            if(user){
                if(user.password===password){
                    dispatch(loginStatus())
                    dispatch(userLogin(user.username))
                    dispatch(useridLogin(user.id))
                    if(user.state===1){
                        dispatch(adminMode())
                    }
                    swal("Login Success!",'',"success")
                    history.push('/')
                }else{
                    swal("Invalid Credentials",'',"error")
                    history.push('/login')
                }
            }else{
                swal("Invalid Credentials",'', "error");
                history.push('/login')
            }
        })
    }

    return (
        <div style={{'backgroundImage': 'url(https://images.unsplash.com/photo-1565701175719-5ef844931183?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1648&q=80)'}}>

            <div className="container my-auto">
                <div className="d-flex justify-content-center">
                    <div className="card" style={{width: 18+'rem',margin:65+'px'}}>
                        <img className="card-img-top" src="https://i.pinimg.com/564x/04/71/1a/04711aaf1a2247dcf34e52ce57630ead.jpg" alt="..."/>
                        <div className="card-body">
                            <div className="d-flex flex-column  align-items-center">
                                <div className="p-2">
                                    <input type="text" className="user-username form-control" id="username" placeholder="Username"/>
                                </div>
                                <div className="p-2">
                                    <input type="text" className="user-password form-control" id="password" placeholder="Password"/>
                                </div>
                                <div className="p-2">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="p-2">
                                            <Link to='/register'>
                                                <button type="button" className="btn btn-dark">Register</button>
                                            </Link>
                                        </div>
                                        <div className="p-2">
                                                <button type="button" className="btn" style={{backgroundColor:'#5F7A61',color:'white'}} onClick={()=>{loginacc()}}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
  );
}
export default Login
