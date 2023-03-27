import React from 'react'
import { useState } from 'react'



function Navbar() {
    const[nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <>
    <div className=' px-4 md:px-20 mx-auto'>
       <div className='flex justify-between text-white py-3 text'>
           <div className='logo py-2'>
             <img className='' src='./Image/cropped-Favicon 1.png' alt=""/>
           </div>
           <div className='py-10 '>
            <ul className='hidden md:flex gap-x-5 text-lg'>
                <li>Home</li>
                <li>About us</li>
                <li>Menu</li>
                <li>Galary</li>
                <li>Order Now</li>
                <li>Contact</li>
                
            </ul>
            
           </div>
           <div className='flex  py-10 text-lg gap-10'>
                 <div className='hidden md:flex'>
                 <i class="fa-sharp fa-solid fa-cart-shopping fa-2x  text-yellow-600"></i>
                 </div>
                 <div className='hidden md:flex gap-2 '>
                 <i class="fa-regular fa-clock fa-2x  text-yellow-600"></i>
                 <p>8.30-21.00</p>
                 </div>
                 <div className='hidden md:flex gap-1 '>
                 <i class="fa-solid fa-phone fa-2x text-yellow-600"></i>
                 <p>+8900786099</p>
                 </div>
               
                 <div onClick={handleNav} className='block md:hidden'>
                 {!nav ?  <i class="fa-solid fa-x fa-2x"></i>: <i class="fa-solid fa-bars fa-2x"></i>}
            </div>
          
            <div className={!nav ? 'fixed left-0 top-0 h-full text-lg text pt-40 ml-12 ease-in-out duration-500 md:hidden ': 'fixed left-[-100%]'}>
            <ul className=''>
                <li className='border-b border-gray-600 p-2'>Home</li>
                <li className='border-b border-gray-600 p-2'>About us</li>
                <li className='border-b border-gray-600 p-2'>Menu</li>
                <li className='border-b border-gray-600 p-2'>Galary</li>
                <li className='border-b border-gray-600 p-2'>Order Now</li>
                <li className=' border-gray-600 p-2'>Contact</li>
                
            </ul>
            </div>
           </div>
       </div><br/>
         
    </div>
    </>
  )
}

export default Navbar