import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import DataBarang from './components/List/Barang/DataBarang';
import Users from './components/List/User/Users';
import Kasir from './components/Transaksi/Kasir';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
        }
        />

        <Route path='/barang' element={
          <>
          <Navbar/>
          <DataBarang/>
          </>
        }
        />

        <Route path='/users' element={
          <>
          <Navbar/>
          <Users/>
          </>
        }
        />

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
