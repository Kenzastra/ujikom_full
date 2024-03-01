import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Barang from './pages/Barang';
import Users from './pages/Users';
import Kasir from './components/Transaksi/Kasir';
import Login from './components/Login';
import FormUpdateBarang from './pages/EditBarang';
import FormAddBarang from './pages/AddBarang';
import FormAddUser from './pages/AddUser';
import FormEditUser from './pages/EditUser';

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

        <Route path='/dashboard' element={<Dashboard/>}/>

        {/* Barang */}

        <Route path='/barang' element={<Barang/>}/>

        <Route path='/barang/add' element={<FormAddBarang/>}/>

        <Route path='/barang/edit/:id_barang' element={<FormUpdateBarang/>}/>

        {/* User */}

        <Route path='/user' element={<Users/>}/>

        <Route path='/user/add' element={<FormAddUser/>}/>

        <Route path='/user/edit/:id_user' element={<FormEditUser/>}/>

        {/* Kasir */}

        <Route path='/kasir' element={
          <>
          <Navbar/>
          <Kasir/>
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
