import React from 'react'
import $ from 'jquery'
import CallAjax from '../Hook/CallAjax';
import paramlogo from '../assets/param-logo.png'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import 'jquery-validation';
import image from '../assets/adm.jpg'
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


function Admin() {
  const [showPassword, setShowPassword] = useState(false);
    const redirect = useNavigate();
    async function signin(ev){ 

        ev.preventDefault();

        let formdata = new FormData($("#loginForm")[0]);

       let reuslt = await CallAjax('http://localhost:4050/login/1', formdata, 'POST');
    //    console.log(reuslt)
       if(reuslt.length > 0) {
        // console.log((reuslt[0]['role']))
        localStorage.setItem('role','admin')
        redirect('/adminnav')
        localStorage.setItem('loginData',reuslt);
        localStorage.setItem('role',1)
        // console.log('login success')
       } else {
       alert('invalied id pass')
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
            pass:'please enter your password'
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
     

{/* <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div class="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div class="flex flex-col items-center">
            
                        <img src={paramlogo} alt="Profile Picture" class="w-28 h-28 rounded-full mt-4"/>

            <h2 class="text-xl font-semibold mt-2">Welcome, Admin!</h2>
            <p class="text-gray-500 text-sm">Sign in to continue</p>
        </div>
        <form class="mt-6" onSubmit={signin} id='loginForm'>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Email address" name='email' class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"/>
            
            <label class="block text-sm font-medium text-gray-700 mt-4">Password</label>
            <div class="relative">
                <input type="password" placeholder="Password" name='password' class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none"/>
                
            </div>
            
            <div class="flex items-center justify-between mt-4">
                
                <a href="#" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
            
            <button class="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-center font-semibold">Sign In</button>
        </form>
    </div>
</div> */}


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
                      Admin Login
                    </h2>
            
                    <form className="space-y-5" onSubmit={signin} id='loginForm'>
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

export default Admin
