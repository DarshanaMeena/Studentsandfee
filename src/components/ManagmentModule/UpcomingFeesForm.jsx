import React from 'react'
import Managmentnavbar from '../Managmentnavbar'

function UpcomingFeesForm() {
  return (
    <div>
        <Managmentnavbar/>
      <div class="w-[500px] mx-auto mt-10 bg-white shadow-2xl rounded-lg overflow-hidden">
    <div class="text-xl py-3 px-6 bg-blue-900 text-white  font-bold ">
      &#8377; New Payment
    </div>
    <form class="py-4 px-6" action="" method="POST">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                EMI Amount
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter EMI Amount"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Late Fee
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter Late Fee"/>
        </div>
        
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Total Payable
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder='Enter Total Payment' />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Payment Mode
            </label>
            <select  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>--Select--</option>
                <option>Online</option>
                <option>Cash</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
                Date of Pay
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Receipt No.
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter receipt no"/>
        </div>
        
       
        <div class="flex items-center justify-center mb-4">
            <button
                class="bg-blue-900  text-white py-2 px-12 rounded hover:bg-blue-300 focus:outline-none focus:shadow-outline"
                type="submit">
                Pay EMI
            </button>
        </div>

    </form>
</div>
    </div>
  )
}

export default UpcomingFeesForm
