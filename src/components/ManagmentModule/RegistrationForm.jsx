import React, { useState, useEffect, useRef } from 'react'
import CallAjax from '../../Hook/CallAjax';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
import Managmentnavbar from '../Managmentnavbar';
import Select from "react-select"
import Addcity from './Addcity';
import Addvillage from './Addvillage';
import 'jquery-validation';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import Adddistric from './Adddistric';
import { FaUserShield, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Adminnavbar from '../Adminnavbar';
function RegistrationForm() {
  const [selectbetch, setSelectbetch] = useState([])
  const [selectcourse, setSelectcourse] = useState([])
  const [districs, setDistric] = useState([])
  const [selectedis, setSelectdis] = React.useState(null);
  const [cities, setCities] = useState([])
  const [villages, setVillages] = useState([])
  const [selectedValuevilllag, setSelectedValuevillage] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [showPassword, setShowPassword] = useState(false);
    const [showCpassword, setShowCpassword] = useState(false);
  
  const formRef = useRef(null);
  const redirect = useNavigate()
  const userrole = useRef(localStorage.getItem('role'));
  async function stud_formdata(ev) {
    ev.preventDefault();

    let formdata = new FormData($("#RegisterForm")[0]);
    let result = await CallAjax('http://localhost:4050/studentdata', formdata, 'POST');
    console.log(result)
    if (result) {
      alert("Registration Successfuly!")
      redirect('/allstudentrecord');
    } else {
      console.log('failed')
      toast.error("Something Went Wrong. Please Try Again!");
    }
  }
  // select courses
  async function getcourse() {
    let coursedata = await CallAjax('http://localhost:4050/getcoursesselect', {}, 'GET');
    setSelectcourse(coursedata);

  }
  useEffect(() => {
    getcourse();
  }, [])


  //get distric
  const handledistric = async (selectedOption) => {
    setSelectdis(selectedOption);

    console.log(selectedOption)

    await studentteh(selectedOption.value);

  };
  const options = [];

  async function studentdistric() {
    const response = await CallAjax('http://localhost:4050/getalldistric', {}, 'GET');

    setDistric(response)

  }
  useEffect(() => {
    studentdistric();
  }, [])


  const handleChange = async (selectedOption) => {
    console.log(selectedOption)
    setSelectedValue(selectedOption);
    studentvillage(selectedOption.value)
  };




  async function studentteh(dsid) {
    const response = await CallAjax(`http://localhost:4050/getallcities/${dsid}`, {}, 'GET')


    setCities(response)

  }

  /*useEffect(() => {
    studentteh();
  }, [])*/

  const handleChangevilllage = (selectedOption) => {
    setSelectedValuevillage(selectedOption);
  };
  async function studentvillage(teh) {
    const responce = await CallAjax(`http://localhost:4050/gettehvillages/${teh}`, {}, 'GET')

    /*await response.map((city)=>{
         options.push({value: city.value, label : city.label});
    })*/
    setVillages(responce)

  }



  // useEffect(() => {
  //   studentvillage();
  // }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalvOpen, setIsModalvOpen] = useState(false);
  const [isModaldOpen, setIsModaldOpen] = useState(false);
  const openModald = () => {
    setIsModaldOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const openModalv = () => {
    setIsModalvOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalvOpen(false);
    setIsModaldOpen(false);

  };
  async function changebatches(ev) {

    let c_id = ev.target.value;
    let batcheselect = await CallAjax(`http://localhost:4050/getbatchessselect/${c_id}`, {}, 'GET');
    setSelectbetch(batcheselect);
  }
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
        course: {
          required:true,
        },
        password: {
          required: true,
          minlength:6,
        },
         cpassword: {
          required: true,
          minlength:6,
          equalTo : '#mainpass'
        }

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




  return (
    <div>
     

      <div>
        <div> { userrole.current == 1 ? <Adminnavbar /> : <Managmentnavbar/> } </div>
      </div>
      <div class="flex items-center justify-center p-12  md:ms-70 ">

        <div class="mx-auto w-7xl max-w-[950px] bg-white shadow-2xl   rounded-br-3xl rounded-tl-3xl">
<div class="relative max-w-4xl mx-auto overflow-hidden rounded-t-xl shadow-md border-2 border-blue-300">
<div class="relative">
  {/* <!-- Layered Blue Waves (Top Border) --> */}
  <svg viewBox="0 0 1440 200" class="w-full h-28 rotate-360" preserveAspectRatio="none">
    {/* <!-- Back Layer (Dark Blue) --> */}
    
    {/* <!-- Middle Layer --> */}
    <path fill="#0ea5e9" fill-opacity="1"
      d="M0,180L80,170.7C160,161,320,139,480,128C640,117,800,117,960,128C1120,139,1280,160,1360,170.7L1440,181L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
    </path>
    {/* <!-- Front Layer --> */}
    
  </svg>
</div>

<div class="flex items-center mb-11 justify-center my-6">
  {/* <!-- Left Dashed Line --> */}
  <div class="flex-grow border-t border-dashed border-cyan-400"></div>

  {/* <!-- Label --> */}
  <span class="px-4 py-3 mx-4 bg-sky-500 font-bold text-white  rounded shadow text-lg">
    REGISTRATION FORM
  </span>

  {/* <!-- Right Dashed Line --> */}
  <div class="flex-grow border-t border-dashed border-cyan-400"></div>
</div>

{/* <!-- Page Content Goes Here --> */}

<form onSubmit={stud_formdata} id='RegisterForm' className=' px-5 '>

            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Student's Name
                  </label>
                  <input type="text" name="sname" placeholder=" Student Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                </div>
              </div>

              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Father Name
                  </label>
                  <input type="text" name="fname" placeholder="Father Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                </div>
              </div>
            </div>

            <div class="mb-5">
              <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input type="email" name="email" id="email" placeholder="Enter your email"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
            </div>
            <div class="mb-5 pt-3">

              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  {/* <div class="mb-5">
                    <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                     Password
                    </label>
                    <input type="password" name="password" id="pass" placeholder=' Enter Password'
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                  </div> */}
                  <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                  </label>
                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      id='mainpass'
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                      name='password'
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-gray-500"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                      confirm Password

                    </label>
                    <div className="relative">

                    <input
                      type={showCpassword ? "text" : "password"}
                      placeholder=" Conform Password"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                      name='cpassword'
                    />

                    <button
                      type="button"
                      onClick={() => setShowCpassword(!showCpassword)}
                      className="absolute right-4 top-3.5 text-gray-500"
                    >
                      {showCpassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  </div>
                </div>


              </div>
            </div>

            <div class="mb-5 pt-3">

              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                      Date of Birth
                    </label>
                    <input type="date" name="date" id="date"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                      Admission Date

                    </label>
                    <input type="date" name="admition" id="adate"
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
                  <input type="text" name="sphone" placeholder="Enter phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" />
                </div>
              </div>

              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Parent's Number
                  </label>
                  <input type="text" name="fphone" placeholder="Enter phone number"
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
                    <select name="gender" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                      Category
                    </label>
                    <select name="category" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" >
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
                    <select name="course" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" onChange={changebatches} >
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
                    <select name="batch" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" >
                      <option value="">Select Batch</option>
                      {
                        selectbetch.map((option) => (
                          <option value={option.id}>{option.batch_name} {moment(moment(new Date()).format('YYYY-MM-DD') + ' ' + option.start_time).format('hh:mm A')} To {moment(moment(new Date()).format('YYYY-MM-DD') + ' ' + option.end_time).format('hh:mm A')}</option>
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
              <select name="classname" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" >
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

                <input type="text" name="address" id="name"
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
                  Add Tehsil
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
                      <div class={`rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 ${selectedValue ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={selectedValue ? openModalv : ''}>
                        Add
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Addvillage isOpen={isModalvOpen} onClose={closeModal} studentvillage={studentvillage} handleChangevilllage={handleChangevilllage} allcities={cities} selectedValue={selectedValue}>
              <div className='m-auto'>
                <h3 className="text-lg leading-6 font-medium text-gray-900 " id="modal-headline">
                  Add Villages
                </h3>
              </div>

            </Addvillage>
            <div>
              
              {/* modal */}


              {/* <!-- Modal toggle --> */}


  <button type='submit'
                class="hover:shadow-form w-full rounded-md bg-gradient-to-r from-blue-400 to-blue-400 px-11  text-white hover:from-blue-500 hover:to-white-500 py-2  px-5 text-center text-base font-semibold text-white outline-none text-lg">
                Register
              </button>
            </div>
           
          </form>
  {/* <!-- Layered Blue Waves using SVG --> */}
  <svg viewBox="0 0 1440 200" class="w-full h-48 border-t-0 border-1 border-blue-300" preserveAspectRatio="none">
    {/* <!-- Back Layer (Dark Blue) --> */}
    <path fill="#0284c7" fill-opacity="1"
      d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,154.7C840,149,960,107,1080,90.7C1200,75,1320,85,1380,90.7L1440,96L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z">
    </path>
    {/* <!-- Middle Layer --> */}
    <path fill="#0ea5e9" fill-opacity="1"
      d="M0,180L80,170.7C160,161,320,139,480,128C640,117,800,117,960,128C1120,139,1280,160,1360,170.7L1440,181L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z">
    </path>
    {/* <!-- Front Layer --> */}
    <path fill="#38bdf8" fill-opacity="1"
      d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,197.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z">
    </path>
  </svg>
</div>


  {/* <!-- Header Content --> */}
 


          {/* <div className='w-full'>
            <h1 className=' text-xl text-center bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 font-bold text-white hover:from-blue-800 hover:to-white-500 rounded-tl-3xl  hover:bg-blue-800 py-4 '> Student Registration</h1>
          </div> */}
          


        </div>
  
      </div>
    </div>
    
    // </div>
  )
}

export default RegistrationForm
