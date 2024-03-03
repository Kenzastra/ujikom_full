import React, {useEffect} from 'react'
import RiwayatDetail from '../components/Transaksi/RiwayatDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
import Layout from './Layout'


const RiwayatDetailPage = () => {

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
        <RiwayatDetail/>
    </Layout>
  )
}

export default RiwayatDetailPage