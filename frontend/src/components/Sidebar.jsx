import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {
    const dispatch = useDispatch();
    
    const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <aside className="menu p-2 has-shadow has-background-black-ter" style={{height:"100vh"}}>
            <p className='menu-label is-size-6'>
                General
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/barang"}>Barang</NavLink>
                </li>
            </ul>
            {user && user.role === "admin" && (
                <div>
                <p className="menu-label is-size-6 mt-4">
                    Admin
                </p>
                    <ul className="menu-list">
                        <li>
                            <NavLink to={"/user"}>Users</NavLink>
                        </li>
                    </ul>
                </div>
            )}
                
        </aside>
    </div>
  )
}

export default Sidebar