import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import paramlogo from '../src/assets/param-logo.png'
import $ from 'jquery'

function StudentNavbar() {
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
              if(!localStorage.getItem('loginData') && localStorage.getItem('role') != 3) {
                moveTo('/');
              }
            }
            useEffect(()=>{
              checkLogin();
            },[])
  return (
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
    </div>
  )
}

export default StudentNavbar
