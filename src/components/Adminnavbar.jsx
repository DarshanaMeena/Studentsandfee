import React from 'react'
import $ from 'jquery'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import paramlogo from '../assets/param-logo.png'
import AdminHomePage from './AdminHomePage';
function Adminnavbar() {
    const moveTo = useNavigate();
  
    function getnavbar() {
        const button = document.querySelector('#menu-button');
      const menu = document.querySelector('#menu');
      
        menu.classList.toggle('hidden');
      
    }
    function logout() {
      localStorage.clear();
      location.href = '/';
    }
    function checkLogin() {
          if(!localStorage.getItem('loginData') && localStorage.getItem('role') != 1) {
            moveTo('/');
          }
        }
        useEffect(()=>{
          checkLogin();
        },[])
  return (

    <div>
      <div>
      
      
            
              
              <header>
                        <nav
                           className="
                             flex flex-wrap
                             items-center
                             w-full
                             py-4
                             md:py-[0px]
                             px-10
                             text-lg text-gray-700
                            border-b-1
                             shadow-xl
                           "
                         >
                          
                          <div className=''>
                                   <img src={paramlogo} alt="" className='w-24 m-auto '/>
                           
                          </div>
                            <svg
                               xmlns="http://www.w3.org/2000/svg"
                               id="menu-button"
                               className="h-6 w-6 m-auto cursor-pointer md:hidden block"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               onClick={getnavbar}
                             >
                               <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M4 6h16M4 12h16M4 18h16"
                               />
                             </svg>
                          
                          <div className="hidden w-full md:flex md:items-center md:w-auto ms-[250px]" id="menu">
                             <ul
                               className="
                                 pt-4
                                 text-base text-gray-700
                                 md:flex
                                 md:justify-between 
                                 md:pt-0
                                 md:hidden"
                                 
                             >
                               <li>
                                 <Link to={'/studentregister'} className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                   >Student Registration</Link>
                               </li>
                               <li>
                                 <Link to={"/batches"} className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                   >Batches</Link>
                               </li>
                                 
                               <li>
                                           <Link to="/coursesmodule" className="md:p-4 py-2 block hover:text-purple-400">Courses</Link>
                                           </li>
                               <li>
                                 <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Fees</a>
                               </li>
                               <li>
                                 {/* <button className='border border-2 bg-lime-800 '> */}
                                
                                 {/* </button> */}
                                 
                               </li>
                             </ul>
                           
             <button
               class=" md:ms-[700px] group flex items-center justify-start  h-11 text-white font-bold  px-3 bg-rose-600 rounded cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg active:translate-y-1" onClick={logout}
             >
                <svg class="w-4 h-5" viewBox="0 0 512 512" fill="white">
                   <path
                     d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                   ></path>
                   
                 </svg>
                 <span className='ms-1'>Logout</span>
             </button>
             
                           </div>
                       </nav>
                     </header>
      
            <div>
            
            {/* <div className=' grid grid-cols-2 border-b-1 md:w-full border-gray-400 w-full py-4'>
                <div className='text-end'>Managment Dashboard</div>
                <div className='m-auto '>
               <button
                   className=" md:mt-1 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded"  onClick={logout}
                    >Logout</button >
              </div>
                </div> */}
                
              </div>
      
              <div>
              
               
              </div>
           
            
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              
               <div class=" h-full overflow-y-auto bg-gray-300 dark:bg-gray-800 fixed">
                  <ul class="space-y-2 font-medium">
                    <Link to={'/admindashboard'}>
                     <li className='w-64 items-start px-4 p-5 bg-black'>
                        <a href="#" class="flex items-center  text-gray-900 group">
                        <span className='text-3xl text-white mt-2'><ion-icon name="person-outline"></ion-icon></span>
                           <span class="self-center ms-3 text-2xl font-semibold whitespace-nowrap dark:text-white uppercase font-sans">Admin </span>
                        </a>
                     </li>
                    </Link>
                     
                     <Link to={'/admindashboard'}  href="#"
                                    >
                                   <li className='py-3'>
                                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                         
                                      <span className='text-xl'><i class="fa-solid fa-house"></i></span>
                                        <span className='ms-3'>Dashboard</span>
                                      
                                 
                                      </a>
                                  </li></Link>

                                  <Link to={'/managmentmodul'} >

                    <li className=''>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                           
                        <span className='text-xl '> <i class="fa-solid fa-user-gear"></i></span>
      
                          <span className='ms-3'>Managment</span>
                    
                  
                           
                        </a>
                     </li>
                     </Link>
                     <Link to={'/studentregister'}  href="#"
                                     >
                                    <li className='py-3'>
                                       <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                          
                                       <span className='text-xl '> <i class="fa-solid fa-user-plus"></i></span>
                     
                                         
                                  <span className='ms-3'>Student Registration</span>
                                 
                                          
                                       </a>
                                    </li></Link>
                     
                     <Link to={"/batches"} 
                                     >
                                    <li className='py-3'>
                                       <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   
                                           <span className='text-xl '><i class="fa-solid fa-chalkboard"></i></span>
                                          <span className='ms-3'>Batches</span>
                                       </a>
                                    </li></Link>
                     
                    <Link to="/coursesmodule" >
                                   <li className='py-3'>
                                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                      <i class="fa-solid fa-graduation-cap"></i>
                                        <span className='ms-3'>Courses</span>
                                      </a>
                                   </li>  </Link> 
            
            
                   
            <Link to="/allstudentrecord">
            
                     <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                          
                            <span className='text-xl mt-2'><i class="fa-solid fa-file-signature"></i></span>
                           
                           <a>
                           <span class="flex-1 ms-3 whitespace-nowrap">Student Details</span>
                           </a>
                        </a>
                     </li>
            
            
                     </Link>
            
                     
                   
            
            
                     
            
                     
                  </ul>
               </div>
            </aside>
            
            
            
                      
                  </div>




    </div>
  )
}

export default Adminnavbar
