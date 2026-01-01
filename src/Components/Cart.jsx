import { XCircle } from "lucide-react";
import { cartData } from '@/data/dummy';
import { useAuth } from "@/Context/Authcontext";

const Cart = () => {
  const {handleClick} = useAuth();
  return (
    <div className='absolute z-50 shadow-2xl h-screen w-96 p-5 right-0 bg-white'>
      <div className='flex w-full justify-between items-center p-7 pl-5 pb-0'>
        <h1 className='font-semibold text-[20px]'>Shopping Cart</h1>
        <XCircle onClick={() => handleClick("cart")} className='hover:text-red-500 transition text-[20px] right-6'/>
      </div>
      <div className='w-full mt-5 flex flex-col justify-start'>
        {cartData.map((data, index) => (
        <div key={index}>
          <div className='flex object-cover gap-6 items-center p-5'>
            <img src={data.image} className='rounded-lg w-24 h-24' alt="img" />
            <div className='flex flex-col justify-around gap-2'>
              <h1 className='text-[18px] font-serif'>{data.name}</h1>
              <p>{data.category}</p>

              <h1 className='text-[22px] font-serif'>{data.price}</h1>
            </div>
          </div>
          <div className="w-full h-px bg-black"></div>
        </div>
      ))}
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <p>Sub Total</p>
          <h2 className='font-semibold'>$890</h2>
        </div>
        <div className='flex justify-between'>
          <p>discount</p>
          <h2 className='font-semibold'>- $90</h2>
        </div>
        <div className='flex justify-between'>
          <p>Total</p>
          <h2 className='font-semibold'>$800</h2>
        </div>
      </div>
    </div>
  )
}

export default Cart
