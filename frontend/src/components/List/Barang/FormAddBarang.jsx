import React from 'react'

const FormAddBarang = () => {
  return (
    <div className='columns mt-0'>
      <div className=" is-flex is-flex-direction-row is-fullwidth" style={{width:"100%"}}>
        {/* Sidebar */}
          <aside className="column menu has-background-black-ter is-one-fifth" style={{height:"100vh", flex:"none", width:"15%" }}>
                <p className='menu-label p-2 is-size-6'>
                    General
                </p>
                <ul className="menu-list">
                    <li><a href="/" className=''>Dashboard</a></li>
                    <li><a href="/barang" className='is-active'>Barang</a></li>
                </ul>
                <p className="menu-label p-2 is-size-6">
                  Admin
                </p>
                <ul className="menu-list">
                  <li><a href="/users">Users</a></li>
                </ul>
            </aside>
          

        {/* Content */}
        <div className="column p-5">
        <div className='container'>
        <div className="box is-fullwidth">
            <p className='title'>ADD BARANG</p>
            <form className='form'>
                <div className="is-flex is-align-items-center">  
                    <label htmlFor="" className='label'> Nama Barang</label>
                    <input type="text" className='input ml-3' style={{width:"200px"}}/>
                    <label htmlFor="" className='label ml-3'> Stock</label>
                    <input type="number" className='input ml-3' style={{width:"100px"}}/>
                </div>
            </form>
        </div>
    </div>
        </div>
      </div>
    </div>
    
  )
}

export default FormAddBarang
