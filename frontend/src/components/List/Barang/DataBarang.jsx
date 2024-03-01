import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {FaPlus, FaMinus, FaPenToSquare} from "react-icons/fa6"

const DataBarang = () => {
  const [barang, setBarang] = useState([]);

  const getBarang = async() => {
    const response = await axios.get('http://localhost:5000/barang');
    setBarang(response.data);
  }

  const deleteBarang = async (id_barang) => {    
    try {
      await axios.delete(`http://localhost:5000/barang/${id_barang}`);
    getBarang();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBarang();
  }, []);

  return (
        <div className="container p-3">
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
                    <td>
                      <button className='button is-info ml-3'><Link to={`/barang/edit/${data.id_barang}`} className='has-text-white'>Edit</Link></button>
                      <button className='button is-danger ml-3' onClick={() => deleteBarang(data.id_barang)}>Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className='button is-success'><Link to={`/barang/add`} className='has-text-white'>Tambah Barang</Link></button>
      </div>
  )
}

export default DataBarang