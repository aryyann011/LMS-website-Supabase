// import React from 'react'
import { XCircle } from "lucide-react"
import { useAuth } from "@/Context/Authcontext"
import { notifications } from "@/data/dummy"
import { Button } from "./ui/button"

const Notifications = () => {
    const { handleClick } = useAuth()

  return (
    <div className='absolute z-50 shadow-xl max-h-[80vh]
 w-[80vw] sm:w-96 md:w-[420px]
 p-5 bg-white right-8 top-20 object-contain'>
      <div className='flex w-full justify-between items-center pt-4 pr-7 pl-5 pb-0'>
        <h1 className='font-semibold text-[20px]'>Notifications</h1>
        <XCircle onClick={() => handleClick("notifications")} className='hover:text-red-500 transition text-[20px] right-6'/>
      </div>
      <div className='w-full mt-2 flex flex-col justify-start'>
        {notifications.map((noti, index) => (
            <div key={index}>
              <div className='flex object-cover gap-3 sm:gap-4 items-center p-3 sm:p-4'>
                  <img src={noti.image} className='w-12 h-12 rounded-full shrink-0' alt="" />
                  <div className='flex flex-col w-full text-left'>
                      <h1 className='text-sm sm:text-base font-serif'>{noti.title}</h1>
                      <p>{noti.message}</p>
                  </div>
              </div>
              <div className="w-full h-px bg-black/10"></div>
            </div>
        ))}
      </div>
      <Button 
        className="w-full h-8 bg-[#03C9D7] hover:bg-[#05b2b0] text-white rounded-lg py-6 mb-4 mt-3"
      >
        See All Messages
      </Button>
    </div>
  )
}

export default Notifications
