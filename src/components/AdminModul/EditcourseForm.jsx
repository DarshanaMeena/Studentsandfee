import React, { useState, useEffect } from 'react'
import CallAjax from '../../Hook/CallAjax';
import { useNavigate,useParams} from 'react-router-dom';
import $ from 'jquery'
import courseimg from '../../assets/co.avif'
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

        {/* <Managmentnavbar /> */}
         <div className='grid grid-cols-2'>
                  <div className=''>
                    <img src={courseimg} alt="" className='w-full h-screen '/>
                  </div>
                  <div>
      <section class="bg-white p-1 xs:p-8 ">
                <div class=" mt-2 max-w-96 sm:max-w-4xl mx-auto rounded-lg p-8 w-xl shadow">
                    <div class="relative inline-block ">
  <span class="text-2xl md:text-3xl font-bold uppercase">
   Edit Courses
  </span>
  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
</div>

                   {
                    editcourse.map((editdata)=>(
                        <form id='EditForm' onSubmit={submitcourseForm}>
                        <div class="space-y-6 mt-5">
                            <input type="hidden" name='id' value={editdata.id}/>
                             <div>
                                <label for="title" class="text-sm xs:text-sm font-medium text-gray-700 mb-1 ">Course Name </label>
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="coursecatagery" onChange={(ev) => {updatecourseform(ev,'course_catagery')}} value={editdata.course_catagery}/>
                            </div>

                            <div>
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
                        <div class="mt-5  flex justify-end">
                            <button  class=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-blue-900 rounded-[5px] p-[13px_25px] gap-[10px] text-white">Edit</button>
                        </div>
                    </form>
                    ))
                   }
                </div>
            </section>
            </div>
            </div>
    </div>
  )
}

export default EditcourseForm
