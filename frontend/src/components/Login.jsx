import React from 'react'
import {FaUserSecret} from "react-icons/fa6";

const Login = () => {
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-body is-align-items-center">
        <div className="container">
          <div className="columns">

            <div className="column is-flex is-flex-direction-column is-half is-align-items-center is-justify-content-center">
                <FaUserSecret size={"20rem"} style={{color:"black"}}/>
                <p className='is-size-1 has-font-weight-bold has-text-black'>Sosok Hitam</p>
            </div>
            <div className="column is-flex is-justify-content-center">
                <div className="box" style={{height:"500px", width:"500px"}}>
                    <p className='title has-text-black'>Login</p>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login