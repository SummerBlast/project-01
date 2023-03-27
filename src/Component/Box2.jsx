import React from 'react'

function Box2() {
  return (
   <div className='px-20'>
     <div className='border-2 border-yellow-700 flex justify-center p-7'>
        <div className='text-center'>
              <h1 className='text-4xl font-extrabold text text-yellow-600'>GET YOUR PIZZA DELIVERED!</h1>
              <p className='text-white mt-2 text'>Enjoy Our Dishes Whenever You Want</p>
              <button className='px-5 py-1 btn rounded-lg mt-2 text text-white'>Order Now</button>
        </div>
     </div>
     <div className=' flex justify-center mt-36'>
        <div className='text-center'>
              <h1 className='text-4xl font-extrabold text text-white'>CAST YOUR EYES IN OUR ENCHANTING MENU!</h1>
              <p className='text-white mt-2 text'>Deliciousess!This Is Where It Happens</p>
              <img className='ml-60' src='./Image/pizza4.png' alt=''/>
              
        </div>
     </div>
    
   </div>
  )
}

export default Box2