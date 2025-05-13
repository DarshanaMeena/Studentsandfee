import React, { useEffect, useRef, useState } from 'react'
import Adminnavbar from '../Adminnavbar'
import { Link } from 'react-router-dom'
import CallAjax from '../../Hook/CallAjax'
import Managmentnavbar from '../Managmentnavbar'
import $ from "jquery"

function Coursesmodul() {
const [coursdata,setCoursdata] = useState([])
const userrole = useRef(localStorage.getItem('role'));
  async function coursedata() {
    const response = await CallAjax('http://localhost:4050/coursedata', {}, 'GET')
    setCoursdata(response)

  }
 useEffect(()=>{
  coursedata();
 },[])
 async function DeletCourse(id) {
  let cnf = confirm("Are You Sure You Want To Delete This User");
  if (cnf == false) {
    return false;
  }
  let result = await CallAjax('http://localhost:4050/deletcourse', { cid: id }, 'DELETE')
  coursedata();
  updatecourse
}

console.log('user role', userrole)

  return (
    <div>
      { userrole.current == 1 ? <Adminnavbar /> : <Managmentnavbar/> }
<div className='grid justify-end mr-5'>
<Link to="/addcourse">
     <button class=" mt-5  bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Add Courses
      </button>
     </Link> 
</div>
    
     <div className='grid grid-cols-1 ms-6 sm:grid-col-2 md:grid-cols-4'>
     {
  coursdata.map((getdata)=>(
<div className=' mt-8 m-auto'>
<div class="px-4 md:px-8 py-3 bg-gray-100 rounded-lg shadow-2xl w-64   w-52">


    <div>
    <div class="flex items-center mb-3">
            <p className='font-display max-w-sm text-2xl font-bold leading-tight'>{getdata.couses_name}</p>
        </div>
        <div class="flex items-center mb-3">
            <p className='font-display max-w-sm text-xl  leading-tight'>{getdata.course_catagery}</p>
        </div>
        <div>
            <p class="font-mono text-lg font-normal text-black">{getdata.duration}</p>
            <p className='opacity-75'>{getdata.fees}</p>
        </div>
     
      
        </div>
 
     
        <div class="flex flex-col justify-end w-full text-center mt-8 gap-3 sm:flex-row   font-semibold">
       <Link to={`/editcourse/${getdata.id}`}>
       <button class="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-6 border border-black hover:border-transparent rounded">
  Edit
</button>
       </Link> 
<button class="bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded" onClick={() => DeletCourse(getdata.id)}>
  Delete
</button>
  </div>

  

</div>
</div>
 ))
}
     </div>
     
        
    </div>
  )
}

export default Coursesmodul
