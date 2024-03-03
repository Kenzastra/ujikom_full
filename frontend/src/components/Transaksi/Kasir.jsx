import React,{useState, useEffect} from 'react';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';

const Kasir = () => {
  const [barang, setBarang] = useState([]);
  const [keranjang, setKeranjang] = useState([]);
  const [idBarang, setIdBarang] = useState('');
  const [jumlahProduk, setJumlahProduk] = useState('');
  const [jumlahProdukCart, setJumlahProdukCart] = useState('');
  const [uangBayar, setUangBayar] = useState('');
  // const [hargaBarang, setHargaBarang] = useState('');
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  const getKeranjang = async() => {
    const response = await axios.get('http://localhost:5000/keranjang');
    setJumlahProdukCart(response.data.jumlah_produk);
    setKeranjang(response.data);
  }

  const getBarang = async() => {
    const response = await axios.get('http://localhost:5000/barang');
    setBarang(response.data);
  }

  // const getKeranjangById = async(id_transaksi) =>{
  //   const response = await axios.get(`http://localhost:5000/keranjang/${id_transaksi}`);
   
  // }

  const addKeranjang = async(e) => {
    e.preventDefault();
    try {
      if(jumlahProduk < 1) {
        return alert('Tidak Bisa Kurang Dari Nol!');
      }

      const item = await axios.get(`http://localhost:5000/barang/${idBarang}`);
      
      if (jumlahProduk > item.data.stok_barang) {
        return alert('Tidak Bisa Melebihi Jumlah Stok!');
      }
      await axios.post('http://localhost:5000/keranjang',{
        id_barang: idBarang,
        jumlah_produk : jumlahProduk
      })
      getKeranjang();
    } catch (error) {
      console.log(error);
    } 
  }

  const updateQty = async (id_transaksi,id_barang) => {
    if(jumlahProdukCart < 0) {
      return alert("Tidak Bisa Kurang Dari Nol!");
    }
    
    try {

      const item = await axios.get(`http://localhost:5000/barang/${id_barang}`);
      
      if (jumlahProdukCart > item.data.stok_barang) {
        return alert('Tidak Bisa Melebihi Jumlah Stok!');
      }
      await axios.patch(`http://localhost:5000/keranjang/${id_transaksi}`, {
        jumlah_produk: jumlahProdukCart,
      },);
      
      getKeranjang();
    } catch (error) {
      console.log(error);
    }
  }

  const handleQtyChange = (e) => {
    const { value } = e.target;
    setJumlahProdukCart(value);
  }
  

  const deleteKeranjang = async(id_transaksi) => {
    try {
      await axios.delete(`http://localhost:5000/keranjang/${id_transaksi}`);
      getKeranjang();
    } catch (error) {
      console.log(error);
    }
  }

  const totalHarga = () => {
    const total = keranjang.reduce((acc, item) => acc + parseFloat(item.subtotal),0);
    
    return total.toFixed(2);
  }

  const kembalianUang = () => {
    
    const total = totalHarga();

    const kembalian = uangBayar ? parseFloat(uangBayar) - total
                                : ""  ;
    return kembalian;

  }

  const Checkout = async() => {
    if(!uangBayar) {
      return alert("Kolom Tunai Masih Kosong!")
    }
    
    try {
      await axios.post("http://localhost:5000/checkout",{
        total: totalHarga(),
        kembalian: kembalianUang(),
        uang_pembayaran: parseFloat(uangBayar)
      });
      getKeranjang();
      navigate("/kasir");
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getKeranjang(); 
    getBarang();
    setInterval(() => setDateTime(new Date()),1000);
  }, []);

  return (
    <section className="hero is-fullheight">
      <div className="hero-body is-align-items-start pb-0">
        <div className="container">
          <div className="columns is-">
            <div className="column is-two-thirds has-background-warning box m-0">
                <div className="items is-flex is-flex-direction-row">
                  <p className='mr-3'>TANGGAL</p>
                  <p>{dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString()}</p>
                </div>
                <div className="items mt-3">
                  <p>TAMBAH ITEM</p>
                  <form onSubmit={addKeranjang} className='is-flex is-flex-direction-row mt-3'>
                      <input type="text" list='barang' className='input mr-2' placeholder='ID/Nama Barang' value={idBarang} onChange={(e) => setIdBarang(e.target.value)}/>                      
                      <datalist id='barang'>
                        {barang.map((item, index) => (                        
                          <option key={index} value={item.id_barang} style={{width:"10px"}}>{item.id_barang} - {item.nama_barang}</option>                          
                        ))}
                      </datalist>
                      <input type="number" placeholder='Qty' className='input mr-2' value={jumlahProduk} onChange={(e) => setJumlahProduk(e.target.value)}/>
                      <button type='submit' className='button is-info'>+</button>
                  </form>
                  
                </div>
                <form>
                  <table className='mt-5 table is-bordered is-fullwidth'>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>ID Barang</th>
                        <th>Nama Barang</th>
                        <th>Jumlah Barang</th>
                        <th>Harga Barang</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keranjang.map((item, index) => (
                        <tr key={(item.id_transaksi)}>
                          <td>{index + 1}</td>
                          <td>{item.id_barang}</td>
                          <td>{item.nama_barang}</td>
                          <td><input type="number" name="" id="" className='input' value={item.jumlah_produk} onChange={(e) => handleQtyChange(e, item.id_transaksi)} onClick={()=> updateQty(item.id_transaksi, item.id_barang)}/></td>
                          <td>{item.harga_barang}</td>
                          <td>{item.subtotal}</td>
                          <td><button className='button is-danger' onClick={() => deleteKeranjang(item.id_transaksi)}>X</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </form>
            </div>
            <div className="box column has-background-warning is-flex is-flex-direction-column ml-5">
                <h1 className='title'>TOTAL</h1>
                  <p className='input p-5 is-size-2'>
                    <CurrencyFormat value={totalHarga()} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                  </p>
                  <div className="is-flex mt-5 is-justify-content-space-between">
                    <p className='has-text-weight-semibold is-size-5'>Tunai</p>
                    <input type="text" className="input" style={{width:"280px"}} value={(uangBayar)} onChange={(e) => setUangBayar(e.target.value) } />
                  </div>
                  <div className="is-flex mt-5 is-justify-content-space-between">
                    <p className='has-text-weight-semibold is-size-5'>Kembalian</p>
                    <input type="text" className='input' style={{width:"280px"}} value={kembalianUang()}readOnly />
                  </div>
                <div className="button mt-5" onClick={Checkout}>Checkout</div>
            </div>                
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kasir