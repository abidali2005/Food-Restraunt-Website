import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Modal from "../../Model";
import Cart from "../screens/Cart";
import { useCart } from '../components/ContextReducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let navigate = useNavigate();
  let data = useCart() || [];

  const logout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
        style={{ boxShadow: "0px 10px 20px black", position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 active" to="/">Home</Link>
              </li>
              {localStorage.getItem('authToken') &&
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3 active" to="/myorder">My orders</Link>
                </li>
              }
            </ul>
            {!localStorage.getItem('authToken') ?
              <form className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
                <Link className='btn bg-white text-success mx-1' to="/signup">Signup</Link>
              </form>
              :
              <div>
                <div className='btn bg-white text-success mx-1' onClick={() => setCartView(true)}>My Cart {" "}
                  <Badge color="secondary" badgeContent={data.length}></Badge>
                </div>
                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                <div className='btn bg-white text-success mx-1' onClick={logout}>Logout</div>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
