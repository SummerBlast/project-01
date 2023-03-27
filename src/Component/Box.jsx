import React from 'react'

function Box() {
  return (
    <div className=' mt-60 md:mt-0 md:py-10 md:px-20 relative'>
      <div className='w-full mx-auto rounded-lg btn md:h-32 h-60 text-white z-10 px-4 md:px-0 py-6 md:py-0'>
         <div className='grid grid-cols-2   md:flex md:justify-between text '>
            <div className='p-0 md:p-6 '>
             <h1 className='text-3xl ml-0 md:ml-8 '>138</h1>
             <h1 className='text-2xl  py-2'>MENU ITEM</h1>        
             </div>
             <div className='p-0 md:p-6'>
             <h1 className='text-3xl ml-0 md:ml-16'>300+</h1>
             <h1 className='text-2xl  py-2'>VISITOR EVERYDAY</h1>        
             </div>
             <div className='p-0 md:p-6 '>
             <h1 className='text-3xl ml-0 md:ml-12'>   12</h1>
             <h1 className='text-2xl '> EXPERIENCE</h1>        
             </div>
             <div className=' p-0  md:p-6'>
             <h1 className='text-3xl ml-0 md:ml-8'>100%</h1>
             <h1 className='text-2xl  '>TASTE & FUN</h1>        
             </div>
            
         </div>
      </div>
     
    </div>
    
  )
}

export default Box