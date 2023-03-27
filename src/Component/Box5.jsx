import React from 'react'

function Box5() {
  return (
    <div className='py-10 mx-20'>
      <div className='flex justify-between'>
        <div className='w-1/2 text-white mt-6'>
            <h1 className='text-5xl font-extrabold text'>WHAT THE PRESS SAYS</h1>
            <h1 className='text-5xl font-extrabold text text-yellow-600'>,,</h1>
            <p className='text font-thin'>“If you like unconventional pizza, this place is for you. Picturesque patio on a pedestrian square in the summer.”</p>
            <h1 className='text text-3xl mt-4'>THE GUARDIAN</h1>
            <p className='text text-yellow-600 mt-2'>Website-example.com</p>

        </div>

        <div className='w-1/2'>
            <div className='flex justify-center'>
                8<img className='h-80 w-80' src='./Image/Rectangle 14.png'alt=''/>
            </div>

</div>

      </div>
      <div className='mt-20'>
          <div className='flex justify-center text-white' >
             <div className='text-center'>
              <h1 className='text-4xl font-extrabold text'>NEWS & EVENTS</h1>
              <p className='mt-1 text'>There’s always something interesting down here</p>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Box5