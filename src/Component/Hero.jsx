import React from 'react'

function Hero() {
  return (
    <div className='md:px-20 px-4' >
       <div className='flex-row md:flex justify-between'>
        <div className=' w-full md:w-1/2 flex justify-center py-8'>
           <div className='text-white'>
            <h1 className='text-6xl font-extralight text1'>Taste Our Delicious <span className='text-yellow-400'>Best Food</span></h1>
            <p className='py-2 font-light text mr-10'>Lorem ipsum dolo elit. Eum fuga accusantium ad cupiditate dolorum soluta enim ullam aspernatur nam distinctio!</p>
            <div className='flex gap-6 py-5'>
            <button className='btn border-1 rounded-md px-4 py-1 text'>Add to cart</button>
            <button className='border-2 rounded-md px-4 py-1 border-yellow-500 text'>Show Menu</button>
           </div>
           </div>
          
        </div>
        <div className=' flex-row md:w-1/2 md:flex justify-center'>
          <div >
        <img className=' md:h-80 w-96' src='./Image/pizza.png' alt=""/><br/>
        <div className='absolute bottom-20 right-44 top-44'>
           <p className='hidden md:block text rounded-full px-4 py-5 text-white btn'>NEW</p>
        </div>
        <div className='absolute bottom-20 right-1/3 top-44'>
           <p className=' hidden md:block text rounded-lg px-6 py-1 text-white btn'>$13</p>
        </div>
        <div className='absolute bottom-32 right-44 hidden md:block'>
           <img src='./Image/image 4.png'alt=''/>
        </div>
        <div className='absolute bottom-32 right-1/3 hidden md:block'>
           <img src='./Image/image 3.png'alt=''/>
        </div>
        <div className='absolute bottom-80  left-1/2 ml-10 hidden md:block'>
           <img src='./Image/image 5.png'alt=''/>
        </div>
        < div className='flex justify-center'>
        <h1 className='text-xl text-white'><i class="fa-solid fa-arrow-left-long " ></i>                   01/<span className='text-3xl text-yellow-600'>06                 </span><i class="fa-solid fa-arrow-right-long "></i></h1>
        </div>
        </div>
        </div>
       

       </div>
    </div>
  )
}

export default Hero