import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import swal from 'sweetalert';
import { logoutStatus, userLogout, useridLogout, adminClose } from '../actions'

function Navbar(props) {

  const logged = useSelector(state=>state.logged)
  const username = useSelector(state=>state.user)

  const history = useHistory()
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logoutStatus())
    dispatch(userLogout())
    dispatch(useridLogout())
    dispatch(adminClose())
    swal("Logged Out",'', "success");
    history.push('/')
  }

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark" style={{backgroundColor:'#444941'}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="d-flex flex-row">
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-tree-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z" />
                </svg>
              </div>
              <div className="p-2 mx-1 my-auto"><b>CACTUS</b></div>
            </div>
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <ul className="navbar-nav ml-auto">
                <li
                  style={{marginTop:19+'px'}}
                  className={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/">
                    <b>Home</b>
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mx-2">
                <li
                  style={{marginTop:15+'px'}}
                  className={`nav-item  ${
                    props.location.pathname === "/cart" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/cart">
                    <button className="btn btn-outline-success" type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="20"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </button>
                  </Link>
                </li>
                <li
                  style={{marginTop:15+'px'}}
                  className={`nav-item  ${
                    props.location.pathname === "/favorite" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/favorite">
                    <button className="btn btn-outline-danger mx-2" type="submit">
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
                  </Link>
                </li>


                {logged ? (
                  <div>
                      <li>
                        <div class="text-white" style={{marginTop:27+'px'}}><b>Hi!, {username}</b></div>
                      </li>
                  </div>
                ):(<div><li
                  className={`nav-item  ${
                    props.location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/login">
                    <b>Login</b>
                  </Link>
                </li>
                <li
                  className={`nav-item  ${
                    props.location.pathname === "/register" ? "active" : ""
                  }`}
                >
                  <Link className="nav-link" to="/register">
                    <b>Register</b>
                  </Link>
                </li></div>)}
                {logged ? (<button onClick={()=>{onLogOut()}}className="btn btn-success" style={{width:100+'px',height:40+'px',marginLeft:20+'px',marginTop:20+'px'}}>Log Out</button>):(<></>)}
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
