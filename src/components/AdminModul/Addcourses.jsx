import React from 'react'
import CallAjax from '../../Hook/CallAjax';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import 'jquery-validation'
import { useEffect } from 'react';
import Managmentnavbar from '../Managmentnavbar';
function Addcourses() {
    const redirect = useNavigate()
   async function addcourses(ev) {
     ev.preventDefault();
    let formdata = new FormData($("#submitForm")[0]);
    let result = await CallAjax('http://localhost:4050/addcoursedata',formdata,'POST');
    console.log(result)
    if(result) {
      // console.log("Created Courses Successfully!");
      alert(" Courses Created Successfully!")
      redirect('/coursesmodule');
    } else {
      console.log('failed')
    }
    }

     function validation() {
                
            
                $("#submitForm").validate({
                  rules: {
                    
                    coursename: {
                        required: true,
                        
                      },
                      duration: {
                        required: true,
                        
                      },
                      fees: {
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
            <section class="bg-white p-1 xs:p-8 mt-11">
                <div class=" max-w-96 sm:max-w-4xl mx-auto border border-blue-900 rounded-lg p-8 w-xl shadow">
                    <h2 class="sm:text-xl text-[12px] font-bold mb-6">Create Courses</h2>
                    <form onSubmit={addcourses} id='submitForm'>
                        <div class="space-y-6">
                           <div>
                                <label for="title" class="text-sm xs:text-sm font-medium text-gray-700 mb-1 ">Course Catagery </label>
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="coursecatagery" />
                            </div>
                            <div>
                                <label for="title" class="text-sm xs:text-sm font-medium text-gray-700 mb-1 ">Course Name </label>
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="coursename" />
                            </div>

                            <div>
                                <label for="duration" class="text-sm xs:text-sm font-medium text-gray-700 mb-1">Duration</label> 
                                <input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="duration" />
                            </div>



                            <div>
                                <label for="fees" class="text-sm xs:text-sm font-medium text-gray-700 mb-1">Fees  </label><input type="text" id="title" class="h-[50px] rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="fees" />
                            </div>

                        </div>
                        <div class="mt-8 pt-6  flex justify-end">
                            <button type='submit' class=" sm:w-[86px] w-full h-[50px] text-xs sm:text-base bg-blue-900 rounded-[5px] p-[13px_25px] gap-[10px] text-white">Next</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Addcourses
