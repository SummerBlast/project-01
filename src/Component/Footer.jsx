import React from 'react'

function Footer() {
  return (
    <div className='py-8 px-20'>
        <div>
            <hr className='border-1 border-white'/>
        </div>
        <div className='mt-5 text-white'>
            <div className='flex justify-between'>
                <div>
                  <h1 className='text text-yellow-600 text-xl font-bold'>Our address</h1>
                  <p className='text'>88-11 31st Ave, Queens,<br/>
NY 11369</p>
                </div>

                <div>
                <h1 className='text text-yellow-600 text-xl font-bold'>Booking Time</h1>
                  <p className='text'>Monday To Sunday</p>
                </div>

                <div>
                <h1 className='text text-yellow-600 text-xl font-bold'>Contact Number</h1>
                  <p className='text'>+899xxxxxxxx</p>
                </div>
                
                <div>
                <h1 className='text text-yellow-600 text-xl font-bold'>Email</h1>
                <p className='text'>abirmahmud.xyz@gmail.com</p>
                </div>
                </div>
            </div>

        </div>

    
  )
}

export default Footer