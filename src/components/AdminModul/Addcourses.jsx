import React from 'react'
import CallAjax from '../../Hook/CallAjax';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import 'jquery-validation'
import { useEffect } from 'react';
import courseimg from '../../assets/co.avif'
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

            {/* <Managmentnavbar /> */}
            <div className='grid grid-cols-2'>
          <div className=''>
            <img src={courseimg} alt="" className='w-full h-screen '/>
          </div>
          <div>
<section class=" p-1 ">
                <div class="mt-4 max-w-96 sm:max-w-4xl mx-auto   rounded-lg p-5 w-xl shadow-2xl">
                   <div class="relative inline-block mb-11">
  <span class="text-2xl md:text-3xl font-bold uppercase">
   Add Courses
  </span>
  <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
</div>
                    <form onSubmit={addcourses} id='submitForm'>
                        <div class="space-y-6">
                           <div>
                                <label for="title" class="text-sm xs:text-sm font-medium text-gray-700 mb-1 ">Course Catagery </label>
                                <input type="text" id="title" class="py-3 rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="coursecatagery" />
                            </div>
                            <div>
                                <label for="title" class="text-sm xs:text-sm font-medium text-gray-700 mb-1 ">Course Name </label>
                                <input type="text" id="title" class="py-3 rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="coursename" />
                            </div>

                            <div>
                                <label for="duration" class="text-sm xs:text-sm font-medium text-gray-700 mb-1">Duration</label> 
                                <input type="text" id="title" class="py-3 rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="duration" />
                            </div>



                            <div>
                                <label for="fees" class="text-sm xs:text-sm font-medium text-gray-700 mb-1">Fees  </label><input type="text" id="title" class="py-3 rounded-[5px] text-sm xs:text-sm border border-[#D1D5DB] w-full px-2" name="fees" />
                            </div>

                        </div>
                        <div class="mt-5 flex justify-end">
                            <button type='submit' class=" sm:w-[86px] w-full py-3 text-xs sm:text-base bg-blue-900 rounded-[5px] p-[13px_25px] gap-[10px] text-white">Next</button>
                        </div>
                    </form>
                </div>
            </section>
          </div>
            </div>
            
        </div>
    )
}

export default Addcourses
