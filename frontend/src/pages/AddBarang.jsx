import React, {useEffect} from 'react'
import Layout from './Layout'
import FormAddBarang from '../components/List/Barang/FormAddBarang'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddBarang = () => {
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
        <FormAddBarang/>
    </Layout>
  )
}

export default AddBarang