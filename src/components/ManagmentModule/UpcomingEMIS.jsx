import React from 'react'
import Managmentnavbar from '../Managmentnavbar'
import { Link } from 'react-router-dom'

function UpcomingEMIS() {
  return (
    <>
        <Managmentnavbar/>

       
            <div>
            <div class="text-xl py-3 px-6 bg-blue-900 text-white shadow-2xl rounded-t-lg me-3 font-bold mt-10 ms-3">
      &#8377;&nbsp;<span>Installment's</span>
      </div>
        <table class="text-left ms-3 w-[98.5%] shadow-2xl rounded-b-lg ">
          <thead>
            <tr>
              <th class="p-4 border-b border-slate-300 bg-slate-50">
                <p class="block text-[17px] font-normal leading-none text-slate-500">
                Student Name
                </p>
              </th>
              <th class="p-4 border-b border-slate-300 bg-slate-50">
                <p class="block text-[17px] font-normal leading-none text-slate-500">
                  Father Name
                </p>
              </th>
              <th class="p-4 border-b border-slate-300 bg-slate-50">
                <p class="block text-[17px] font-normal leading-none text-slate-500">
                  Course Name
                </p>
              </th>
             
              <th class="p-4 border-b border-slate-300 bg-slate-50">
                <p class="block text-[17px] font-normal leading-none text-slate-500">
                  Total Fee
                </p>
              </th>
              <th class="p-4 border-b border-slate-300 bg-slate-50">
                <p class="block text-[17px] font-normal leading-none text-slate-500">
                  Paid fee
                </p>
              </th>
              <th class="p-4 border-b border-slate-300 bg-slate-50">
                <p class="block text-[17px] font-normal leading-none text-slate-500">
                 Action
                </p>
              </th>
             
            </tr>
          </thead>
          <tbody>
               
      <tr class="hover:bg-slate-50">
              
              <td class="p-4 border-b border-slate-200 py-5">
                <p class="text-sm text-slate-500">vaishu</p>
              </td>
              <td class="p-4 border-b border-slate-200 py-5">
                <p class="text-sm text-slate-500">kjf</p>
              </td>
              <td class="p-4 border-b border-slate-200 py-5">
                <p class="text-sm text-slate-500">VAQISHU JAGSGH</p>
              </td>
             
              <td class="p-4 border-b border-slate-200 py-5">
                <p class="text-sm text-slate-500">sfdjsdb</p>
              </td>
             
              <td class="p-4 border-b border-slate-200 py-5">
                <p class="text-sm text-slate-500">fssdjb</p>
              </td>
            <Link to='/UPFeesForm'>  <td class="p-4 border-b border-slate-200 py-5">
                <p class="text-[14px] text-slate-500 bg-blue-900 text-center text-white py-2 px-8 rounded hover:bg-blue-300 focus:outline-none focus:shadow-outline font-bold">Pay EMI</p>
              </td></Link>
            </tr>
            
          </tbody>  
        
          </table>
          </div>
        
  
    </>
  )
}

export default UpcomingEMIS
