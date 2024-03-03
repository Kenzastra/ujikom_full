import React, {useEffect} from 'react'
import Riwayat from '../components/Transaksi/Riwayat'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
import Layout from './Layout'


const RiwayatPage = () => {

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
    <Layout>
        <Riwayat/>
    </Layout>
  )
}

export default RiwayatPage