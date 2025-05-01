import React from 'react'
import $ from 'jquery'
import CallAjax from '../Hook/CallAjax';
import paramlogo from '../assets/param-logo.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import 'jquery-validation';

function Mangment() {
    const redirect = useNavigate();
    async function signin(ev){ 

        ev.preventDefault();

        let formdata = new FormData($("#loginForm")[0]);

       let reuslt = await CallAjax('http://localhost:4050/login/2', formdata, 'POST');
    //    console.log(reuslt)
       if(reuslt.length > 0) {
        
        redirect('/managmentnav')
        localStorage.setItem('loginData',reuslt);
        localStorage.setItem('role',2)
        // console.log('login success')
       } else {
        alert('invalied id pass')
       }

    //    if(reuslt.length > 0) {
    //     // redirect('Admin');
    //     console.log("login")
   
    //    } else {
    //     // $(".loginerrors").html("Invalid Credetials!");
    //     console.log("Invalied Credetials!")
    //    }

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
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div class="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div class="flex flex-col items-center">
            <img src={paramlogo} alt="Profile Picture" class="w-28 h-28 rounded-full mt-4"/>
            <h2 class="text-xl font-semibold mt-2">Welcome, Managment!</h2>
            <p class="text-gray-500 text-sm">Sign in to continue</p>
        </div>
        <form class="mt-6" onSubmit={signin} id='loginForm'>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Email address"  class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" name='email'/>
            
            <label class="block text-sm font-medium text-gray-700 mt-4">Password</label>
            <div class="relative">
                <input type="password" placeholder="Password" name='password' class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none"/>
                {/* <span class="absolute right-3 top-3 cursor-pointer text-gray-500">👁</span> */}
            </div>
            
            <div class="flex items-center justify-between mt-4">
                <label class="flex items-center text-sm text-gray-600">
                    <input type="checkbox" class="mr-2 border-gray-300" /> Remember me
                </label>
                <a href="#" class="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
            
            <button class="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-center font-semibold">Sign In</button>
        </form>
    </div>
</div>    </div>
  )
}

export default Mangment
