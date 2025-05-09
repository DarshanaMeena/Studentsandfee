import React from 'react'
import Managmentnavbar from './Managmentnavbar'
import { Link } from 'react-router-dom'

function FeesModule() {
  return (
    <>
    <div>
        <Managmentnavbar/>
        </div>
     <div className='mt-10 ms-25'>

    <div className='grid sm:grid-cols-1 md:grid-cols-3 grid-cols-1 '>
    <Link to='/UpcomingEMIS'>  <a href="#" class="block max-w-sm p-12 border border-gray-200 rounded-lg shadow-sm bg-blue-900 shadow-cyan-500/100">

      <div className='grid grid-cols-2 gap-2'>
    <p class="font-normal text-gray-700 dark:text-gray-400"><span className='text-white text-5xl'>&#8377;</span></p>
   <p class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">35550<br></br>Upcoming EMI'S</p>
    </div>
    </a></Link>

    <a href="#" class="block max-w-sm p-12 border border-gray-200 rounded-lg shadow-sm bg-pink-600 shadow-cyan-500/100">

<div className='grid grid-cols-2 gap-2'>
<p class="font-normal text-gray-700 dark:text-gray-400"><span className='text-white text-5xl'>&#8377;</span></p>
<p class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">35550<br></br>Pending EMI'S</p>
</div>
</a>

<a href="#" class="block max-w-sm p-12 border border-gray-200 rounded-lg shadow-sm bg-green-600 shadow-cyan-500/100">

<div className='grid grid-cols-2 gap-2'>
<p class="font-normal text-gray-700 dark:text-gray-400"><span className='text-white text-5xl'>&#8377;</span></p>

<p class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">35550<br></br>Paid EMI'S</p>
</div>
</a>

    </div>


     </div>
     </>
  )
}

export default FeesModule
