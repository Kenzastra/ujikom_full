import React , {useState,useEffect} from 'react';
import axios from 'axios';

const Users = () => {
    const [user, setUser] = useState([]);

    const getUser = async() => {
      const response = await axios.get('http://localhost:5000/user');
      setUser(response.data);
    }
  
    useEffect(() => {
      getUser();
    }, []);
  
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
                      <li><a href="/barang" >Barang</a></li>
                  </ul>
                  <p className="menu-label p-2 is-size-6">
                    Admin
                  </p>
                  <ul className="menu-list">
                    <li><a href="/users" className='is-active'>Users</a></li>
                  </ul>
              </aside>
            <div className="column">
  
          {/* Content */}
            <div className="container">
              <h1 className='is-size-5'>Data Users</h1>
              <table className="table is-bordered is-hoverable is-striped is-fullwidth 
              is-fullwidth mt-5 border-custom">
                <thead className='border-custom'>
                  <tr className='border-custom'>
                    <th>No</th>
                    <th>ID User</th>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((data, index) => (
                    <tr key={data.id_user}>
                      <td>{index + 1}</td>
                      <td>{data.id_user}</td>
                      <td>{data.nama}</td>
                      <td>{data.username}</td>
                      <td>{data.role}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
        </div>
      </div>
    )
}

export default Users