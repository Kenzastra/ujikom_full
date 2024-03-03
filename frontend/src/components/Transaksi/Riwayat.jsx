import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Riwayat = () => {
    const [penjualan, setPenjualan] = useState([]);

    const getPenjualan = async() => {
      const response = await axios.get('http://localhost:5000/penjualan');
      setPenjualan(response.data);
    }

    const formatTanggal = (tanggal_penjualan) => {
        const date = new Date(tanggal_penjualan);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day} ${hour}:${minute}`;
    }

    const formatRupiah = (angka) => {
        if (!angka) return ''; // Handle undefined or null values
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
    }

    useEffect(()=> {
        getPenjualan();
    }, []);

  return (
    <div className="container p-3">
              <h1 className='is-size-5'>Riwayat Penjualan</h1>
              <table className="table is-bordered is-hoverable is-striped is-fullwidth 
              is-fullwidth mt-5 border-custom">
                <thead className='border-custom'>
                  <tr className='border-custom'>
                    <th>No</th>
                    <th>ID Penjualan</th>
                    <th>Tanggal</th>
                    <th>Tunai</th>
                    <th>Kembalian</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {penjualan.map((data, index) => (
                    <tr key={data.id_penjualan}>
                      <td>{index + 1}</td>
                      <td>{data.id_penjualan}</td>
                      <td>{formatTanggal(data.tanggal_penjualan)}</td>
                      <td>{formatRupiah(data.uang_pembayaran)}</td>
                      <td>{formatRupiah(data.kembalian)}</td>
                      <td>{formatRupiah(data.total_harga)}</td>
                      <td>
                      <button className='button is-info'><Link to={`/riwayat/${data.id_penjualan}`} className='has-text-white'>View</Link></button>                      
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  )
}

export default Riwayat