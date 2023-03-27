import React from 'react'

function Box7() {
  return (
    <div className='py-12 px-20'>
        <div className='grid grid-cols-3 gap-9'>
           <div>
            <h1 className='text-xl text text-gray-300 font-bold'>HOW MANY PEOPLE</h1>
            <input class="lowercase shadow mt-1 appearance-none border bg-transparent rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="01"/>
            </div>
            <div>
            <h1 className='text-xl text text-gray-300 font-bold'>DATE</h1>
            <input class="lowercase shadow mt-1 appearance-none border bg-transparent rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="DD/MM/YY"/>
           
           </div>

           <div>
            <h1 className='text-xl text text-gray-300 font-bold'>TIME</h1>
            <input class="lowercase shadow mt-1 appearance-none bg-transparent border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="8.54PM"/>
           </div>
           
           <div>
            <h1 className='text-xl text text-gray-300 font-bold'>NAME</h1>
            <input class="lowercase shadow mt-1 appearance-none border bg-transparent rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="WRITE YOUR FULL NAME"/>
           </div>

           <div>
            <h1 className='text-xl text text-gray-300 font-bold'>EMAIL</h1>
            <input class="lowercase shadow mt-1 appearance-none border bg-transparent rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="WRITE YOUR EMAIL"/>
           </div>

           <div>
            <h1 className='text-xl text text-gray-300 font-bold'>DIRECT CALL</h1>
            <input class="lowercase shadow mt-1 appearance-none border bg-transparent rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="WRITE YOUR NUMBER"/>
           </div>
        </div>

        
<div className='flex justify-center mt-10'>
    <button className='text btn text-white py-2 px-6 rounded-lg'>Submit</button>
</div>
          

    </div>
  )
}

export default Box7