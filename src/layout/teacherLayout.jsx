import React from 'react';
import Sidebar from '../Components/teacher/Sidebar';
import { useAuth } from '../Context/Authcontext'
import { Outlet, Navigate } from 'react-router-dom'
import Footer from '@/Components/Footer';

function TeacherLayout() {

    const {user, isLoading, isSidebarOpen} = useAuth()
    // const Navigate = useNavigate()
    if(isLoading) return <h1>Loading....</h1>
  return (
    (user?.user_metadata?.role === 'teacher') 
      ? (<div className='flex h-screen min-w-screen overflow-hidden'>
      <Sidebar/>
      <div
        className={`
          flex-1 w-full overflow-y-auto overflow-x-hidden
          transition-all duration-300
          ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}
        `}
      >

        <Outlet />
        <Footer/>
      </div>
    </div> ) 
      : (<Navigate to="/" replace /> )
  )
}

export default TeacherLayout