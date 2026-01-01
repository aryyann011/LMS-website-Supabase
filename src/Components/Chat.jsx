// import React from 'react'
import { XCircle } from 'lucide-react'
import { chatData } from '@/data/dummy'
import { Button } from './ui/button'
import { useAuth } from '@/Context/Authcontext'

const Chat = () => {
    const { handleClick } = useAuth();
  return (
<div className="fixed z-50 shadow-xl bg-white p-5 max-h-[80vh] inset-x-0 mx-auto w-[90vw] sm:inset-x-auto sm:right-5 sm:w-[350px] md:w-[400px] top-16">
      <div className='flex w-full justify-between items-center p-7 pl-5 pb-0'>
        <h1 className='font-semibold text-[20px]'>Messages</h1>
        <button 
            type="button"
            onClick={() => handleClick("chat")} 
            className='rounded-full p-1 hover:bg-gray-100'
        >
            <XCircle className='text-xl hover:text-red-500 transition'/>
        </button>
      </div>
      <div className='w-full mt-5 flex flex-col justify-start overflow-y-auto h-[calc(100%-120px)]'>
        {chatData.map((chat, index) => (
            <div key={index}>
              <div className='flex object-cover gap-4 items-center p-3'>
                  <img src={chat.image} className='w-12 h-12 rounded-full shrink-0' alt="" />
                  <div className='flex flex-col w-full text-left items-start gap-2'>
                      <h1 className='text-[18px] font-serif'>{chat.message}</h1>
                      <p>{chat.desc}</p>

                      <h1 className='text-[16px] font-serif'>{chat.time}</h1>
                  </div>
              </div>
              <div className="w-full h-px bg-black/10"></div>
            </div>
        ))}
      </div>
      <Button 
        className="w-full h-10 bg-[#03C9D7] hover:bg-[#05b2b0] text-white rounded-lg py-6 mb-4"
      >
        See All Messages
      </Button>
    </div>
  )
}

export default Chat
