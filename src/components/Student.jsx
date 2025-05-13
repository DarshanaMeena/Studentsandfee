import React from 'react'
import $ from 'jquery'
import CallAjax from '../Hook/CallAjax';
import paramlogo from '../assets/param-logo.png'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import 'jquery-validation';
import image from '../assets/student.webp'
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function Student() {
    const [showPassword, setShowPassword] = useState(false);
    const redirect =useNavigate();
     async function Studentsignin(ev){ 

        ev.preventDefault();

        let formdata = new FormData($("#loginForm")[0]);

       let reuslt = await CallAjax('http://localhost:4050/studentlogin', formdata, 'POST');
    //    console.log(reuslt)
       if(reuslt.length > 0) {
        if(!localStorage.getItem('loginData')&& localStorage.getItem('role') != 3)
        redirect(`/viewdetail/${reuslt[0]['stud_id']}`)
       
        // console.log('login success')
       } else {
        alert('Invalied Cradential!')
       }
    }

    function validation() {
        $("#loginForm").validate({
          rules: {
            email: {
                required: true,
                email: true,
              },
              password : {
                required : true,
                maxlength:5,
                minlength:5,
            },
    
          },
          messages: {
            required:'This field require!',
            email: 'Enter a valid email address.',
            pass:'please enter password'
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
              
              {/* Left Illustration */}
              <div className="md:w-1/2 bg-white p-6 flex items-center justify-center">
                <img
                  src={image}
                  alt="Login illustration"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
      
              {/* Right Login Form */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                {/* <div class="flex flex-col items-center">
                           <img src={paramlogo} alt="Profile Picture" class="w-28 h-28 rounded-full mt-4"/>
                           <h2 class="text-xl font-semibold ">Welcome, Admin!</h2>
                         
                       </div> */}
      
                <div className=" flex items-center justify-center px-4">
                        <div className="w-full max-w-md p-5 rounded-xl">
                          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Student Login
                          </h2>
                  
                          <form className="space-y-5" onSubmit={Studentsignin} id='loginForm'>
                            {/* Username */}
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Admin Username"
                                className="w-full px-12 py-3 bg-gray-100 rounded-md focus:outline-none"
                                name='email'
                              />
                              <FaUserShield className="absolute left-4 top-3.5 text-gray-500" />
                            </div>
                  
                            {/* Password */}
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full px-12 py-3 pr-12 bg-gray-100 rounded-md focus:outline-none"
                                name='password'
                              />
                              <FaLock className="absolute left-4 top-3.5 text-gray-500" />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3.5 text-gray-500"
                              >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                              </button>
                            </div>
                  
                            {/* Forgot Password */}
                            <div className="text-right text-sm">
                              <a href="#" className="text-blue-600 hover:underline">
                                Forgot Password?
                              </a>
                            </div>
                  
                            {/* Submit */}
                            <button
                              type="submit"
                              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                            >
                              Sign In
                            </button>
                  
                            {/* Footer */}
                            
                          </form>
                        </div>
                      </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Student
