import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Kasir from '../components/Transaksi/Kasir'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const KasirPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state => state.auth));

    useEffect(()=> {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(()=> {
       if(isError){
        navigate("/");
       }
    }, [isError, navigate]);
  return (
    <div>
        <Navbar/>
        <Kasir/>
    </div>
  )
}

export default KasirPage