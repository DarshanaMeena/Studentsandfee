import React, { useRef } from 'react'
import CallAjax from '../../Hook/CallAjax';
import $ from 'jquery'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Managmentnavbar from '../Managmentnavbar';
import Adminnavbar from '../Adminnavbar';
import moment from 'moment';

import ToastMsg from '../../Hook/ToastMsg';
import BatchModal from '../ManagmentModule/BatchModal';

function Batchesmodul() {

  const [getbatch,setGetbatches]=useState([]);
  const userrole = useRef(localStorage.getItem('role'));

  function msgs(tyep, error){
    ToastMsg('success', 'Hello World!');
  }

    async function getbatchess(){
let batchdata = await CallAjax('http://localhost:4050/betchget',{},'GET');
setGetbatches(batchdata);
    }
    useEffect(()=>{
        getbatchess();
        
    },[])
    async function deletebatche(bid) {
      let conf = confirm('are you sure you want to delete this Batch ❌')
      if(conf==false){
        return false;
      }
      let bdelete= CallAjax('http://localhost:4050/bdelete',{id:bid},'DELETE')
      
      getbatchess();
      
     }

     const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
  
    <div>
     
    { userrole.current == 1 ? <Adminnavbar /> : <Managmentnavbar/> }

    <div className='grid  justify-center md:ms-70 mr-5 mt-5'>
        
    
     <div className=' justify-end mr-5 mt-5 gap-3'>
      {/* 
       */}
     
     <div className='text-end'>
     <Link to='/batchform'>  <button class=" mt-5 text-end  bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Add Batches
      </button>
     </Link>
     </div>
        
      </div>
      

      <div>
      

<div className=' grid md:grid-cols-3 sm:grid-cols-1 sm:gap-2 grid-cols-1 mt-5 justify-center'>



{
              getbatch.map((batchdata)=>(  
                <div className='p-5 max-w rounded-2xl  items-center'>    
<div 
  class="relative  py-5 border border-2 border-blue-500 border-dashed px-11 rounded-bl-4xl overflow-hidden  " onClick={openModal}
>


<div>

                <div>
  <div class=" w-full">
    <p
      class="mt-1.5 text-2xl uppercase font-bold text-blue-300 leading-8  text-ellipsis whitespace-nowrap"
    >
      {batchdata.batch_name}
    </p>
    <p class=" text-gray-700 font-bold"> {batchdata.couses_name} </p>
    <p class="overflow-hidden leading-5 break-all text-zinc-600 max-h-10">
    {moment(moment(new Date()).format('YYYY-MM-DD')+' ' +batchdata.start_time).format('hh:mm A')} To {moment(moment(new Date()).format('YYYY-MM-DD')+' ' +batchdata.end_time).format('hh:mm A')}
    </p>
  </div>

<div class="mt-5 flex gap-4 items-center justify-center">
<Link to={`/editbatches/${batchdata.id}`}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-600">EDIT</button></Link> 
 <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-600" onClick={()=>{deletebatche(batchdata.id)}}>DELETE</button>
</div> 
</div>
 
</div>

  {/* <button class="w-16 cursor-pointer focus:outline-none">
    <svg
      class="w-7 h-7"
      fill="none"
      stroke="mediumseagreen"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  </button> */}
</div>
</div>
 ))
}
             
       
                
               
            </div>
               <BatchModal isOpen={isModalOpen} onClose={closeModal}>
        
        <div className="mt-2">
         Batch Name    
        </div>
      </BatchModal>


               </div>
      </div>
     
     </div>
  
   
    // </div>
  )
}


 

export default Batchesmodul
