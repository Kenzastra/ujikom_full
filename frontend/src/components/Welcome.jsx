import React from 'react'
import { FaCashRegister, FaDatabase } from 'react-icons/fa6';
import { useSelector } from 'react-redux'

const Welcome = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <section className="hero has-background-light is-fullheight">
          
          <div className="hero-body is-flex-direction-column ">
          <div className="columns is-flex-direction-column" style={{width:"100%"}}>
          <p className='is-size-4 has-text-weight-semibold'>Welcome, <strong>{user && user.nama}</strong></p>
          <div className="columns is-flex-direction-row is-align-items-center">
            <div className="column is-flex is-justify-content-center has-font-weight-bold has-text-black logo" style={{fontSize:"100px"}}>
            KKASIR
            </div>
            <div className="column is-flex is-align-items-center">
              <div className="is-flex is-flex-direction-column is-align-items-center" style={{width:"100%"}}>
                <a href='/barang' className="box barang mb-0 is-flex is-justify-content-center is-align-items-center has-background-success" style={{width:"500px",height:"200px"}}>
                  <FaDatabase/>
                  <p className='p-3'>Master Data</p>
                </a>
              
                <a href="/kasir" className='box kasir mb-0 is-flex is-justify-content-center is-align-items-center mt-5 has-background-warning' style={{width:"500px",height:"200px"}}>
                  <FaCashRegister/>
                  <p className='p-3'>Kasir</p>
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Welcome