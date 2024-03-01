import React from 'react'
import {FaUserSecret} from "react-icons/fa6";

const Login = () => {
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body is-align-items-center">
        <div className="container">
          <div className="columns">

            <div className="column is-flex is-flex-direction-column is-half is-align-items-center is-justify-content-center">
                <p className='has-font-weight-bold has-text-black logo' style={{fontSize:"100px"}}>KKASIR</p>
            </div>
            <div className="column is-flex is-justify-content-center is-align-items-center">
                <div className="box p-3" style={{width:"500px"}}>
                    <p className='title has-text-black'>Login</p>
                    <label className='label mt-3'>Username</label>
                    <input type="text" className='input' placeholder='Username'/>
                    <label htmlFor="" className="label mt-3">Password</label>
                    <input type="password" className='input mt-3' placeholder='Password'/>
                    <button type="submit" className='button is-success is-fullwidth mt-3'>Login</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login