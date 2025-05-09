import React, { useEffect, useState } from 'react'
import Managmentnavbar from '../Managmentnavbar'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import CallAjax from '../../Hook/CallAjax';


function FeesRecord() {
    const[viewfees,setViewFees] = useState([])
    const[paidFee,setPaidFee] = useState(0)
    const[courseFee, serCourseFee] = useState(0)
const {id} = useParams();
async function FeesDetails(){
    let response = await CallAjax(`http://localhost:4050/viewfees/${id}`,{}, 'GET')
    console.log(response)
    await setViewFees(response)
    await serCourseFee(response[0]['fees'])
}
useEffect(()=>{
    FeesDetails();
},[]);

const[feesData,setFeesData] = useState([]);

    async function registerstudent() {
        const response = await CallAjax(`http://localhost:4050/allFeesdata/${id}`, {}, 'GET')
        setFeesData(response)
    
      }

      async function getPaidFeeAmount() {
        const response = await CallAjax(`http://localhost:4050/paidfeeamount/${id}`, {}, 'GET')
        setPaidFee(response[0]['totalpaidfee'])
    
      }
      

      useEffect(() => {
        registerstudent();
        getPaidFeeAmount();
      },[]);

  return (
    <div>
        <Managmentnavbar/>
     

<div class="bg-white rounded-lg shadow-2xl px-8 py-5 max-w-5xl mx-auto mt-5 ">
    <div class="flex items-center justify-between mb-8">
        <div class="flex items-center">
           
            <div class="text-gray-700 font-bold text-xl font-serif">Student Information</div>
        </div>
      
    </div>
    {
              viewfees.map((getdata , index) =>(
     
    <div class="border-b-2 border-gray-300 pb-8 mb-8">
      
       
        <div class="text-gray-700 text-lg mb-2 font-serif">Student Name :- {getdata.stude_name}</div>
        <div class="text-gray-700 text-lg  mb-2 font-serif">Father Name :- {getdata.stude_fname}</div>
        <div class="text-gray-700 text-lg  mb-2 font-serif">Course Name :- {getdata.couses_name}</div>
        <div class="text-gray-700 text-lg  mb-2 font-serif">Duration :- {getdata.duration}</div>
        <div class="text-gray-700 text-lg font-bold ">Fees :- &#8377;{getdata.fees}</div>
    </div>
         ))
        }
    <div class="flex items-center">
           
           <div class="text-gray-700 font-bold text-xl font-serif">Fees Detail</div>
       </div>
    <table class="w-full text-left mt-5">
    
        <thead>
            <tr>
                <th class="text-gray-700 font-bold uppercase py-2">Payment Type</th>
                <th class="text-gray-700 font-bold uppercase py-2">Amount</th>
                <th class="text-gray-700 font-bold uppercase py-2">Date</th>
                <th class="text-gray-700 font-bold uppercase py-2">Mode</th>
                <th class="text-gray-700 font-bold uppercase py-2">Status</th>
            </tr>
        </thead>
        <tbody>
        {
              feesData.map((data, index) => (
            <tr>
                <td class="py-4 text-gray-700">{data.pay_type == 1 ? 'Full Payment' : data.pay_type == 2 ? 'Down Payment' : `EMI - ${index}`}</td>
                <td class="py-4 text-gray-700">&#8377;&nbsp;{data.amount}</td>
                <td class="py-4 text-gray-700">{moment(data.pay_date).format('DD/MM/YYYY')}</td>
                <td class="py-4 text-gray-700">{data.mode}</td>
                <td class="py-4 text-gray-700">{data.status}</td>
            </tr>
              ))
            }
 
        </tbody>
    </table>
  
    <div class="flex justify-end mb-8">
        <div class="text-gray-700 mr-2 text-lg font-serif">Total Paid Amount :</div>
        <div class="text-gray-700 font-bold text-xl">&#8377;{paidFee}</div>
    </div>
    <div class="flex justify-end mb-8">
        <div class="text-gray-700 mr-2 text-lg font-serif">Remain Amount :</div>
        <div class="text-gray-700 font-bold text-xl">&#8377;{courseFee - paidFee}</div>
    </div>
    <Link to='/UPFeesForm'>   <div class="flex justify-end mb-8">
        <button class="bg-blue-900 text-white mr-1 px-12 rounded py-1 text-lg font-serif">Pay EMI</button>
    </div> </Link>
   
</div>
    </div>
  )
}

export default FeesRecord
