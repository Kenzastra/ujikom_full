import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Userslist = () => {
    const [user, setUser] = useState([]);

    const getUser = async() => {
      const response = await axios.get('http://localhost:5000/user');
      setUser(response.data);
    }

    const deleteUser = async (id_user) => {    
      try {
        await axios.delete(`http://localhost:5000/user/${id_user}`);
      getUser();
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {
      getUser();
    }, []);
  
    return (    
            <div className="container p-3">
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
                      <td>
                      <button className='button is-info ml-3'><Link to={`/user/edit/${data.id_user}`} className='has-text-white'>Edit</Link></button>
                      <button className='button is-danger ml-3' onClick={() => deleteUser(data.id_user)}>Hapus</button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='button is-success'><Link to="/user/add" className='has-text-white'>Tambah User</Link></button>
            </div>
    )
}

export default Userslist