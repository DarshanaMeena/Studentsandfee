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
        // console.log(response)
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
       <div class="w-2xl backdrop-blur-lg bg-opacity-60 rounded-lg shadow-2xl md:ms-96 p-8 m-auto mt-10">
  <div class="relative inline-block mb-11">
  <span class="text-2xl md:text-3xl font-bold uppercase">
   Edit Batches
  </span>
  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
</div>

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
        class="bg-gray-100 border  text-gray-900 text-sm rounded-lg  w-full py-3 px-4"/>
    </div>
    <div class="mb-4">
    <label for="name" class="block mb-2 text-sm font-medium">Course</label>

      <select name="coursename" id="coursename" className='bg-gray-100 border  text-gray-900 text-sm rounded-lg  w-full py-3 px-4' value={editdata.course_id}>
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
        class="bg-gray-100 border  text-gray-900 text-sm rounded-lg  w-full py-3 px-4"/>
    </div>
    <div class="mb-4">
      <label for="password" class="block mb-2 text-sm font-medium">END Time</label>
      <input
        type="time" name='endtime'
        value={editdata.end_time}
        class="bg-gray-100 border  text-gray-900 text-sm rounded-lg  w-full py-3 px-4"/>
    </div>
    <div>
      <p class="text-red-500 pb-5"></p>
    </div>
    <div class="flex items-end  ">
       <button class=" mt-5 md:ms-[470px] bg-orange-500 hover:bg-red-400 text-white font-bold py-2 px-8 border-b-4 border-orange-700 hover:border-red-500 rounded uppercase">
       Create
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
