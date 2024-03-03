import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { NavLink,useNavigate } from 'react-router-dom';
import {LogOut, reset} from "../features/authSlice"


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
        <nav className="navbar is-fixed has-background-info is-justify-content-space-between" style={{overflow: "auto"}} role="navigation" aria-label="main navigation">

          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <p className='is-size-3 has-text-weight-bold has-text-white logo'>KKASIR</p>
            </NavLink>
          </div>  
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className='button is-light' onClick={logout}>Log Out</button>
                </div>
              </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar