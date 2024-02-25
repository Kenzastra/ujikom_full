import React,{useState, useEffect} from 'react';
import axios from "axios";

const DataBarang = () => {
  const [barang, setBarang] = useState([]);

  const getBarang = async() => {
    const response = await axios.get('http://localhost:5000/barang');
    setBarang(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getBarang();
  }, []);

  return (
    <div className='columns mt-0'>
      <div className=" is-flex is-flex-direction-row is-fullwidth" style={{width:"100%"}}>
        {/* Sidebar */}
          <aside className="column menu has-background-dark is-one-fifth" style={{height:"100vh", flex:"none", width:"15%" }}>
                <p className='menu-label p-2 is-size-6'>
                    General
                </p>
                <ul className="menu-list">
                    <li><a href="/" className=''>Dashboard</a></li>
                    <li><a href="/users" className='is-active'>Barang</a></li>
                </ul>
            </aside>
          <div className="column">

        {/* Content */}
          <div className="container">
            <h1 className='is-size-5'>Data Barang</h1>
            <table className="table is-bordered is-hoverable is-striped is-fullwidth 
            is-fullwidth mt-5 border-custom">
              <thead className='border-custom'>
                <tr className='border-custom'>
                  <th>No</th>
                  <th>ID Barang</th>
                  <th>Nama</th>
                  <th>Satuan</th>
                  <th>Stok Barang</th>
                  <th>Harga Jual</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {barang.map((data, index) => (
                  <tr key={data.id_barang}>
                    <td>{index + 1}</td>
                    <td>{data.id_barang}</td>
                    <td>{data.nama_barang}</td>
                    <td>{data.satuan_barang}</td>
                    <td>{data.stok_barang}</td>
                    <td>{data.harga_barang}</td>
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

export default DataBarang