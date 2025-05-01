import React, { useEffect, useState } from 'react'
import CallAjax from '../../Hook/CallAjax'
import { useNavigate, useParams } from 'react-router-dom'
import $ from 'jquery'


function Editmangementform() {
const [edit,setEdit] = useState([])
const {id} = useParams();
const goto = useNavigate();
   async function updateForm() {
        let result=  await CallAjax(`http://localhost:4050/edit/${id}`,{},'GET')
        setEdit(result)
       
    }

    useEffect(()=> {
        updateForm();
    },[])

    async function updateform(ev,key) {
        let val = ev.target.value;
        let newval = await{...edit,[key]:val}
        setEdit([newval])
        
    }
   async function submitForm(ev) {
        ev.preventDefault();
        let formdata = new FormData($("#loginForm")[0]);
        let result = await CallAjax('http://localhost:4050/update',formdata,'PUT');
        setEdit(result)
        goto('/managmentmodul')
    }
  return (
    <div>
     
    <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10">
            <h1 className='text-center text-2xl font-black font-serif'>Create a Edit Managment Member</h1><br />
          {
            edit.map((data)=>(
                <form id='loginForm' onSubmit={submitForm}>
            <div>
                <input type="hidden" name='id' value={data.id}/>
              <label class="block text-sm font-medium text-gray-700" for="username">
                Username
              </label>
              <div class="mt-1">
                <input class="appearance-none  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  autocomplete="username" type="text" name="name" id="username" value={data.name} onChange={(ev) => {updateform(ev,'name')}}/>
              </div>
            </div>
    
            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700" for="email">
                Email address
              </label>
              <div class="mt-1">
                <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="email" type="email" value={data.email} name="email" id="email"  onChange={(ev) => {updateform(ev,'email')}}/>
              </div>
            </div>
    
            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700" for="confirm-email">
               Phone Number
              </label>
              <div class="mt-1">
                <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  autocomplete="email" type="text" value={data.phone} name="phone" id="confirm-email"  onChange={(ev) => {updateform(ev,'phone')}}/>
              </div>
            </div>
    
            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700" for="password">
                Qualification
              </label>
              <div class="mt-1">
                <input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required="" autocomplete="current-password" value={data.qualification} type="text" name="qualification" id="password" onChange={(ev) => {updateform(ev,'qualification')}}/>
              </div>
            </div>
    
            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700" for="password">
                Address
              </label>
              <div class="mt-1">
                
                <textarea name="address" id="" value={data.address} className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' onChange={(ev) => {updateform(ev,'address')}}></textarea>
              </div>
            </div>
            <div class="mt-6">
              <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                Edit
              </button>
            </div>
          </form>
            ))
          }
        </div>
      </div>
    </div>
    
        </div>
  )
}

export default Editmangementform
