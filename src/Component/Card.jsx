import React from 'react'

function Card() {
  return (
    <div className='py-8 mx-20 text-white'>
        <div className='flex justify-between gap-5'>
           <div className='h-96 w-80 border-2 border-yellow-600 rounded-md'>
              <img src='/Image/image 8.png'alt=''/>
              <div className='ml-4'>
              <p className='text text-yellow-600 font-bold'>CHEF’S PICK: BRAND NEW TASTE</p>
              <hr className='w-72 border-1 py-1 mt-2 border-gray-600'/>
              <p className='text text-gray-500'>23 Jul 2022</p>
              <p className='text'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. <span className='text-yellow-600'>Read more</span></p>
           </div>
           </div>


           <div className='h-96 w-80 border-2 border-yellow-600 rounded-md'>
              <img src='/Image/7-1 1.png'alt=''/>
              <div className='ml-4'>
              <p className='text text-yellow-600 font-bold'>The Best Place for Meet Friends</p>
              <hr className='w-72 border-1 py-1 mt-2 border-gray-600'/>
              <p className='text text-gray-500'>23 Jul 2022</p>
              <p className='text'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. <span className='text-yellow-600'>Read more</span></p>
           </div>
           </div>

           <div className='h-96 w-80 border-2 border-yellow-600 rounded-md'>
              <img src='/Image/Rectangle 40.png'alt=''/>
              <div className='ml-4'>
              <p className='text text-yellow-600 font-bold'>TOP 15 BEST RESTAURANTS</p>
              <hr className='w-72 border-1 py-1 mt-2 border-gray-600'/>
              <p className='text text-gray-500'>23 Jul 2022</p>
              <p className='text'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. <span className='text-yellow-600'>Read more</span></p>
           </div>
           </div>


        </div>
        < div className='flex justify-center'>
        <h1 className='text-xl text-white mt-8'><i class="fa-solid fa-arrow-left-long " ></i>                   01/<span className='text-3xl text-yellow-600'>06                 </span><i class="fa-solid fa-arrow-right-long "></i></h1>
        </div>
    </div>
  )
}

export default Card