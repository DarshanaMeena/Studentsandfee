import React, { useState, useEffect } from 'react'
import CallAjax from '../../Hook/CallAjax';
import { useNavigate,useParams} from 'react-router-dom';
import $ from 'jquery'
import Managmentnavbar from '../Managmentnavbar';

function EditcourseForm() {
    const [editcourse,setEditcourse] = useState([])
    const {id} = useParams();
    const goto = useNavigate();
    async function EditForm() {
        let result=  await CallAjax(`http://localhost:4050/editcourse/${id}`,{},'GET')
        setEditcourse(result)
       
    }
    useEffect(()=>{
        EditForm();
    },[])
    async function updatecourseform(ev,key) {
        let val = ev.target.value;
        let newval = await{...editcourse,[key]:val}
        setEditcourse([newval])    
    }
    async function submitcourseForm(ev) {
        ev.preventDefault();
        let formdata = new FormData($("#EditForm")[0]);
        let result = await CallAjax('http://localhost:4050/updatecourse',formdata,'PUT');
        setEditcourse([result])
        goto('/coursesmodule')
    }
  return (
    <div>

        <Managmentnavbar />
      <section class="bg-white p-1 xs:p-8 mt-11">
                <div class=" max-w-96 sm:max-w-4xl mx-auto border border-blue-900 rounded-lg p-8 w-xl shadow">
                    <h2 class="sm:text-xl text-[12px] font-bold mb-6">Create Courses</h2>

                   {
                    editcourse.map((editdata)=>(
                        <form id='EditForm' onSubmit={submitcourseForm}>
                        <div class="space-y-6">
                            <div>
                            <input type="hidden" name='id' value={editdata.id}/>
                                <label for="title" class="text-sm xs:text-sm font-medium text-gray-700 mb-1 ">Course Name </label>
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="coursename" onChange={(ev) => {updatecourseform(ev,'course_name')}} value={editdata.couses_name}/>
                            </div>

                            <div>
                                <label for="duration" class="text-sm xs:text-sm font-medium text-gray-700 mb-1">Duration</label> 
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="duration" value={editdata.duration} onChange={(ev) => {updatecourseform(ev,'duration')}}/>
                            </div>



                            <div>
                                <label for="fees" class="text-sm xs:text-sm font-medium text-gray-700 mb-1">Fees  </label>
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="fees" value={editdata.fees} onChange={(ev) => {updatecourseform(ev,'fees')}}/>
                            </div>

                        </div>
                        <div class="mt-8 pt-6  flex justify-end">
                            <button  class=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-blue-900 rounded-[5px] p-[13px_25px] gap-[10px] text-white">Edit</button>
                        </div>
                    </form>
                    ))
                   }
                </div>
            </section>
    </div>
  )
}

export default EditcourseForm
