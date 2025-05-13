import React from 'react'
import $ from 'jquery'
import CallAjax from '../../Hook/CallAjax';

function Adddistric({isOpen,onClose,studentdistric,handledistric,children}) {
    async function adddistrics(ev) {
        ev.preventDefault();

        let formdata = {
            cialldistrcity : $("#districtname").val()
        }
       
        
        let result = await CallAjax('http://localhost:4050/adddis',formdata,'POST');
        console.log(result)
        if(result) {
          
          await studentdistric();

          await handledistric({value: $("#districtname").val(), label: $("#districtname").val()})
          
          onClose();
        } else {
          console.log('failed')
        }
      }
  return (
    <div>
      <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {children}
              </div>
            </div>
          </div>
        <form action="" id='Addcity'>

            <div className="px-10">
                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                                Distric Name
                            </label>
                            <div class="">
              <input type="text" class="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-black-100 text-sm rounded-lg focus:ring-violet-100  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500" placeholder="Distric..." name='cname' id="districtname"/>
            </div>
            
                    </div>
    
          <div className="bg-gray-50 px- py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-3 ">

         
            <button type="button" className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100" onClick={onClose}>
              Close
            </button>

            <button onClick={adddistrics}
             
             className=" inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100" type='button'
           >
             Add
           </button>
          </div>
        </form>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Adddistric
