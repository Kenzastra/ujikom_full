import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditBarang = () => {
  const [namaBarang, setNamaBarang] = useState('')
  const [satuanBarang, setSatuanBarang] = useState('')
  const [stokBarang, setStokBarang] = useState('')
  const [hargaBarang, setHargaBarang] = useState('')
  const [msg,SetMsg] = useState('');
  const {id_barang} = useParams('');

  const navigate = useNavigate();

  const getBarangById = async() => {
    const response = await axios.get(`http://localhost:5000/barang/${id_barang}`);
    setNamaBarang(response.data.nama_barang);
    setSatuanBarang(response.data.satuan_barang);
    setStokBarang(response.data.stok_barang);
    setHargaBarang(response.data.harga_barang);
  }

  const editBarang = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_barang", namaBarang);
    formData.append("satuan_barang", satuanBarang);
    formData.append("stok_barang", stokBarang);
    formData.append("harga_barang", hargaBarang);
    try {
      await axios.patch(`http://localhost:5000/barang/${id_barang}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      navigate("/barang")
    } catch (error) {
      if(error.response) {
        SetMsg(error.response.data.msg)
      }
    }
  };

  useEffect(() => {
    getBarangById()
}, []);

  return (
        <div className='container p-3'>
        <div className="box is-fullwidth">
            <p className='title'>EDIT BARANG</p>
            <form className='form' onSubmit={editBarang}>
            <p className="has-text-centered">{msg}</p>
                <div className="is-flex is-align-items-center">  
                    <label htmlFor="" className='label'> Nama Barang</label>
                    <input type="text" className='input ml-3' style={{width:"200px"}} value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)}/>
                    <label htmlFor="" className='label ml-3'> Satuan</label>
                    <input type="text" className='input ml-3' style={{width:"100px"}} value={satuanBarang} onChange={(e) => setSatuanBarang(e.target.value)}/>
                    <label htmlFor="" className='label ml-3'> Stock</label>
                    <input type="number" className='input ml-3' style={{width:"100px"}} value={stokBarang} onChange={(e) => setStokBarang(e.target.value)}/>
                    <label htmlFor="" className='label ml-3'> Harga Rp.</label>
                    <input type="text" className='input' style={{width:"100px"}} value={hargaBarang} onChange={(e) => setHargaBarang(e.target.value)}/>
                </div>
                <div className="mt-5">
                  <button className='button is-success'>Tambah</button>
                  <a href="/barang" className='button is-danger ml-3'>Batal</a>
                </div>                
            </form>
        </div>
    </div>
  )
}

export default FormEditBarang