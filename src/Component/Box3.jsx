import React from 'react'

function Box3() {
  return (
    <div className='mt-28 mx-20 py-10'>
       <div className='grid grid-cols-2 text-white'>
           <div>
              <div>
                <h1 className='text-yellow-600 text-4xl text'>MARGERITA</h1>
                <div className='flex'>
                 <p className='text mt-1'>tomato,potato</p>
                <hr  className='w-80 mt-5 border-dotted'/>
                <h className="text-yellow-600 text-3xl text">$5</h>
                </div>
              </div>

              <div className='mt-12'>
                <h1 className='text-yellow-600 text-4xl text'>QUATRO FORMAGI</h1>
                <div className='flex'>
                 <p className='text mt-1'>tomato,potato,meat,onion</p>
                <hr  className='w-60 mt-5 border-dotted'/>
                <h className="text-yellow-600 text-3xl text">$5</h>
                </div>
              </div>

              <div className='mt-12'>
                <h1 className='text-yellow-600 text-4xl text'>SALONE PESTO DE NOSI</h1>
                <div className='flex'>
                 <p className='text mt-1'>tomato,salmon,meat,onion</p>
                <hr  className='w-60 mt-5 border-dotted'/>
                <h className="text-yellow-600 text-3xl text">$5</h>
                </div>
              </div>
           </div>
           <div>
                 
           <div className='ml-10'>
                <h1 className='text-yellow-600 text-4xl text'>POMODORI PANCETA</h1>
                <div className='flex'>
                 <p className='text mt-1'>tomato,baccon,susi</p>
                <hr  className='w-80 mt-5 border-dotted'/>
                <h className="text-yellow-600 text-3xl text">$5</h>
                </div>
              </div>
              <div className='mt-12 ml-10'>
                <h1 className='text-yellow-600 text-4xl text'>QUATRO FORMAGI</h1>
                <div className='flex'>
                 <p className='text mt-1'>tomato,potato,meat</p>
                <hr  className='w-80 mt-5 border-dotted'/>
                <h className="text-yellow-600 text-3xl text">$5</h>
                </div>
              </div>
              <div className='mt-12 ml-10'>
                <h1 className='text-yellow-600 text-4xl text'>TONNO AL KAR SUSI</h1>
                <div className='flex'>
                 <p className='text mt-1'>tomato,potato,onion</p>
                <hr  className='w-80 mt-5 border-dotted'/>
                <h className="text-yellow-600 text-3xl text">$5</h>
                </div>
              </div>


           </div>
       </div>
       <div className='flex justify-center mt-7'>
       <button className='px-6 py-2 btn rounded-lg mt-2 text text-white'>EXPLORE MORE</button>
       </div>
    </div>
  )
}

export default Box3