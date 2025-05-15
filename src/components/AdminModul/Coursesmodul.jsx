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
  let cnf = confirm("Are You Sure You Want To Delete This Course ❌");
  if (cnf == false) {
    return false;
  }
  let result = await CallAjax('http://localhost:4050/deletcourse', { cid: id }, 'DELETE')
  coursedata();
  updatecourse
}

console.log('user role', userrole)

  return (
    <div className='gird grid-cols-2'>
      <div> { userrole.current == 1 ? <Adminnavbar /> : <Managmentnavbar/> } </div>
      <div>
      
<div className='grid justify-end mr-5'>
<Link to="/addcourse">
     <button class=" mt-5  bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Add Courses
      </button>
     </Link> 
</div>
    
     {/* <div className='grid md:ms-72 md:grid-cols-3 xs:grid-cols-1 '>
     {
  coursdata.map((getdata)=>(
<div className=' mt-8 m-auto'>
<div class="px-4 md:px-8 py-3  rounded-lg shadow-xl w-64 border border-dotted  w-52">


    <div>
    <div class="flex items-center mb-3">
            <p className='font-display max-w-sm text-2xl font-bold leading-tight'>{getdata.couses_name}</p>
        </div>
        <div class="flex items-center ">
            <p className='font-display max-w-sm text-sm uppercase leading-tight'>{getdata.course_catagery}</p>
        </div>
        <div>
            <p class="font-mono text-lg font-normal text-black">{getdata.duration}</p>
            <p className='opacity-75'><span class=" font-bold font-Poppin group-hover:text-white duration-500 ">
    &#8377;
  </span>{getdata.fees}</p>
        </div>
     
      
        </div>
 
     
        <div class="flex flex-col justify-end w-full text-center mt-3 gap-3 sm:flex-row   font-semibold">
       <Link to={`/editcourse/${getdata.id}`}>
       <button class="bg-transparent hover:bg-blue-400  font-semibold hover:text-white py-1 px-5 border border-black hover:border-transparent rounded">
  Edit
</button>
       </Link> 
<button class="bg-transparent hover:bg-blue-400  font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded" onClick={() => DeletCourse(getdata.id)}>
  Delete
</button>
  </div>

  

</div>
</div>
 ))
}
     </div> */}
     
         <div >
                <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
        
                  <div class="ml-3">
                    <div class="w-full max-w-sm min-w-[200px] relative">
        
                    </div>
                  </div>
                </div>
        
        
        
                <table className=" md:ms-80  w-4xl text-sm text-left rtl:text-right text-black dark:text-black m-auto text-center" >
                  <thead className="text-sm  text-gray-300  uppercase bg-gray-50 dark:bg-black text-center">
                    <tr>
                     <th scope="col" className="px-6 py-3">
                        Sr.No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course Name
                      </th>
        
                      <th scope="col" className="px-6 py-3">
                        Course catagery
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course  Duration
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Course Fees
                      </th>
                      
        
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
        
                    </tr>
                  </thead>
                  <tbody>
                    {
                     coursdata.map((getdata,index)=>(
                        <tr className=" text-center bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">
        
        
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4">{getdata.couses_name}</td>
                          <td className="px-6 py-4">{getdata.course_catagery}</td>
                          <td className="px-6 py-4">{getdata.duration}</td>
                          <td className="px-6 py-4"><span class=" font-bold font-Poppin group-hover:text-white duration-500 ">
    &#8377;
  </span>{getdata.fees}</td>
                          {/* <td className="px-6 py-4">{data.address.charAt(0).toUpperCase() + data.address.slice(1)}</td> */}
                          <td className="px-6 py-4 text-2xl">
                            <Link to={`/editcourse/${getdata.id}`}>
       <button class=" cursor-pointer bg-blue-500  font-semibold  p-2 px-3 text-white  rounded text-sm">
  Edit
</button>
       </Link>  &nbsp;
                           <button class="cursor-pointer  bg-red-500  font-semibold  p-2 text-white  rounded text-sm" onClick={() => DeletCourse(getdata.id)}>
  Delete
</button>
                          </td>
                        </tr>
                      ))
                    }
        
        
        
                  </tbody>
                </table>
        
              </div>

    </div>
    </div>
  )
}

export default Coursesmodul
