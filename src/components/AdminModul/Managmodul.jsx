import React from 'react'
import Adminnavbar from '../Adminnavbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import CallAjax from '../../Hook/CallAjax'

function Managmodul() {
  const [user, setUser] = useState([])
  const [singleuser, setSingleuser] = useState([]);

  async function loginUser() {
    const response = await CallAjax('http://localhost:4050/userdata', {}, 'GET')
    setUser(response)
   }
  useEffect(() => {
    loginUser();
  }, [])

  async function deletUser(id) {
    let cnf = confirm("Are You Sure You Want To Delete This User ❌");
    if (cnf == false) {
      return false;
    }
    let result = await CallAjax('http://localhost:4050/delet', { id: id }, 'DELETE')
    console.log('Deleted user')
    console.log(result)
    loginUser();

  }
  async function seachUsers(ev) {
    
    let searchVal = ev.target.value;
    console.log(searchVal)
    let result = await CallAjax('http://localhost:4050/search', { seachusers: searchVal }, 'POST')
    setUser(result)
  }


    
 

//  console.log(editform)

  return (

    <div>
      <Adminnavbar />
      <div className='flex justify-between mt-7 md:ms-70'>
        <Link to="/managmentform"><div className='bg-blue-800 mt-5 p-2 w-[180px] rounded text-center text-white ms-1 '>Add Management</div>
        </Link>
        <div className="relative mt-5 me-5">
          <input type='text'
            class=" pr-11 h-10 pl-3 py-2 bg-transparent border border-1 border-blue-500 placeholder:text-slate-600 text-slate-700 text-sm border border-blue-700 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Search..." onKeyUp={seachUsers}
          />
          <button
            class="absolute   top-1 my-auto flex items-center rounded "
            type="button"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-8 text-slate-600  ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg> */}
          </button>
        </div>
      </div>

      <div >
        <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">

          <div class="ml-3">
            <div class="w-full max-w-sm min-w-[200px] relative">

            </div>
          </div>
        </div>



        <table className=" md:ms-70 text-sm text-left rtl:text-right text-black dark:text-black m-auto text-center" >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className=" py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>

              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                User Mobail Number
              </th>
              <th scope="col" className="px-6 py-3">
                Qualification
              </th>
              <th scope="col" className="px-6 py-3">
                User Address
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            {
              user.map((data, index) => (
                <tr className=" text-center bg-white border-b dark:bg-gray-100 dark:border-gray-700 border-gray-200">


                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.phone}</td>
                  <td className="px-6 py-4">{data.qualification}</td>
                  <td className="px-6 py-4">{data.address.charAt(0).toUpperCase() + data.address.slice(1)}</td>
                  <td className="px-6 py-4 text-2xl">
                    <Link to={`/editform/${data.id}`} className='' title='EDIT'>
                    <ion-icon name="create-outline" ></ion-icon>
                    </Link>  &nbsp;
                   <button className='cursor-pointer text-red-900' title='DELETE'>
                   <ion-icon name="trash-outline"  onClick={() => deletUser(data.id)}></ion-icon>
                    </button> 
                  </td>
                </tr>
              ))
            }



          </tbody>
        </table>

      </div>
    </div>
    // </div>   
    //  </div>
  )
}

export default Managmodul
