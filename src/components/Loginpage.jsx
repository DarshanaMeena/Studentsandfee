import React, { useEffect } from 'react'
import paramlogo from '../assets/param-logo.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'
function Loginpage() {

  function mousehover() {
    var main = document.querySelector('.main');
       var crsr = document.querySelector('.cursor');
      main.addEventListener('mousemove',function(def) {
        crsr.style.left = def.x+"px";
        crsr.style.top = def.y+"px";
       })
  }
  useEffect(()=>{
    mousehover();
  },[]);
  return (
    <div className='grid grid-cols-1 main'>
      <div className="cursor"></div>
        <div class="bg-white p-5 rounded-2xl shadow-2xl max-w-sm border border-gray-200 relative overflow-hidden m-auto mt-36">
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div class="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        
        <div className=' w-64  py-6 rounded m-auto'>
        <img src={paramlogo} alt="" className='w-24 m-auto '/>
        <div className='text-center font-sans text-xl'>Student Managment System</div>
        <div className='text-center mt-5'>
            <div >
               <Link to="Admin"><button className='rounded-tr-lg w-36 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-white-500 p-3 text-white'>Admin </button></Link> 
            </div>
            <div>
            <Link to="Management"><button className='rounded-tr-lg w-36 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-white-500 p-3 text-white mt-4'>Managment </button></Link>
            </div>
        </div>
        </div>
    </div>
     </div>
  )
}

export default Loginpage
