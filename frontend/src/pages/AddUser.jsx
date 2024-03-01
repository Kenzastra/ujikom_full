import React,{useEffect} from 'react'
import Layout from './Layout'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
import FormAddUser from '../components/List/User/FormAddUser'

const AddUser = () => {
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
        <FormAddUser/>
    </Layout>
  )
}

export default AddUser