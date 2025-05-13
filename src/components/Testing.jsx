import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import AdminHomePage from './AdminHomePage';
import RegistrationForm from './ManagmentModule/RegistrationForm'
import { Link } from 'react-router-dom';
import img from '../assets/mn.avif'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CallAjax from '../Hook/CallAjax';



function Testing() {
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalCounts, setTotalCounts] = useState([]);

  const formatDate = (date) => date.toISOString().split('T')[0];
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = [
    
    
    { label: "Admin", icon: "👤" },
    { label: "Managment", icon: "⚙️" },
    { label: "Student's", icon: "🎓" },
  ];

  async function managementedit(){
    let response = await CallAjax(`http://localhost:4050/dashboarCouts`,{}, 'GET')
    console.log(response)
    setTotalCounts(response[0])
}
useEffect(()=>{
    managementedit();
},[])

const metrics = [
  { label: 'Courses', value1: totalCounts['totalcourses'], color: 'bg-red-500'},
  { label: 'Students', value2: totalCounts['totalStudents'], color: 'bg-green-500' },
  { label: 'Batches', value3: totalCounts['totalbatches'], color: 'bg-cyan-400' },
];

  // function notify(){
  //   toast.warn("User added succefullY!")
  // }

  return(
    


  

  <div>
     <div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:ms-70 mt-11'>
<Link to='/coursesmodule'>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-blue-800 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Total
    Course
  </h1>
  </div>
  
</div>
</Link>

<Link to='/allstudentrecord'>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-blue-400 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value2}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-users"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Total
    Student
  </h1>
  </div>
  
</div>
</Link>
<Link to='/batches'>

<div
  class=" mt-5  div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-pink-950 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value3} 
  </div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin text-gray group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-book-open-reader"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Total
    Batches
  </h1>
  </div>
  
</div>
</Link>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-orange-400 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Upcoming EMI'S
  </h1>
  </div>
  
</div>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-red-600 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Pending
    EMI'S
  </h1>
  </div>
  
</div>
<div
  class=" mt-5 div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0 shadow-2xl"
>
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-green-600 group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[2em] left-[1em] text-[#09020b] group-hover:text-[white] duration-500"
  >
    {
        metrics.map((item, idx) => (
          <div>
<div className="text-4xl font-bold">{item.value1}</div> 
<span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
          </div>
                      
                       
        ))}
    {/* <i class="fa-solid fa-arrow-right"></i> */}
  </button>
  <div className='flex gap-4'>
<h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-5xl">
    <i class="fa-solid fa-graduation-cap"></i>
  </h1>

  <h1
    class="z-20 mt-3 font-bold font-Poppin uppercase group-hover:text-white duration-500 text-[1.5em]"
  >Paid
    EMI'S
  </h1>
  </div>
  
</div>


    </div>
    </div>
   
    <div className='grid grid-cols-1 md:ms-70
    '>

      
      <div className="  m-auto px-4">
     
     

      <div className="relative   rounded-lg  overflow-hidden flex flex-col md:flex-row items-center justify-between">
         <div className='flex justify-between '>
      {/* <div className='w-96'>
        <img src={img} alt="" />
      </div> */}
<div className='mb-10 '>
     <div style={{ marginTop: 20 }} className='bg-blue-500 w-full py-3 text-white text-center text-2xl'>
        <strong>{formatDate(selectedDate)}</strong>
        {/* <p>{runData[formatDate(selectedDate)] || 'No run logged'}</p> */}
      </div>
    <Calendar onChange={setSelectedDate} value={selectedDate} />
   
    </div>
    </div>
        {/* <img
          src={img}
          alt="Students"
          className="mt-4 md:mt-0   w-full h-72  shadow-lg object-cover"
        /> */}
      </div>
    </div>
    </div>
    
   
    
    
  </div>
  )

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
      <ToastContainer className='changeposition' />

      <div>
        <Managmentnavbar />
      </div>
      <div class="flex items-center justify-center p-12">

        <div class="mx-auto w-7xl max-w-[750px] bg-white shadow-2xl  border-gray-200 border-1  rounded-br-3xl rounded-tl-3xl">
          {/* <div className='w-xs m-auto mt-5'>
    <h1 className='text-xl text-center bg-blue-500 rounded-br-3xl rounded-tl-3xl text-white hover:bg-blue-600 py-4 '> Student Registration</h1>
    </div> */}

          <div className='w-xs ml-auto'>
            <h1 className=' text-xl text-center bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 font-bold text-white hover:from-blue-800 hover:to-white-500 rounded-br-3xl  hover:bg-blue-800 py-4 '> Student Registration</h1>
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
                          Password
                        </label>
                        <div className="relative">

                          <input
                            type={showPassword ? "text" : "password"}                            
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                            name='password' value={val.stud_pass} onChange={(ev) => { updateformval(ev, 'password') }} />
                          

                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-3.5 text-gray-500"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                      
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                     
                      <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                         Conform  Password
                        </label>
                        <div className="relative">

                          <input
                            type={showCpassword ? "text" : "password"}                            
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md"
                            name='password'  value={val.stud_pass} onChange={(ev) => { updateformval(ev, 'password') }} />
                          

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
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={moment(val.stude_dob).format('YYYY-MM-DD')} onChange={(ev) => { updateformval(ev, 'date') }} />
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
                          <div class={`rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 ${selectedis ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={selectedis ? openModal : ''}>
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

export default Testing
