import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import AdminHomePage from './AdminHomePage';
import RegistrationForm from './ManagmentModule/RegistrationForm'
import { Link } from 'react-router-dom';
import img from '../assets/mn.avif'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CallAjax from '../Hook/CallAjax';



function Testing() {
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalCounts, setTotalCounts] = useState([]);

  const formatDate = (date) => date.toISOString().split('T')[0];
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    
    
    { label: "Admin", icon: "👤" },
    { label: "Managment", icon: "⚙️" },
    { label: "Student's", icon: "🎓" },
  ];

  async function managementedit(){
    let response = await CallAjax(`http://localhost:4050/dashboarCouts`,{}, 'GET')
    console.log(response)
    setTotalCounts(response[0])
}
useEffect(()=>{
    managementedit();
},[])

const metrics = [
  { label: 'Courses', value1: totalCounts['totalcourses'], color: 'bg-red-500'},
  { label: 'Students', value2: totalCounts['totalStudents'], color: 'bg-green-500' },
  { label: 'Batches', value3: totalCounts['totalbatches'], color: 'bg-cyan-400' },
];

  // function notify(){
  //   toast.warn("User added succefullY!")
  // }

  return(
    


  

  <div>
     <div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:ms-70 mt-11'>
<Link to='/coursesmodule'>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-blue-800 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Total
    Course
  </h1>
  </div>
  
</div>
</Link>

<Link to='/allstudentrecord'>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-blue-400 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value2}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-users"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Total
    Student
  </h1>
  </div>
  
</div>
</Link>
<Link to='/batches'>

<div
  class=" mt-5  div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-pink-950 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value3} 
  </div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin text-gray group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-book-open-reader"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Total
    Batches
  </h1>
  </div>
  
</div>
</Link>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-orange-400 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Upcoming EMI'S
  </h1>
  </div>
  
</div>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-red-600 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Pending
    EMI'S
  </h1>
  </div>
  
</div>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-green-600 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Paid
    EMI'S
  </h1>
  </div>
  
</div>


    </div>
    </div>
   
    <div className='grid grid-cols-1 md:ms-70
    '>

      
      <div className="  m-auto px-4">
     
     

      <div className="relative   rounded-lg  overflow-hidden flex flex-col md:flex-row items-center justify-between">
         <div className='flex justify-between '>
      {/* <div className='w-96'>
        <img src={img} alt="" />
      </div> */}
<div className='mb-10 '>
     <div style={{ marginTop: 20 }} className='bg-blue-500 w-full py-3 text-white text-center text-2xl'>
        <strong>{formatDate(selectedDate)}</strong>
        {/* <p>{runData[formatDate(selectedDate)] || 'No run logged'}</p> */}
      </div>
    <Calendar onChange={setSelectedDate} value={selectedDate} />
   
    </div>
    </div>
        {/* <img
          src={img}
          alt="Students"
          className="mt-4 md:mt-0   w-full h-72  shadow-lg object-cover"
        /> */}
      </div>
    </div>
    </div>
    
   
    
    
  </div>
  )

}

export default Testing
