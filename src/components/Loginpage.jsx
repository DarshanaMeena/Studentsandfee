import React, { useEffect } from 'react'
import paramlogo from '../assets/param-logo.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import image from '../assets/mn.avif'
import { Typewriter } from 'react-simple-typewriter'
function Loginpage() {

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  
 
  return (
    

    <div className="relative min-h-screen  flex flex-col justify-between overflow-hidden ">
    
    
    {/* Content Section */}
    <div className="flex-grow flex items-center justify-center p-4 z-10">
      <div className=" shadow-2xl rounded-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className=" bg-white shadow-2xl p-4 flex  ">
            <img
              src={image}
              alt="School Management Features"
              className="object-contain max-h-[400px] w-full"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-5 bg-white">
           <div className=' w-64  py-6 rounded m-auto'>
                   <img src={paramlogo} alt="" className='w-28 m-auto '/>
                   <div className='text-center font-bold text-xl'>
                    <span>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={['Student Managment System']}
                      loop={0}
                      cursor={true}
                      cursorStyle='✍️'
                      typeSpeed={80}
                      deleteSpeed={0}
                      delaySpeed={10000}
                      onLoopDone={handleDone}
                    />
                  </span>
                    </div>
                   <div className='text-center mt-2'>
                       <div >
                          <Link to="Admin"><button className='rounded-tr-lg w-36 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-white-500 p-3 text-white font-bold'>Admin </button></Link> 
                       </div>
                       <div>
                       <Link to="Management"><button className='rounded-tr-lg w-36 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-white-500 p-3 text-white mt-4 font-bold'>Managment </button></Link>
                       </div>
                       <div>
                       <Link to="Student"><button className='rounded-tr-lg w-36 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-white-500 p-3 text-white mt-4 font-bold'>Student </button></Link>
                       </div>
                   </div>
                   </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Full-Screen Bottom Wave */}
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-24 md:h-24 lg:h-72"
      >
        <path
          fill="#38bdf8" // cyan-400
          fillOpacity="1"
          d="M0,224L60,202.7C120,181,240,139,360,133.3C480,128,600,160,720,154.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    </div>
  )
}

export default Loginpage
