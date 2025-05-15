import React from 'react'
import { useNavigate } from 'react-router-dom'
import CallAjax from '../../Hook/CallAjax';
import { useEffect } from 'react';
import $ from 'jquery'
import 'jquery-validation'
import mngimg from '../../assets/mngg.png'

function Managmenform() {
  const redirect = useNavigate()
  async function formdata(ev) {
    ev.preventDefault();
    let formdata = new FormData($("#loginForm")[0]);
    let result = await CallAjax('http://localhost:4050/data',formdata,'POST');
    console.log(result)
    if(result) {
      alert("added Succefully!");
      redirect('/managmentmodul');
    } else {
      console.log('failed')
    }
  }

  function validation() {
                
            
    $("#loginForm").validate({
      rules: {
        
        name: {
            required: true,
            
          },
          email: {
            required: true,
            
          },
          phone: {
            required: true,
            
          },
          qualification: {
            required: true,
            
          },
          address: {
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
     
<div class="grid grid-cols-2 items-start ">
<div>
  <img src={mngimg} alt="" className='w-fl bg-cover '/>
</div>
  <div class=" ">
    <div class="bg-white w-xl p-4 sm:rounded-lg sm:px-10">
        <h1 className='text-center text-2xl font-black font-serif'>Create a new Managment Member</h1><br />
      <form id='loginForm' onSubmit={formdata}>
        <div>
          <label class="block text-sm font-medium text-gray-700" for="username">
            Username
          </label>
          <div class="m">
            <input class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  autocomplete="username" type="text" name="name" id="username"/>
          </div>
        </div>

        <div class="mt-5">
          <label class="block text-sm font-medium text-gray-700" for="email">
            Email address
          </label>
          <div class="m">
            <input class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="email" type="email" name="email" id="email"/>
          </div>
        </div>

        <div class="mt-5">
          <label class="block text-sm font-medium text-gray-700" for="confirm-email">
           Phone Number
          </label>
          <div class="mt">
            <input class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  autocomplete="email" type="text" name="phone" id="confirm-email"/>
          </div>
        </div>

        <div class="mt-5">
          <label class="block text-sm font-medium text-gray-700" for="password">
            Qualification
          </label>
          <div class="mt">
            <input class="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="current-password" type="text" name="qualification" id="password"/>
          </div>
        </div>

        <div class="mt-5">
          <label class="block text-sm font-medium text-gray-700" for="password">
            Address
          </label>
          <div class="mt-1">
            {/* <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="current-password" type="text" name="password" id="password"/> */}
            <input type='text' name="address" id="" className='appearance-none block w-full px-3 py-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></input>
          </div>
        </div>
        <div class="mt-6">
          <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Managmenform
