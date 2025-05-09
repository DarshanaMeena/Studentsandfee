import React, { useEffect } from 'react'
import $ from 'jquery'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import paramlogo from '../assets/param-logo.png'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import AdminHomePage from './AdminHomePage';
import Testing from './Testing';
function Managmentnavbar() {
   //  const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
  const moveTo = useNavigate();

  //responsive navbar toggle button
  
   //  function getnavbar() {
   //      const button = document.querySelector('#menu-button');
   //      const menu = document.querySelector('#menu');
   //      menu.classList.toggle('hidden');
   //  }
    function logout() {
      localStorage.clear();
      location.href = '/';
    }
    function checkLogin() {
      if(!localStorage.getItem('loginData') && localStorage.getItem('role') != 2) {
        moveTo('/')
      }
    }
    useEffect(()=>{
      checkLogin();
    },[])


    return (
      
//         <div>
//           <ToastContainer />
//             <div>
//       <div
//     className="
//       antialiased
//       bg-gradient-to-rz
//       from-pink-300
//       via-purple-300
//       to-indigo-400
//     "
//   >
//   <header>
//      <nav
//         className="
//           flex flex-wrap
//           items-center
          
//           w-full
//           py-4
//           md:py-0
//           px-10
//           text-lg text-gray-700
//          border-b-1
//           shadow-xl
//         "
//       >
       
//        <div>
//                 <img src={paramlogo} alt="" className='w-24 m-auto '/>
        
//        </div>
//          <svg
//             xmlns="http://www.w3.org/2000/svg"
//             id="menu-button"
//             className="h-6 w-6 m-auto cursor-pointer md:hidden block"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             onClick={getnavbar}
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
       
//        <div className="hidden w-full md:flex md:items-center md:w-auto ms-[250px]" id="menu">
//           <ul
//             className="
//               pt-4
//               text-base text-gray-700
//               md:flex
//               md:justify-between 
//               md:pt-0"
//           >
//             <li>
//               <Link to={'/studentregister'} className="md:p-4 py-2 block hover:text-purple-400" href="#"
//                 >Student Registration</Link>
//             </li>
//             <li>
//               <Link to={"/batches"} className="md:p-4 py-2 block hover:text-purple-400" href="#"
//                 >Batches</Link>
//             </li>
              
//             <li>
//                         <Link to="/coursesmodule" className="md:p-4 py-2 block hover:text-purple-400">Courses</Link>
//                         </li>
//             <li>
//               <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Fees</a>
//             </li>
//             <li>
//               {/* <button className='border border-2 bg-lime-800 '> */}
//               <button
//               className=" md:mt-2 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded" onClick={logout}
//                 >Logout</button >
//               {/* </button> */}
              
//             </li>
//           </ul>
//         </div>
//     </nav>
//   </header>
  


  
  
// </div>

//     </div>

//         </div>

    //     <div>
    //       <div className="flex bg-red-100">
            
    //   {sidebarOpen && (
    //     <div className="fixed inset-0 z-40 flex md:hidden">
    //       <div className="flex flex-col w-64 bg-gray-800">
    //         <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
    //           <span className="text-white font-bold uppercase">Admin Dashboard</span>
    //           <button onClick={() => setSidebarOpen(false)} className="text-white">
    //             ✕
    //           </button>
    //         </div>
    //         <nav class="flex-1 px-2 py-4 bg-gray-800">
              
    //             <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
    //                 <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
    //             />
    //           </svg>
    //                 Baby Sitters
    //             </a>
    //             <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
    //                 <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    //             />
    //           </svg>
    //                 Babies
    //             </a>
    //             <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
    //             />
    //           </svg>

    //           Procurement
    //         </a>

    //         <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    //             />
    //           </svg>

    //           Transactions
    //         </a>

    //         <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M13 10V3L4 14h7v7l9-11h-7z"
    //             />
    //           </svg>
    //           Settings
    //         </a>
                
                
    //         </nav>
    //       </div>
    //       <div className="flex-shrink-0 w-full" onClick={() => setSidebarOpen(false)}></div>
    //     </div>
    //   )}

      
    //   <div className="hidden md:flex flex-col w-64 bg-gray-800">
        
    //     <div className="flex items-center justify-center h-16 bg-gray-900">
    //       <span className="text-white font-bold uppercase">Admin Dashboard</span>
    //     </div>
    //     <div className="flex flex-col flex-1 overflow-y-auto">
    //     <nav class="flex-1 px-2 py-4 bg-gray-800">
    //             <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
    //             <ion-icon name="home-outline"></ion-icon>
    //                 <span className='ms-3'>Dashboard</span>
    //             </a>
    //             <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
    //                 <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    //             />
    //           </svg>
    //         <Link to={"/studentregister"}>Studentmau</Link>          
    //   </a>
    //             <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //       <i class="fa-solid fa-graduation-cap"></i>

    //     <Link to={"/coursesmodule"}>
    //     <span className='ms-3'>Courses</span>
    //     </Link>
           
    //         </a>

    //         <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    //             />
    //           </svg>

    //           Batches
    //         </a>

    //         <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6 mr-2"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M13 10V3L4 14h7v7l9-11h-7z"
    //             />
    //           </svg>
    //           Fees
    //         </a>
                
                
    //         </nav>
    //     </div>
    //   </div>

  
    //   <div className="flex flex-col flex-1 overflow-y-auto">
        
    //     <div className="flex items-center justify-between h-16 bg-gray-100 border-b border-gray-200">
    //       <div className="flex items-center px-4 w-full">
        
    //         <button
    //           onClick={() => setSidebarOpen(true)}
    //           className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
    //         >
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //         </button>

        
    //        <span className='text-4xl'><ion-icon name="people"></ion-icon></span>
    //         <input className="mx-4  border rounded-md px-4 py-2" type="text" placeholder="Search" />
    //       </div>
    //       <div>
           
    //       <button
    //           className="me-5 md:mt-1 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded" 
    //             >Logout</button >
    //       </div>
          
    //     </div>
    //   ghgf
    //   <AdminHomePage/>
      
    //   </div>
    // </div>
    //     </div>

    <div>
      <div>
      
      <div className=' grid grid-cols-2 border-b-1 border-gray-400 w-full py-5 mt-3'>
          <div className='text-center'>Managment Dashboard</div>
          <div className='m-auto'>
         <button
             className=" md:mt-1 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded"  onClick={logout}
              >Logout</button >
        </div>
          </div>
          
        </div>

        <div>
        
         
        </div>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
         <span class="sr-only">Open sidebar</span>
         <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
         </svg>
      </button>
      
      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        
         <div class="h-full   overflow-y-auto bg-gray-300 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
               <li className='w-64 items-start px-4 p-5 bg-black'>
                  <a href="#" class="flex items-center  text-gray-900 group">
                  <span className='text-3xl text-white'><i class="fa-solid fa-user-gear"></i></span>
                     <span class="self-center ms-3 text-2xl font-semibold whitespace-nowrap dark:text-white uppercase font-sans">Managment </span>
                  </a>
               </li>
              
               <li className=''>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     
                  <span className='text-xl'><i class="fa-solid fa-house"></i></span>

                    
                  <Link to={'/dashboard'} className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Dashboard</Link>
             
                  </a>
              </li>
               <li className=''>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     
                  <span className='text-xl '> <i class="fa-solid fa-user-plus"></i></span>

                    
              <Link to={'/studentregister'} className="md:p-4 block hover:text-purple-400" href="#"
                >Student Registration</Link>
            
                     
                  </a>
               </li>
               
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              
                      <span className='text-xl mt-2'><i class="fa-solid fa-chalkboard"></i></span>
                     <Link to={"/batches"} className=" ms-5 block hover:text-purple-400" 
                >Batches</Link>
                  </a>
               </li>
               
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <i class="fa-solid fa-graduation-cap"></i>
                     <Link to="/coursesmodule" className="md:p-4 py-2 block hover:text-purple-400">Courses</Link>
                  </a>
               </li>   
      
      
             
      
      
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    
                      <span className='text-xl mt-2'><i class="fa-solid fa-file-signature"></i></span>
                     
                     <a>
                     <span class="flex-1 ms-3 whitespace-nowrap">Fees</span>
                     </a>
                  </a>
               </li>
      
      
               
      
               
             
      
      
               
      
               
            </ul>
         </div>
      </aside>
      
      
      
                
            </div>
   //  </div>
    )
}

export default Managmentnavbar
