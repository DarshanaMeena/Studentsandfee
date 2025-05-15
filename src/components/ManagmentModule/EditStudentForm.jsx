import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery'
import Select from "react-select"


import 'jquery-validation';
import { ToastContainer, toast } from 'react-toastify';


import moment from 'moment/moment';
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Managmentnavbar from '../Managmentnavbar';
import Addcity from './Addcity';
import Addvillage from './Addvillage';
import Adddistric from './Adddistric';
import CallAjax from '../../Hook/CallAjax';

function EditStudentForm() {

  const [Studentedit, setStudentedit] = useState([])
  const [selectbetch, setSelectbetch] = useState([])
  const [selectcourse, setSelectcourse] = useState([])
  const [cities, setCities] = useState([])
  const [villages, setVillages] = useState([])
  const [selectedValuevilllag, setSelectedValuevillage] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const formRef = useRef(null);
  const [districs, setDistric] = useState([])
  const [selectedis, setSelectdis] = React.useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalvOpen, setIsModalvOpen] = useState(false);
  const [isModaldOpen, setIsModaldOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);



  const { id } = useParams();
  const goto = useNavigate();
  async function getStudInfo() {
    let result = await CallAjax(`http://localhost:4050/editstudentform/${id}`, {}, 'GET')


    const response = await CallAjax(`http://localhost:4050/getalldistric/${result[0]['dis_id']}`, {}, 'GET');
    await studentteh(result[0]['dis_id'])
    const responsecities = await CallAjax(`http://localhost:4050/getcitybyid/${result[0]['city_id']}`, {}, 'GET')
    await studentvillage(result[0]['city_id'])
    const responsevillage = await CallAjax(`http://localhost:4050/getvillagebyid/${result[0]['village_id']}`, {}, 'GET')
    await setSelectdis(response);
    await setSelectedValue(responsecities);
    await setSelectedValuevillage(responsevillage)

    setStudentedit(result)
    console.log(result)

  }

  useEffect(() => {
    getStudInfo();
  }, [])

  async function updateformval(ev, key) {
    let val = ev.target.value;
    let newval = await { ...Studentedit, [key]: val }
    console.log(newval)
    setStudentedit([newval])

  }
  //    async function submitForm(ev) {
  //         ev.preventDefault();
  //         let formdata = new FormData($("#RegisterForm")[0]);
  //         let result = await CallAjax('http://localhost:4050/update',formdata,'PUT');
  //         setEdit(result)
  //         // goto('/')
  //     }


  // village and cities


  // const redirect =useNavigate()
  // async function stud_formdata(ev) {
  //   ev.preventDefault();

  //   let formdata = new FormData($("#RegisterForm")[0]);
  //   let result = await CallAjax('http://localhost:4050/studentdata',formdata,'POST');
  //   console.log(result)
  //   if(result) {
  //     alert("Form successfuly!")
  //     redirect('/allstudentrecord');
  //   } else {
  //     console.log('failed')
  //   }
  // }

  async function getbatchess() {
    let batchdata = await CallAjax('http://localhost:4050/getbetchselect', {}, 'GET');
    setSelectbetch(batchdata);
  }
  useEffect(() => {
    getbatchess();
  }, [])
  async function getcourse() {
    let coursedata = await CallAjax('http://localhost:4050/getcoursesselect', {}, 'GET');
    setSelectcourse(coursedata);

  }
  useEffect(() => {
    getcourse();
  }, [])


  const handleChange = async (selectedOption) => {
    console.log(selectedOption)
    await setSelectedValue(selectedOption);

    console.log('Selected Teh id= ', selectedOption)
    await registerstudents(selectedOption.value);
  };



  const options = [];

  async function studcity() {
    const response = await CallAjax(`http://localhost:4050/getallcities/${d_id}`, {}, 'GET')

    /*await response.map((city)=>{
         options.push({value: city.value, label : city.label});
    })*/
    setCities(response)

  }

  useEffect(() => {
    studcity();
  }, [])

  const handleChangevilllage = async (selectedOption) => {
    await setSelectedValuevillage(selectedOption);

  };
  async function registerstudents() {
    const responce = await CallAjax(`http://localhost:4050/getallvillages`, {}, 'GET')

    /*await response.map((city)=>{
         options.push({value: city.value, label : city.label});
    })*/
    setVillages(responce)

  }

  async function updateform(e) {

    e.preventDefault();
    let formdata = new FormData($("#RegisterForm")[0]);
    console.log(formdata)
    let resultup = await CallAjax(`http://localhost:4050/editstud/${id}`, formdata, 'PUT');
    //setStudentedit([resultup])

    goto('/allstudentrecord')
  }
  useEffect(() => {
    registerstudents();
  }, [])

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModalv = () => {
    setIsModalvOpen(true);
  };




  function validation() {
    const $form = $(formRef.current);

    $("#RegisterForm").validate({
      rules: {
        sname: {
          required: true,
        },
        fname: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        date: {
          required: true,
        },
        sphone: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
        fphone: {
          required: true,
          minlength: 10,
          maxlength: 10,
        },
        gender: {
          required: true,
        },
        category: {
          required: true,
        },
        batch: {
          required: true,
        },
        classname: {
          required: true,
        },
        address: {
          required: true,
        },

      },
      messages: {
        sname: 'Please enter Student number',
        email: 'Enter a valid email address.',
        sphone: 'please enter at least 10 number'
      },
      //   submitHandler: function (form) {
      //     alert('Registration Successfuly!');
      //    return true
      // }
    });
  }
  useEffect(() => {
    validation();
  }, [])

  async function studentdistric() {
    const response = await CallAjax('http://localhost:4050/getalldistric', {}, 'GET');

    setDistric(response)

  }
  useEffect(() => {
    studentdistric();
  }, [])


  //get distric
  const handledistric = async (selectedOption) => {
    setSelectdis(selectedOption);

    console.log(selectedOption)

    await studentteh(selectedOption.value);

  };

  const openModald = () => {
    setIsModaldOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalvOpen(false);
    setIsModaldOpen(false);

  };

  async function studentteh(dsid) {
    const response = await CallAjax(`http://localhost:4050/getallcities/${dsid}`, {}, 'GET')

    /*await response.map((city)=>{
         options.push({value: city.value, label : city.label});
    })*/
    setCities(response)

  }

  async function studentvillage(t_id) {
    const responce = await CallAjax(`http://localhost:4050/getallvillages/${t_id}`, {}, 'GET')

    /*await response.map((city)=>{
         options.push({value: city.value, label : city.label});
    })*/
    setVillages(responce)

  }




  return (
    <div>


      <div>
       <Managmentnavbar />
      </div>
      <div class="flex items-center justify-center p-12 md:ms-70">

        <div class="mx-auto w-7xl max-w-[750px] bg-white shadow-2xl  border-gray-200 border-1  rounded-br-3xl rounded-tl-3xl">
          {/* <div className='w-xs m-auto mt-5'>
    <h1 className='text-xl text-center bg-blue-500 rounded-br-3xl rounded-tl-3xl text-white hover:bg-blue-600 py-4 '> Student Registration</h1>
    </div> */}

          <div className='w-full'>
            <h1 className=' text-xl text-center bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 font-bold text-white hover:from-blue-800 hover:to-white-500 rounded-tl-3xl  hover:bg-blue-800 py-4 '> Student Registration</h1>
          </div>
          {
            Studentedit.map((val) => (
              <form onSubmit={updateform} id='RegisterForm' className=' py-9 px-9 '>

                <div class="-mx-3 flex flex-wrap">
                  <input type="hidden" id='id' value={val.stud_id} />
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Student's Name
                      </label>
                      <input type="text" name="sname" placeholder=" Student Full Name" onChange={(ev) => { updateformval(ev, 'sname') }} value={val.stude_name}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                    </div>
                  </div>

                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Father Name
                      </label>
                      <input type="text" name="fname" placeholder="Father Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_fname} onChange={(ev) => { updateformval(ev, 'fname') }} />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                  </label>
                  <input type="email" name="email" id="email" placeholder="Enter your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_email} onChange={(ev) => { updateformval(ev, 'email') }} />
                </div>
                
                <div class="mb-5 pt-3">

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                          Date of Birth
                        </label>
                        <input type="date" name="date" id="date"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={moment(val.stude_dob).format('YYYY-MM-DD')} onChange={(ev) => { updateformval(ev, 'stude_dob') }} />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                          Admission Date

                        </label>
                        <input type="date" name="admition" id="date" value={moment(val.admition_date).format('YYYY-MM-DD')} onChange={(ev) => { updateformval(ev, 'admition') }}
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                      </div>
                    </div>


                  </div>
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                        Student's Number
                      </label>
                      <input type="text" name="sphone" placeholder="Enter phone number" value={val.stude_snum} onChange={(ev) => { updateformval(ev, 'sphone') }}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                    </div>
                  </div>

                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                        Parent's Number
                      </label>
                      <input type="text" name="fphone" placeholder="Enter phone number" value={val.stude_pnum} onChange={(ev) => { updateformval(ev, 'fphone') }}
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                    </div>
                  </div>
                </div>

                <div class="mb-5 pt-3">

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                          Gender
                        </label>
                        <select name="gender" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.gender} onChange={(ev) => { updateformval(ev, 'gender') }} >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                          Category
                        </label>
                        <select name="category" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.category} onChange={(ev) => { updateformval(ev, 'category') }} >
                          <option value="">Select Category</option>
                          <option value="GEN">GEN</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="OBC">OBC</option>

                        </select>
                      </div>
                    </div>


                  </div>
                </div>
                <div class="mb-5 pt-3">

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                          Course Name
                        </label>
                        <select name="course" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.course_id} onChange={(ev) => { updateformval(ev, 'course') }} >
                          <option value="">Select Course</option>
                          {
                            selectcourse.map((option) => (
                              <option value={option.id}>{option.couses_name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                          Batch Name
                        </label>
                        <select name="batch" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.betch_id} onChange={(ev) => { updateformval(ev, 'batch') }}>
                          <option value="">Select Batch</option>
                          {
                            selectbetch.map((option) => (
                              <option value={option.id}>{option.batch_name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>


                  </div>
                </div>



                <div class="mb-5">
                  <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Education/Class
                  </label>
                  <select name="classname" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.education} onChange={(ev) => { updateformval(ev, 'classname') }} >
                    <option value="">Select Class</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>


                  </select>
                </div>



                <div class="mb-5 pt-3">
                  <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Address Details
                  </label>
                  <div class="mb-5">
                    <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                      Address
                    </label>

                    <input type="text" name="address" id="name" value={val.address} onChange={(ev) => { updateformval(ev, 'address') }}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                  </div>
                  <div class="-mx-3 flex flex-wrap">

                    <div class="w-full px-3 sm:w-1/2">
                      <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        District
                      </label>
                      <div class="mb-5">
                        <div>
                          <Select
                            options={districs} isSearchable value={selectedis} onChange={handledistric} name='district' />

                        </div>

                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2 mt-auto">
                      <div class="mb-5">
                        <div class="flex justify-center">
                          <div class="rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 cursor-pointer" onClick={openModald}>
                            Add
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <Adddistric isOpen={isModaldOpen} onClose={closeModal} studentdistric={studentdistric} handledistric={handledistric}>
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Add Distric
                    </h3>
                  </Adddistric>
                  <div class="-mx-3 flex flex-wrap">

                    <div class="w-full px-3 sm:w-1/2">
                      <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">

                        Tehsil
                      </label>
                      <div class="mb-5">
                        <div>

                          <Select
                            options={cities}
                            isSearchable
                            value={selectedValue}
                            onChange={handleChange}
                            name='city'
                          />

                        </div>

                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2 mt-auto">
                      <div class="mb-5">
                        <div class="flex justify-center">
                          <div class={`rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 ${selectedis ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={selectedis ? openModal : ''}>
                            Add
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <Addcity isOpen={isModalOpen} onClose={closeModal} studentteh={studentteh} handleChange={handleChange} district={selectedis}>
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Add Villages
                    </h3>
                  </Addcity>
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2 ">
                      <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Village/City
                      </label>
                      <div class="mb-5">
                        <div>
                          <Select
                            options={villages}
                            isSearchable
                            value={selectedValuevilllag}
                            onChange={handleChangevilllage}
                            name='village'
                          />
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2 mt-auto ">
                      <div class="mb-5">
                        <div class="flex justify-center">
                          <div class={`rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 ${selectedis ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={selectedis ? openModalv : ''}>
                            Add
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Addvillage isOpen={isModalvOpen} onClose={closeModal} studentvillage={studentvillage} handleChangevilllage={handleChangevilllage} allcities={cities}>
                  <div className='m-auto'>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 " id="modal-headline">
                      Add Villages
                    </h3>
                  </div>

                </Addvillage>
                <div>
                  <button type='submit'
                    class="hover:shadow-form w-full rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Register
                  </button>
                  {/* modal */}


                  {/* <!-- Modal toggle --> */}



                </div>
              </form>
            )

            )
          }
        </div>
      </div>
    </div>
  )
}

export default EditStudentForm