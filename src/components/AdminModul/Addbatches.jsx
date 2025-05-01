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
        <div>
          <input type='hidden' id='name'></input>
        <div class="w-96 backdrop-blur-lg bg-opacity-60 rounded-lg shadow-lg p-5 m-auto mt-10">
  <h3 class="text-2xl font-bold pb-5 text-center">Add Batch</h3>
  <form onSubmit={formsubmit} id='formbatch'>
  <input type="hidden" name='id' />

    <div class="mb-4">
      <label for="name" class="block mb-2 text-sm font-medium">Batch Name</label>
      <input
        type="text"
        name='batchname'
        id="name"
        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4"/>
    </div>
    <div class="mb-4">
    <label for="name" class="block mb-2 text-sm font-medium">Course Name</label>

      <select name="coursename" id="coursename" className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4'>
        
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
        
        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4"/>
    </div>
    <div class="mb-4">
      <label for="password" class="block mb-2 text-sm font-medium">END Time</label>
      <input
        type="time" name='endtime'
        
        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4"/>
    </div>
    <div>
      <p class="text-red-500 pb-5"></p>
    </div>
    <div class="flex items-center justify-between mb-4">
      <button
        
        class="text-white m-auto px-11 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto cursor-pointer"
      >
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
