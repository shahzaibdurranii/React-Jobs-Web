import React from 'react'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <ToastContainer 
        toastStyle={{
          backgroundColor: '#eff6ff',
          color: '#4338ca',
          fontSize: '16px',
          borderRadius: '8px',
          fontWeight:'bold',
          
  }}/>
    </>
  )
}

export default MainLayout;