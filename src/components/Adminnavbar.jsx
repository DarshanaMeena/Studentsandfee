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
      <div
    className="
      antialiased
      bg-gradient-to-rz
      from-pink-300
      via-purple-300
      to-indigo-400
      shadow-xl
    "
  >
  <header>
     <nav
        className="
          flex flex-wrap
          items-center
    
          w-full
          py-4
          md:py-0
          px-10
          text-lg
          border-b-1
         
        "
      >
        
       <div classNameName='text-start'>
          <img src={paramlogo} alt="" className='w-24  '/>
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
              text-base text-black
              md:flex
              md:justify-between 
              md:pt-0"
          >
            
              <Link to="/managmentmodul" className="md:p-4 py-2 block hover:text-purple-400">Managment</Link>
              
            <li>
            <Link to="/coursesmodule" className="md:p-4 py-2 block hover:text-purple-400">Courses</Link>
            </li>
            <li>

              <Link to={"/batches"} className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Batches</Link>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Fees</a>
            </li>
            <li>
              {/* <button className='border border-2 bg-lime-800 '> */}
              <button
              className=" md:mt-2 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded" onClick={logout}
                >Logout</button >
              {/* </button> */}
              
            </li>
          </ul>

         
        </div>
    </nav>

    
  </header>
  
  
</div>




    </div>
  )
}

export default Adminnavbar
