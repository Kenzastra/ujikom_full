import React, {useEffect} from 'react'
import Layout from './Layout'
import DataBarang from '../components/List/Barang/DataBarang'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Barang = () => {
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
        <DataBarang/>
    </Layout>
  )
}

export default Barang