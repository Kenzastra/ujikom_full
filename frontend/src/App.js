import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import DataBarang from './components/List/Barang/DataBarang';
import Users from './components/List/User/Users';
import Kasir from './components/Transaksi/Kasir';
import Login from './components/Login';
import FormUpdateBarang from './components/List/Barang/FormUpdateBarang';
import FormAddBarang from './components/List/Barang/FormAddBarang';
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

        <Route path='/dashboard' element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
        }
        />

        {/* Barang */}

        <Route path='/barang' element={
          <>
          <Navbar/>
          <DataBarang/>
          </>
        }
        />

        <Route path='/barang/add' element={
          <>
          <Navbar/>
          <FormAddBarang/>
          </>
        }/>

        <Route path='/barang/edit/:id' element={
          <>
          <Navbar/>
          <FormUpdateBarang/>
          </>
        }/>

        {/* User */}

        <Route path='/users' element={
          <>
          <Navbar/>
          <Users/>
          </>
        }
        />

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
