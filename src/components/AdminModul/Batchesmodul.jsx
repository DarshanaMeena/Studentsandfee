import React, { useRef } from 'react'
import CallAjax from '../../Hook/CallAjax';
import $ from 'jquery'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Managmentnavbar from '../Managmentnavbar';
import Adminnavbar from '../Adminnavbar';

import ToastMsg from '../../Hook/ToastMsg';

function Batchesmodul() {

  const [getbatch,setGetbatches]=useState([]);
  const userrole = useRef(localStorage.getItem('role'));

  function msgs(tyep, error){
    ToastMsg('success', 'Hello World!');
  }

    async function getbatchess(){
let batchdata = await CallAjax('http://localhost:4050/betchget',{},'GET');
setGetbatches(batchdata);
    }
    useEffect(()=>{
        getbatchess();
        
    },[])
    async function deletebatche(bid) {
      let conf = confirm('are you sure you want to delete this course!')
      if(conf==false){
        return false;
      }
      let bdelete= CallAjax('http://localhost:4050/bdelete',{id:bid},'DELETE')
      
      getbatchess();
      
     }
  return (
    <div>
  
    <div>
     
    { userrole.current == 1 ? <Adminnavbar /> : <Managmentnavbar/> }

    <div className='grid justify-end mr-5 mt-5'>
        
      </div>
     <div className='grid grid-cols-2 justify-end mr-5 mt-5 gap-3'>
      <div>
      <Link to='/allstudentrecord'> <button className='bg-blue-500 w-full text-white p-2 rounded mt-[10px] ms-[10px] cursor-pointer '>All Student Record</button></Link>
      </div>
     
     <div className='text-end'>
     <Link to='/batchform'> <button className='bg-blue-500 w-full text-white p-2 rounded mt-[10px] ms-[10px] cursor-pointer '>Add Batches</button></Link>
     </div>
        
      </div>
      

      <div>
      {/* <div className='grid md:grid-cols-4 sm:grid-cols-1 sm: gap-2 grid-cols-1 mt-3'>
               
            
            {
              getbatch.map((batchdata)=>(
                <div class="p-5 max-w-lg border border-indigo-200 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            >
                <div class="mt-3">
                <h5 class="font-bold text-2xl text-center">{batchdata.batch_name}</h5>
                <p class="mt-2 text-gray-600 text-center"> {batchdata.course_id} </p>
                <div className='text-center'>
                <span class="mt-2 text-gray-600 text-xl">{batchdata.start_time}</span>TO
                <span class="mt-2 text-gray-600 text-xl "> {batchdata.end_time}</span>
                </div>
                
                <div class="mt-5 flex gap-4 items-center justify-center">
                   <Link to={`/editbatches/${batchdata.id}`}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">EDIT</button></Link> 
                    <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700" onClick={()=>{deletebatche(batchdata.id)}}>DELETE</button>
                </div> 
            </div>
            </div>
              ))
            }
            
        </div> */}
<div className=' grid md:grid-cols-4 sm:grid-cols-1 sm: gap-2 grid-cols-1 mt-5 justify-center'>



{
              getbatch.map((batchdata)=>(  
                <div className='p-5 max-w  rounded-2xl  items-center'>    
<divfulll
  class="relative z-50 flex w-4/4 max-w-72 py-5 bg-white rounded-xl overflow-hidden shadow-2xl "
>
  <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 8 0 
               Q 4 4.8, 8 9.6 
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
      fill="#51a2ff"
      stroke="#51a2ff"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
  </svg>

<div>

                <div>
  <div class="mx-2.5 overflow-hidden w-full">
    <p
      class="mt-1.5 text-xl font-bold text-blue-300 leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {batchdata.batch_name}
    </p>
    <p class=" text-gray-600 font-bold"> {batchdata.couses_name} </p>
    <p class="overflow-hidden leading-5 break-all text-zinc-600 max-h-10">
    {batchdata.start_time} To {batchdata.end_time}
    </p>
  </div>

<div class="mt-5 flex gap-4 items-center justify-center">
<Link to={`/editbatches/${batchdata.id}`}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-600">EDIT</button></Link> 
 <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-600" onClick={()=>{deletebatche(batchdata.id)}}>DELETE</button>
</div> 
</div>
 
</div>

  {/* <button class="w-16 cursor-pointer focus:outline-none">
    <svg
      class="w-7 h-7"
      fill="none"
      stroke="mediumseagreen"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </button> */}
</divfulll>
</div>
 ))
}
             
       
                
               
            </div>
               </div>
      </div>
     
     </div>
  
   
    // </div>
  )
}


 

export default Batchesmodul
