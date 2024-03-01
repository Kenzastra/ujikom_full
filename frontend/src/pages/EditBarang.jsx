import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditBarang from '../components/List/Barang/FormEditBarang'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const EditBarang = () => {
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
        <FormEditBarang/>
    </Layout>
  )
}

export default EditBarang