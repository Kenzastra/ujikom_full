import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Kasir = () => {
  const [keranjang, setKeranjang] = useState([]);
  const [idBarang, setIdBarang] = useState('');
  const [jumlahProduk, setJumlahProduk] = useState('');
  const [jumlahProdukCart, setJumlahProdukCart] = useState('');
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
    
    

    // Update other fields based on the changed quantity
  //   const updatedKeranjang = keranjang.map(item => {
  //     if (item.id_transaksi === id_transaksi) {
  //       // Perform necessary calculations or updates based on the changed quantity
  //       // For example, update the subtotal based on the changed quantity
  //       const subtotal = value * item.harga_barang;
  //       return { ...item, jumlah_produk: value, subtotal: subtotal };
  //     }
      
  //     return item;
  //   });

  //   setKeranjang(updatedKeranjang);
  }
  

  const deleteKeranjang = async(id_transaksi) => {
    try {
      await axios.delete(`http://localhost:5000/keranjang/${id_transaksi}`);
      getKeranjang();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getKeranjang(); setInterval(() => setDateTime(new Date()),1000);
  }, []);

  return (
    <section className="hero is-fullheight">
      <div className="hero-body is-align-items-start">
        <div className="container">
          <div className="columns">
            
              <div className="column is-two-thirds has-background-warning">
                <div className="items is-flex is-flex-direction-row">
                  <p className='mr-3'>TANGGAL</p>
                  <p>{dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString()}</p>
                </div>
                <div className="items mt-3">
                  <p>TAMBAH ITEM</p>
                  <form onSubmit={addKeranjang} className='is-flex is-flex-direction-row'>
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
              <div className="column">
                <div className="box">
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br/>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item" aria-label="reply">
                            <span className="icon is-small">
                              <i className="fas fa-reply" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a className="level-item" aria-label="retweet">
                            <span className="icon is-small">
                              <i className="fas fa-retweet" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a className="level-item" aria-label="like">
                            <span className="icon is-small">
                              <i className="fas fa-heart" aria-hidden="true"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </article>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kasir