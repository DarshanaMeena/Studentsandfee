import React, { useState,useEffect, useRef } from 'react'
import CallAjax from '../../Hook/CallAjax'
import moment from 'moment'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import Managmentnavbar from '../Managmentnavbar'
import Adminnavbar from '../Adminnavbar'

function Allstudentrecord() {
const[studentdata,setStudentdata] = useState([])
const userrole = useRef(localStorage.getItem('role'));
    async function registerstudent() {
        const response = await CallAjax('http://localhost:4050/allstudentdata', {}, 'GET')
        setStudentdata(response)
    
      }
      useEffect(() => {
        registerstudent();
      },[])

      async function deletstudentrecord(id) {
        let cnf = confirm("Are You Sure You Want To Delete This User ❌");
        if (cnf == false) {
          return false;
        }
        let result = await await CallAjax('http://localhost:4050/deletestudentrecord',{id:id},'DELETE')
        console.log('Deleted user')
        console.log(result)
        registerstudent();
        
      }
  return (
    <div>
            <div> { userrole.current == 1 ? <Adminnavbar /> : <Managmentnavbar/> } </div>

      <table className=" mt-5 md:ms-72 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  text-center" >
          <thead className="  text-xs text-gray-700 uppercase bg-gray-50 bg-gray-800 dark:text-gray-400 text-center ">
            <tr className='font-bold '>
              <th scope="col" className="px-6 py-5">
                Id
              </th>
              <th scope="col" className=" py-5">
                Student Name
              </th>
              <th scope="col" className="px-6 py-5">
                Father Name
              </th>
              
              {/* <th scope="col" className="px-6 py-5">
                Student Email
              </th> */}

              {/* <th scope="col" className="px-6 py-5">
               DOB
              </th> */}
              <th scope="col" className=" py-5">
                Student Mobail Number
              </th>
              {/* <th scope="col" className="px-6 py-5">
                Parent's Mobile Number
              </th> */}
              <th scope="col" className="px-6 py-5">
                Gender
              </th>
              {/* <th scope="col" className="px-6 py-5">
                Category
              </th>*/}
              <th scope="col" className="px-6 py-5">
                Address
              </th> 
              <th scope='col' className='px-6 py-5'>Students Details</th>
              <th scope="col" className="px-6 py-5">
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            {
              studentdata.map((data, index) => (
                <tr className=" text-black text-center bg-white border-b  dark:border-gray-700 border-gray-200">


                  <td className="px-4 py-4 font-bold">{index + 1}</td>
                  <td className=" py-4">{data.stude_name} ({data.education})</td>
                  <td className="px-4 py-4">{data.stude_fname}</td>
                  {/* <td className="px-4 py-4">{data.stude_email}</td> */}
                  {/* <td className="px-4 py-4">{moment(data.stude_dob).format('DD/MM/YYYY')}</td> */}
                  <td className="px-4 py-4">{data.stude_snum}</td>
                  {/* <td className="px-4 py-4">{data.stude_pnum}</td> */}
                  <td className="px-4 py-4">{data.gender}</td>
                  {/* <td className="px-4 py-4">{data.category}</td> */}
                  <td className=" py-4">{data.village_name} {data.city_name} </td>
                 <Link to={`/viewdetail/${data.stud_id}`}>
                 <td className=" py-4">
                 <button className='bg-blue-800 w-[100px] text-white p-2 rounded mt-[10px] ms-[10px] cursor-pointer '>View Detail</button>
                  </td>
                  </Link> 
                  {/* <td className="px-6 py-4">{data.address.charAt(0).toUpperCase() + data.address.slice(1)}</td> */}
                  <td className="px-2 py-4 text-2xl">
                    
                   <Link to={`/editstudentform/${data.stud_id}`}>
                   <span className='' title='EDIT'><ion-icon name="create-outline" ></ion-icon></span>
                   </Link> 
                     &nbsp;
                    <span className='text-red-900' title='DELETE'><ion-icon name="trash-outline" onClick={() => {deletstudentrecord(data.stud_id)}}></ion-icon></span>
                    
                  </td>
                </tr>
              ))
            }



          </tbody>
        </table>
    </div>
  )
}

export default Allstudentrecord
