import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const FormAddUser = () => {
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg,SetMsg] = useState('');
    const navigate = useNavigate();

    const addUser = async(e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/user", {
          nama: nama,
          username: username,
          password: password,
          confPassword: confPassword,
          role: role,
        });
        navigate("/user")
      } catch (error) {
        if(error.response) {
          SetMsg(error.response.data.msg)
        }
      }
    };

  return (
    <div className='container p-3'>
        <div className="box is-fullwidth is-flex is-flex-direction-column">
            <p className='title'>ADD NEW USER</p>
            <form className='form' onSubmit={addUser}>
            <p className="has-text-centered">{msg}</p>                 
            <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="******"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select name="" id="" value={role} onChange={(e)=> setRole(e.target.value)}>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input type="submit" className='button is-success' />
                </div>
              </div>                
            </form>
        </div>
    </div>
  )
}

export default FormAddUser