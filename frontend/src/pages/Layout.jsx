import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns" style={{minHeight:"100vh"}}>
            <div className="column is-2 has-background-black-ter">
                <Sidebar/>
            </div>
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
    
  )
}

export default Layout