import React , {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {LoginUser, reset} from "../features/authSlice"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector(
    (state) => state.auth
  );

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({username, password}));
  }

  useEffect(()=>{
    if(user || isSuccess){
      navigate("/dashboard");
    }
    dispatch(reset());
  },[user, isSuccess, dispatch, navigate]);

  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body is-align-items-center">
        <div className="container">
          <div className="columns">

            <div className="column is-flex is-flex-direction-column is-half is-align-items-center is-justify-content-center">
                <p className='has-font-weight-bold has-text-black logo' style={{fontSize:"100px"}}>KKASIR</p>
            </div>
            <div className="column is-flex is-justify-content-center is-align-items-center">
              <form onSubmit={Auth} className="box p-3" style={{width:"500px"}}>
                {isError && <p className="has-text-centered">{message}</p>}
                <p className='title has-text-black'>Login</p>
                  <div className="field">                      
                    <label className='label mt-3'>Username</label>
                      <div className="control">
                        <input type="text" className='input' placeholder='Username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                      </div>
                  </div>
                  <div className="field">
                    <label className="label mt-3">Password</label>
                      <div className="control">
                        <input type="password" className='input' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                  </div>
                <button type="submit" className='button is-success is-fullwidth mt-3'>{isLoading ? 'Loading...' : "Login"}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>      
      
  )
}

export default Login