import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CallAjax from '../../Hook/CallAjax';
import $ from 'jquery'
import Managmentnavbar from '../Managmentnavbar';
import ToastMsg from '../../Hook/ToastMsg';


function Editbatchform() {
    const [editbatch,setEditbatch]= useState([])
    const [getcourses,setGetcourse]=useState([]);

    const {id} = useParams();
    const move = useNavigate();
    async function managementedit(){
        let response = await CallAjax(`http://localhost:4050/batchedit/${id}`,{}, 'GET')
        console.log(response)
        setEditbatch(response)
    }
    useEffect(()=>{
        managementedit();
    },[])
    async function changeval(ev,key) {
        let invalues = ev.target.value;
        
        let newval = await{...editbatch,[key]:invalues}; 
              
        setEditbatch([newval]);
         
     }
     async function updateform(e){
        e.preventDefault();
        let formdata = new FormData($('#formbatch')[0]);
       // console.log(formdata)
        let resultup= await CallAjax('http://localhost:4050/batchupdate',formdata,'PUT');
        
        //setEditbatch(resultup)        
       move('/batches')
      alert()
       

    }
    async function getcourse(){
let batchdata = await CallAjax('http://localhost:4050/geteditcourse',{},'GET');
setGetcourse(batchdata);
    }
    useEffect(()=>{
      getcourse();
    },[])

    
  return (
    <div>
      <Managmentnavbar />
       <div class="w-96 backdrop-blur-lg bg-opacity-60 rounded-lg shadow-2xl p-5 m-auto mt-11">
  <h3 class="text-2xl font-bold pb-5 text-center ">Edit Batch</h3>

{
  editbatch.map((editdata)=>(
    <form  id='formbatch' onSubmit={updateform}>
  <input type="hidden" name='id' value={editdata.id}/>

    <div class="mb-4">
      <label for="name" class="block mb-2 text-sm font-medium">Batch Name</label>
      <input
        type="text"
        name='batchname'
        value={editdata.batch_name}
        onChange={(ev)=>changeval(ev,'batchname')}
        id="name"
        class="bg-gray-100 border border-blue-500 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4"/>
    </div>
    <div class="mb-4">
    <label for="name" class="block mb-2 text-sm font-medium">Course</label>

      <select name="coursename" id="coursename" className='bg-gray-100 border border-blue-500 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4' value={editdata.course_id}>
        <option value="">--Select Course--</option>
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
        value={editdata.start_time}
        class="bg-gray-100 border border-blue-500 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4"/>
    </div>
    <div class="mb-4">
      <label for="password" class="block mb-2 text-sm font-medium">END Time</label>
      <input
        type="time" name='endtime'
        value={editdata.end_time}
        class="bg-gray-100 border border-blue-500 text-gray-900 text-sm rounded-lg  w-full py-2.5 px-4"/>
    </div>
    <div>
      <p class="text-red-500 pb-5"></p>
    </div>
    <div class="flex items-center justify-between mb-4">
      <button
        type="submit"
        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-11 m-auto w-full sm:w-auto cursor-pointer"
      >
        EDIT
      </button>
     
    </div>
  </form>
  ))
}
  
</div>
    </div>
  )
}

export default Editbatchform
