import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaClockRotateLeft, FaHouse, FaList, FaRightLeft, FaTableList, FaUser } from 'react-icons/fa6'

const Sidebar = () => {

    const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <aside className="menu p-2 has-shadow has-background-black" style={{height:"100vh"}}>
            <p className='menu-label is-size-6 has-text-white'>
                General
            </p>
            <ul className="menu-list sidebar-hover">
                <li>
                    <NavLink to={"/dashboard"} className={"has-text-grey is-flex is-align-items-center"}><FaHouse className='mr-2'/> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/barang"} className={"has-text-grey is-flex is-align-items-center"}><FaList className='mr-2'/>Barang</NavLink>
                </li>
                <li>
                    <NavLink to={"/riwayat"} className={"has-text-grey is-flex is-align-items-center"}><FaClockRotateLeft className='mr-2'/>Riwayat</NavLink>
                </li>
            </ul>
            {user && user.role === "admin" && (
                <div>
                <p className="menu-label is-size-6 mt-4 has-text-white">
                    Admin
                </p>
                    <ul className="menu-list sidebar-hover">
                        <li>
                            <NavLink to={"/user"} className={"has-text-grey is-flex is-align-items-center"}> <FaUser className='mr-2'/>Users</NavLink>
                        </li>                        
                    </ul>
                </div>
            )}
                
        </aside>
    </div>
  )
}

export default Sidebar