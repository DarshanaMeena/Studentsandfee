import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import AdminHomePage from './AdminHomePage';
import RegistrationForm from './ManagmentModule/RegistrationForm'
import { Link } from 'react-router-dom';
import img from '../assets/mn.avif'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const runData = {
  '2025-05-09': '5km run - 30 min',
  '2026-05-08': 'Rest day',
};

const metrics = [
  { label: 'Teacher', value: 4, color: 'bg-red-500' },
  { label: 'Students', value: 15, color: 'bg-green-500' },
  { label: 'Parents', value: 4, color: 'bg-cyan-400' },
  { label: 'Librarian', value: 4, color: 'bg-blue-700' },
  { label: 'Total class', value: 12, color: 'bg-blue-300' },
  { label: 'Accountants', value: 2, color: 'bg-yellow-500' },
  { label: 'Stuff', value: 4, color: 'bg-red-600' },
  { label: 'Attendence', value: 11, color: 'bg-green-700' },
];
function Testing() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => date.toISOString().split('T')[0];
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    
    
    { label: "Admin", icon: "👤" },
    { label: "Managment", icon: "⚙️" },
    { label: "Student's", icon: "🎓" },
  ];

  // function notify(){
  //   toast.warn("User added succefullY!")
  // }

  return(
    // <div className="flex h-screen bg-gray-100">
    //   {/* Sidebar - Mobile */}
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

    //   {/* Sidebar - Desktop */}
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
    //                 Managment
    //             </a>
    //             <a
    //           href="#"
    //           class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
    //         >
    //       <i class="fa-solid fa-graduation-cap"></i>


    //           <span className='ms-3'>Courses</span>
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

    //   {/* Main Content */}
    //   <div className="flex flex-col flex-1 overflow-y-auto">
    //     <div className="flex items-center justify-between h-16 bg- gray-400 border-b border-gray-200">
    //       <div className="flex items-center px-4 w-full">
    //         {/* Toggle button for small screens */}
    //         <button
    //           onClick={() => setSidebarOpen(true)}
    //           className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
    //         >
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //         </button>

    //         {/* Search bar */}
    //        <span className='text-4xl'><ion-icon name="people"></ion-icon></span>
    //         <input className="mx-4  border rounded-md px-4 py-2" type="text" placeholder="Search" />
    //       </div>
    //       <div>
    //       <button
    //           className="me-5 md:mt-1 md:px-4 py-2 font-bold block hover:bg-rose-500 text-white md:ms-44 bg-rose-400 rounded" 
    //             >Logout</button >
    //       </div>
          
    //     </div>

    //     <div className="p-4">
    //       <AdminHomePage />


          
          
    //     </div>
    //   </div>
    // </div>

  //   <div className="flex h-screen bg-gray-100 overflow-hidden">

  //   {/* === Left Sidebar === */}
  //   {/* Mobile */}
  //   {leftSidebarOpen && (
  //     <div className="fixed inset-0 z-40 flex md:hidden">
  //       <div className="flex flex-col w-64 bg-gray-800">
  //         <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
  //           <span className="text-white font-bold">Left Menu</span>
  //           <button onClick={() => setLeftSidebarOpen(false)} className="text-white">✕</button>
  //         </div>
  //         <nav className="flex-1 px-2 py-4 text-white">
  //           <a href="#" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
  //           <a href="#" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
  //         </nav>
  //       </div>
  //       <div className="flex-shrink-0 w-full" onClick={() => setLeftSidebarOpen(false)}></div>
  //     </div>
  //   )}

  //   {/* Desktop */}
  //   <div className="hidden md:flex md:flex-col w-64 bg-gray-800">
  //     <div className="h-16 flex items-center justify-center bg-gray-900 text-white font-bold">
  //       Left Menu
  //     </div>
  //     <nav className="flex-1 px-2 py-4 text-white">
  //       <a href="#" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
  //       <a href="#" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
  //     </nav>
  //   </div>

  //   {/* === Main Content === */}
  //   <div className="flex flex-1 flex-col overflow-y-auto">
  //     <div className="flex items-center justify-between h-16 bg-white border-b px-4">
  //       <div className="flex items-center space-x-4">
  //         {/* Left Sidebar Toggle */}
  //         <button
  //           onClick={() => setLeftSidebarOpen(true)}
  //           className="text-gray-600 md:hidden"
  //         >
  //           ☰
  //         </button>
  //         <h1 className="text-xl font-bold">Daystar Dashboard</h1>
  //       </div>

  //       {/* Right Sidebar Toggle */}
  //       <button
  //         onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
  //         className="text-gray-600"
  //       >
  //         ⚙️
  //       </button>
  //     </div>

  //     <div className="p-4">
  //       <p>Welcome to Daystar Daycare! Raising tomorrow’s leaders.</p>
  //     </div>
  //   </div>

  //   {/* === Right Sidebar === */}
  //   {/* <div
  //     className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
  //       rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
  //     } md:static md:translate-x-0 md:flex md:flex-col md:border-l`}
  //   >
  //     <div className="h-16 flex items-center justify-between px-4 border-b">
  //       <span className="font-bold">Settings</span>
  //       <button onClick={() => setRightSidebarOpen(false)} className="md:hidden">✕</button>
  //     </div>
  //     <div className="p-4">
  //       <p>Theme, Account, Notifications...</p>
  //     </div>
  //   </div> */}
  // </div>

  // <div>
  //   <div className="flex h-screen  font-sans" >
  //     {/* Sidebar */}
  //     <div className="w-1/3 bg-green-300 flex flex-col items-center justify-center p-6">
  //       <img
  //         src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
  //         alt="Student Icon"
  //         className="w-24 h-24 mb-4"
  //       />
  //       <h1 className="text-white text-2xl font-bold text-center leading-relaxed">
  //         Student <br /> Management <br /> System
  //       </h1>
  //     </div>

  //     {/* Main Content */}
  //     <div className="w-2/3  flex flex-col justify-center p-10" style={{backgroundImage : `url(${img})`, backgroundSize: 'cover',backgroundPosition : 'center',backgroundRepeat:'no-repeat',height: '100vh'}}>
  //       <h2 className="text-3xl font-bold text-center mb-10">
  //         Welcome To School System
  //       </h2>

  //       <div className="space-y-6">
  //         {menuItems.map((item) => (
  //           <div key={item.label} className="flex items-center space-x-4">
  //             <div className="bg-blue-100 p-4 rounded-full text-2xl">
  //               {item.icon}
  //             </div>
  //             <button className="bg-blue-400 text-white px-6 py-2 rounded shadow hover:bg-blue-500 transition-all">
  //               {item.label}
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // </div>



  

  <div>
    <div className='grid grdi-cols-1 ms-70'>
      <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <span className="text-sm text-gray-500 mt-2 sm:mt-0">Control panel</span>
      </div>

      {/* School Banner */}
      <div className="relative bg-indigo-700 text-white p-6 rounded-lg mb-6 overflow-hidden flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          Mohammadpur govt high school
        </h2>
        <img
          src={img}
          alt="Students"
          className="mt-4 md:mt-0 md:ml-6 h-24 w-auto rounded shadow-lg object-cover"
        />
      </div>

      {/* Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {metrics.map((item, idx) => (
          <div key={idx} className={`rounded-lg p-4 shadow-md text-white ${item.color}`}>
            <div className="text-4xl font-bold">{item.value}</div>
            <div className="text-lg">{item.label}</div>
            <div className="mt-2 text-sm underline cursor-pointer">More info</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3  mt-11  md:ms-56'>
 





<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#385cede8] group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
  >
    <span
      class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
      >More Info</span
    >
    <i class="fa-solid fa-arrow-right"></i>
  </button>

  <h1
    class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
  >
    HEADING
  </h1>
</div>

<div
  class="mt-8 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
  >
    <span
      class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
      >More Info</span
    >
    <i class="fa-solid fa-arrow-right"></i>
  </button>

  <h1
    class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
  >
    HEADING
  </h1>
</div>

<div
  class="mt-8 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
  >
    <span
      class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
      >More Info</span
    >
    <i class="fa-solid fa-arrow-right"></i>
  </button>

  <h1
    class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
  >
    HEADING
  </h1>
</div>


 <div className='flex justify-between mt-11 '>
      {/* <div className='w-96'>
        <img src={img} alt="" />
      </div> */}
<div className='md:ms-32 mb-20'>
    <Calendar onChange={setSelectedDate} value={selectedDate} />
      {/* <div style={{ marginTop: 20 }} className=''>
        <strong>{formatDate(selectedDate)}</strong>
        <p>{runData[formatDate(selectedDate)] || 'No run logged'}</p>
      </div> */}
    </div>
    </div>

    </div>
   
    
    
  </div>
  )

}

export default Testing
