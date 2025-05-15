import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CallAjax from '../../Hook/CallAjax';
import { useState } from 'react';
import $ from 'jquery'
import 'jquery-validation'
import Managmentnavbar from '../Managmentnavbar';
function Addbatches() {
    const [getcourses,setGetcourse]=useState([]);
    let direct = useNavigate();
    async function formsubmit(ev) {
        ev.preventDefault()

      let  fromdata = new FormData($('#formbatch')[0])

      let coursename = $("#coursename").val();

      fromdata.append('coursename' , coursename);

        let response = await CallAjax('http://localhost:4050/batchdata', fromdata,'POST');
        console.log(response);
        if(response){
          alert('New Batch Added!')
            direct('/batches')
            //  console.log('login succsfully')
        }else {
            alert('failed')
        }
    }
    async function getcourse(){
let batchdata = await CallAjax('http://localhost:4050/getcourse',{},'GET');
setGetcourse(batchdata);
    }
    useEffect(()=>{
      getcourse();
    },[])

     function validation() {
            
        
            $("#formbatch").validate({
              rules: {
                
                batchname: {
                    required: true,
                    
                  },
                  coursename: {
                    required: true,
                    
                  },
                  starttime: {
                    required: true,
                    
                  },
                 
                  endtime: {
                    required: true,
                    
                  },
                  
        
              },
              messages: {
                required:'This field require!',
               
              },
            //   submitHandler: function (form) {
            //     alert('Form submitted!');
            //     form.submit(); // Or handle it via React state
            //   },
            });
          }
          useEffect(()=>{
            validation();
          },[])

  return (
    <div>
      <Managmentnavbar />
       <div>
        <div className='md:ms-60'>
          
          <input type='hidden' id='name'></input>
          
        <div class="w-2xl backdrop-blur-lg bg-opacity-60 rounded-lg shadow-2xl p-8 m-auto mt-10">
  {/* <h3 class="text-2xl font-bold pb-5 text-center uppercase">
    Add Batches
  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>

  </h3> */}
<div class="relative inline-block mb-11">
<span class="text-2xl md:text-3xl font-bold uppercase">
  Add Batches
</span>
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
</div>
 
  <form onSubmit={formsubmit} id='formbatch'>
  <input type="hidden" name='id' />

    <div class="mb-4">
      <label for="name" class="block mb-2 text-sm font-medium">Batch Name</label>
      <input
        type="text"
        name='batchname'
        id="name"
        class=" border border-gray-800 text-gray-900 text-sm rounded-lg  w-full py-4 px-4"/>
    </div>
    <div class="mb-4">
    <label for="name" class="block mb-2 text-sm font-medium">Course Name</label>

      <select name="coursename" id="coursename" className=' border border-gray-800 text-gray-900 text-sm rounded-lg  w-full py-4 px-4'>
        
        <option value="">--Select--</option>
        {
          getcourses.map((course)=>(
            <option value={course.id}>{course.couses_name}</option>

          ))
        }       
        </select>
    </div>
    <div class="mb-4">
      <label for="password" class="block mb-2 text-sm font-medium">Start Time</label>
      <input
        type="time" name='starttime'
        
        class=" border border-gray-800 text-gray-900 text-sm rounded-lg  w-full py-4 px-4"/>
    </div>
    <div class="mb-4">
      <label for="password" class="block mb-2 text-sm font-medium">END Time</label>
      <input
        type="time" name='endtime'
        
        class=" border border-gray-800 text-gray-900 text-sm rounded-lg  w-full py-4 px-4"/>
    </div>
   
    <div class="flex items-end  ">
       <button class=" mt-5 md:ms-[470px] bg-orange-500 hover:bg-red-400 text-white font-bold py-2 px-8 border-b-4 border-orange-700 hover:border-red-500 rounded uppercase">
       Create
      </button>
      
    </div>
  </form>
</div>
        </div>
      
    </div>
    </div>
  )
}

export default Addbatches
