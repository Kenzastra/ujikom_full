import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Kasir = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [idBarang, setIdBarang] = useState('');
  const [jumlahProduk, setJumlahProduk] = useState('');
  const [jumlahProdukCart, setJumlahProdukCart] = useState('');
  const [uangBayar, setUangBayar] = useState('');
  const [hargaBarang, setHargaBarang] = useState('');
  const [dateTime, setDateTime] = useState(new Date());

  const getKeranjang = async() => {
    const response = await axios.get('http://localhost:5000/keranjang');
    setJumlahProdukCart(response.data.jumlah_produk);
    setKeranjang(response.data);
  }

  const getKeranjangById = async(id_transaksi) =>{
    const response = await axios.get(`http://localhost:5000/keranjang/${id_transaksi}`);
    const {harga_barang} = response.data;
    setHargaBarang(harga_barang)
  }

  const addKeranjang = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/keranjang',{
        id_barang: idBarang,
        jumlah_produk : jumlahProduk
      })
      getKeranjang();
    } catch (error) {
      console.log(error);
    } 
  }

  const updateQty = async (id_transaksi) => {
    try {
      await axios.patch(`http://localhost:5000/keranjang/${id_transaksi}`, {
        jumlah_produk: jumlahProdukCart,
      },);
      console.log(jumlahProdukCart);
      
      getKeranjang();
    } catch (error) {
      console.log(error);
    }
  }

  const handleQtyChange = (e, id_transaksi) => {
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
    return total;
  }

  const kembalianUang = () => {
    
    const total = totalHarga();

    const kembalian = uangBayar ? parseFloat(uangBayar) - total
                                : ""  ;
    return kembalian;

  }

  useEffect(() => {
    getKeranjang(); setInterval(() => setDateTime(new Date()),1000);
  }, []);

  return (
    <section className="hero is-fullheight">
      <div className="hero-body is-align-items-start pb-0">
        <div className="container is-desktop">
          <div className="columns">
            
              <div className="column is-two-thirds has-background-warning">
                <div className="items is-flex is-flex-direction-row">
                  <p className='mr-3'>TANGGAL</p>
                  <p>{dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString()}</p>
                </div>
                <div className="items mt-3">
                  <p>TAMBAH ITEM</p>
                  <form onSubmit={addKeranjang} className='is-flex is-flex-direction-row mt-3'>
                      <input type="text" name="" id="" className='input mr-2' placeholder='ID/Nama Barang' value={idBarang} onChange={(e) => setIdBarang(e.target.value)}/>
                      <input type="number" name="" placeholder='Qty' className='input mr-2' value={jumlahProduk} onChange={(e) => setJumlahProduk(e.target.value)}/>
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
                          <td><input type="number" name="" id="" className='input' value={item.jumlah_produk} onChange={(e) => handleQtyChange(e, item.id_transaksi)} onClick={()=> updateQty(item.id_transaksi)}/></td>
                          <td>{item.harga_barang}</td>
                          <td>{item.subtotal}</td>
                          <td><button className='button is-danger' onClick={() => deleteKeranjang(item.id_transaksi)}>X</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </form>
              </div>
              <div className="column pt-0 ">
                <div className="box has-background-warning is-flex is-flex-direction-column">
                  <h1 className='title'>TOTAL</h1>
                  <p className='input p-5 is-size-2'>{totalHarga()}</p>
                  <div className="is-flex mt-5 is-justify-content-space-between">
                    <p className='has-text-weight-semibold is-size-5'>Tunai</p>
                    <input type="text" className="input" style={{width:"280px"}} value={uangBayar} onChange={(e) => setUangBayar(e.target.value) } />
                  </div>
                  <div className="is-flex mt-5 is-justify-content-space-between">
                    <p className='has-text-weight-semibold is-size-5'>Kembalian</p>
                    <input type="text" className='input' style={{width:"280px"}} value={kembalianUang()}readOnly />
                  </div>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kasir