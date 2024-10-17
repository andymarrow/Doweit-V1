"use client"
import React,{useState} from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
import { UserCourseListContext } from '../create-course/_context/UserCourseListContext'

export default function DashboardLayout({children}) {
  
  const [userCourseList,setUserCourseList]=useState([]);
  return (
    <UserCourseListContext.Provider value={{userCourseList,setUserCourseList}}>
        <div>
            <div className='md:w-64 hidden md:block'>
                <SideBar />
            </div>
            <div className='md:ml-64 p-2'>
            <Header />
            <div className='p-3'>
                    {children}
            </div>
           
        </div>
     
       </div>
    </UserCourseListContext.Provider>
  )
}