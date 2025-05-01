import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
function Testing() {

  function notify(){
    toast.warn("User added succefullY!")
  }

  return(
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer className='changeposition'/>
      </div>
  )

}

export default Testing
