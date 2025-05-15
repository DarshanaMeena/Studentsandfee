import React from 'react'
import { useState, useEffect } from 'react'
import CallAjax from '../../Hook/CallAjax'
import { Link, useParams } from 'react-router-dom'
import Managmentnavbar from '../Managmentnavbar'
import moment from 'moment'
import profile from '../../assets/profile.png'
import StudentNavbar from '../../StudentNavbar'
import Adminnavbar from '../Adminnavbar'
import StudentOpenModal from './StudentOpenModal'
function Viewdetail_stude() {
  const [viewdetails, setViewdetails] = useState([])
  const { id } = useParams();
  async function managementedit() {
    let response = await CallAjax(`http://localhost:4050/viewdetails/${id}`, {}, 'GET')
    console.log(response)
    setViewdetails(response)
  }
  useEffect(() => {
    managementedit();
  }, [])

   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div >
      {
        localStorage.getItem('role') == 1 ? <Adminnavbar/> : localStorage.getItem('role') == 2 ? <Managmentnavbar /> : <StudentNavbar/> 
      }

      <div className='md:ms-70 '>


        {
          viewdetails.map((studentdetail) => (
            <div>
              <div class="flex flex-col p-6  bg-white  mt-11">
                <div class="grid grid-cols-2">
                  <div class="flex">


                    <div className='ms-auto'>
                      <img src={profile} alt="" className='w-32' />

                    </div>
                    <div class="ms-5">
                      <div class=" gap-3 items-center -mt-1 py-3">
                        <p class="font cursor-pointer text-4xl">{studentdetail.stude_name}</p>
                      </div>
                      <div class="font-light text-md text-[#4b587c]">Welcome To Student Profile Page</div>
                      <div>
                         {
        localStorage.getItem('role')  <= 2 ?  <Link to={`/editstudentform/${studentdetail.stud_id}`}>
                          <button type="button" className=" text-white inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-blue-400 to-blue-600 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100" >
                            <ion-icon name="pencil-outline"></ion-icon>Edit
                          </button></Link> : <button onClick={openModal} type="button" className=" text-white inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-blue-400 to-blue-600 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 cursor-not-allowed" >
                            <ion-icon name="pencil-outline"></ion-icon>Edit
                          </button>
      }

      <div>
        <StudentOpenModal isOpen={isModalOpen} onClose={closeModal}>
       
        <div className="mt-2">
          <p className="text-xl text-gray-800">
          You Can Only View Your Personal Details, You Cannot Change.
          </p>
        </div>
      </StudentOpenModal>

      </div>
                       
                      </div>
                    </div>
                  </div>


                </div>


              </div>

              <div class="  p-6 rounded-2xl bg-white  mt-11">

                <div>
                  <h1 className='text-3xl p-3 font-serif font-bold'>Student Personal Information <hr className='border-blue-500 border-2' /></h1>
                  <table className='w-xl text-xl  text-start'>
                    <thead >
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Student Name</th>
                        
                        <td className='text-start'>{studentdetail.stude_name}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Father Name</th>
                        <td>{studentdetail.stude_fname}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Email Address</th>
                        <td>{studentdetail.stude_email}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Date Of Birth</th>
                        <td>{moment(studentdetail.stude_dob).format('DD/MM/YYYY')}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'> Admition Date</th>
                        <td>{moment(studentdetail.admition_date).format('DD/MM/YYYY')}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Student Number</th>
                        <td>{studentdetail.stude_snum}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Student Father Number</th>
                        <td>{studentdetail.stude_pnum}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Gender</th>
                        <td>{studentdetail.gender}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Category</th>
                        <td>{studentdetail.category}</td>
                      </tr>

                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Batch Name</th>
                        <td>{studentdetail.batch_name} {moment(moment(new Date()).format('YYYY-MM-DD') + ' ' + studentdetail.start_time).format('hh:mm A')} To {moment(moment(new Date()).format('YYYY-MM-DD') + ' ' + studentdetail.end_time).format('hh:mm A')}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Course Name</th>
                        <td>{studentdetail.couses_name}</td>
                      </tr>

                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Education</th>
                        <td>{studentdetail.education}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Address</th>
                        <td>{studentdetail.address}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Distric Name</th>
                        <td>{studentdetail.dis_name}</td>
                      </tr>
                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>City Name</th>
                        <td>{studentdetail.city_name}</td>
                      </tr>

                      <tr className='border-b-1  border-gray-400'>
                        <th className='p-3 text-xl font-normal'>Village Name</th>
                        <td>{studentdetail.village_name} </td>
                      </tr>
                    </thead>

                  </table>
                </div>

              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Viewdetail_stude
