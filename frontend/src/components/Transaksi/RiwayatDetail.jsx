import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';

const RiwayatDetail = () => {
    
    const {id_penjualan} = useParams();
    const [tanggal, setTanggal] = useState('');
    const [tunai, setTunai] = useState('');
    const [kembalian, setKembalian] = useState('');
    const [total, setTotal] = useState('');
    const [detail, setDetail] = useState([]);

    const getPenjualanById = async() => {
        const response = await axios.get(`http://localhost:5000/penjualan/${id_penjualan}`);
        setTanggal(response.data.tanggal_penjualan);
        setTunai(response.data.uang_pembayaran);
        setKembalian(response.data.kembalian);
        setTotal(response.data.total_harga);
        setDetail(response.data.details);
        console.log(detail);
        
    }

    const formatTanggal = (tanggal) => {
        const date = new Date(tanggal);
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
        getPenjualanById();
    }, []);

  return (
    <div className="container p-3">
        <h1 className='is-size-5'>Riwayat</h1>
        <div className="box mt-5">
            <div className="">
                <p>ID PENJUALAN : {id_penjualan}</p>
                <p>TANGGAL : {formatTanggal(tanggal)}</p>
            </div>           
                <table className='table is-bordered mt-5 is-fullwidth'>
                    <thead>
                        <tr>
                            <td>NAMA BARANG</td>
                            <td>JUMLAH BARANG</td>
                            <td>HARGA BARANG</td>
                            <td>SUBTOTAL</td>
                        </tr>
                    </thead>
                    {detail.map((detail, index) => (
                    <tbody>
                        <tr>
                            <td>{detail.nama_barang}</td>
                            <td>{detail.jumlah_produk}</td>
                            <td>{formatRupiah(detail.harga_barang)}</td>
                            <td>{formatRupiah(detail.subtotal)}</td>
                        </tr>
                    </tbody>
                  
                ))}
                </table>
                <div className="is-flex is-flex-direction-row-reverse">
                    <div className="is-fles is-flex-direction-column p-3" style={{width:"200px"}}>                        
                        <p>TOTAL : {formatRupiah(total)}</p>
                        <hr style={{backgroundColor:"black"}}/>
                        <p>TUNAI : {formatRupiah(tunai)}</p>
                        <p>KEMBALI : {formatRupiah(kembalian)}</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default RiwayatDetail