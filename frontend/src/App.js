import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Barang from './pages/Barang';
import Users from './pages/Users';
import Login from './components/Login';
import FormUpdateBarang from './pages/EditBarang';
import FormAddBarang from './pages/AddBarang';
import FormAddUser from './pages/AddUser';
import FormEditUser from './pages/EditUser';
import KasirPage from './pages/KasirPage';
import RiwayatPage from './pages/RiwayatPage';
import RiwayatDetailPage from './pages/RiwayatDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Login/>
          </>
        }
        />

        {/* Dashboard */}

        <Route path='/dashboard' element={<Dashboard/>}/>

        {/* Barang */}

        <Route path='/barang' element={<Barang/>}/>

        <Route path='/barang/add' element={<FormAddBarang/>}/>

        <Route path='/barang/edit/:id_barang' element={<FormUpdateBarang/>}/>

        {/* User */}

        <Route path='/user' element={<Users/>}/>

        <Route path='/user/add' element={<FormAddUser/>}/>

        <Route path='/user/edit/:id_user' element={<FormEditUser/>}/>

        {/* Transaksi */}

        <Route path='/kasir' element={<KasirPage/>}/>

        <Route path='/riwayat' element={<RiwayatPage/>}/>

        <Route path='/riwayat/:id_penjualan' element={<RiwayatDetailPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
