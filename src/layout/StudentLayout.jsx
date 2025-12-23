import React from 'react'
import { useAuth } from '../Context/Authcontext'
import { Outlet, Navigate } from 'react-router-dom'
import StudentSidebar from '../Components/Student/StudenSidebar'

const StudentLayout = () => {

    const {user, isLoading} = useAuth()

    if(isLoading) return <h1>Loading...</h1>
  return (
    <div>
        (user?.user_metadata?.role === 'student') 
        ? <div className='flex'>
        <StudentSidebar/>
        <div className="flex-1 p-10">
            <Outlet />
        </div>
        </div>  
        : <Navigate to="/" replace /> 
    </div>
  )
}

export default StudentLayout
