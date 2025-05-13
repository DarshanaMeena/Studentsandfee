import React from 'react'
import CallAjax from '../../Hook/CallAjax';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Managmentnavbar from '../Managmentnavbar';
import { useRef } from 'react';
import Select from 'react-select/base';
import Addcity from './Addcity';
import Addvillage from './Addvillage';
import $ from 'jquery'
function EditStudentForm() {

    const [Studentedit,setStudentedit] = useState([])
    const {id} = useParams();
    const goto = useNavigate();
   async function getStudInfo() {
        let result=  await CallAjax(`http://localhost:4050/editstudentform/${id}`,{},'GET')
        setStudentedit(result)
        console.log(result)
       
    }

    useEffect(()=> {
      getStudInfo();
    }, [])

    async function updateform(ev,key) {
        let val = ev.target.value;
        let newval = await{...Studentedit,[key]:val}
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

const [selectbetch , setSelectbetch] = useState([])
const[cities,setCities] = useState([])
const[villages,setVillages] = useState([])
const [selectedValuevilllag, setSelectedValuevillage] = React.useState(null);
const [selectedValue, setSelectedValue] = React.useState(null);
const formRef = useRef(null);


    const redirect =useNavigate()
  async function stud_formdata(ev) {
    ev.preventDefault();
   
    let formdata = new FormData($("#RegisterForm")[0]);
    let result = await CallAjax('http://localhost:4050/studentdata',formdata,'POST');
    console.log(result)
    if(result) {
      alert("Form successfuly!")
      redirect('/allstudentrecord');
    } else {
      console.log('failed')
    }
  }

  async function getbatchess(){
    let batchdata = await CallAjax('http://localhost:4050/getbetchselect',{},'GET');
    setSelectbetch(batchdata);
        }
        useEffect(()=>{
            getbatchess();
        },[])


        const handleChange = (selectedOption) => { console.log(selectedOption)
            setSelectedValue(selectedOption);
          };

         
    
        const options = [];
    
          async function registerstudent() {
            const response = await CallAjax('http://localhost:4050/getallcities', {}, 'GET')
    
            /*await response.map((city)=>{
                 options.push({value: city.value, label : city.label});
            })*/
            setCities(response)
        
          }

          useEffect(() => {
            registerstudent();
          },[])

          const handleChangevilllage = (selectedOption) => {
            setSelectedValuevillage(selectedOption);
          };
          async function registerstudents() {
            const responce = await CallAjax('http://localhost:4050/getallvillages',{},'GET')
    
            /*await response.map((city)=>{
                 options.push({value: city.value, label : city.label});
            })*/
             setVillages(responce)
        
          }

          async function studentupdateform(e){
            e.preventDefault();
            let formdata = new FormData($('#RegisterForm')[0]);
           // console.log(formdata)
            let resultup= await CallAjax('http://localhost:4050/editstud',formdata,'PUT');
            //setEditbatch(resultup)        
            goto('/allstudentrecord')
          alert()
           
    
        }
    useEffect(() => {
                registerstudents();
              },[])
    
              const [isModalOpen, setIsModalOpen] = useState(false);
              const [isModalvOpen, setIsModalvOpen] = useState(false);
              
                const openModal = () => {
                  setIsModalOpen(true);
                };
                const openModalv = () => {
                    setIsModalvOpen(true);
                  };
              
                const closeModal = () => {
                  setIsModalOpen(false);
                  setIsModalvOpen(false)
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
              date:{
                required: true,
              },
              sphone:{
                required: true,
                minlength: 10,
                maxlength: 10,
              },
              fphone:{
                required: true,
                minlength: 10,
                maxlength: 10,
              },
              gender:{
                required: true,
              },
              category:{
                required:true,
              },
              batch:{
                required:true,
              },
              classname:{
                required:true,
              },
              address:{
                required:true,
              },
    
          },
          messages: {
            sname: 'Please enter Student number',
            email: 'Enter a valid email address.',
            sphone:'please enter at least 10 number'
          },
        //   submitHandler: function (form) {
        //     alert('Registration Successfuly!');
        //    return true
        // }
        });
      }
      useEffect(()=>{
        validation();
      },[])
  return (
    <div>

    <div>
        <Managmentnavbar />
        </div>
    <div class="flex items-center justify-center p-12  md:ms-44">
   
    <div class="mx-auto w-full max-w-[750px] bg-white shadow-2xl  border-gray-200 border-1  rounded-br-3xl rounded-tl-3xl">
    {/* <div className='w-xs m-auto mt-5'>
    <h1 className='text-xl text-center bg-blue-500 rounded-br-3xl rounded-tl-3xl text-white hover:bg-blue-600 py-4 '> Student Registration</h1>
    </div> */}

<div className=' ml-auto'>
    <h1 className=' text-xl text-center bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 font-bold text-white hover:from-blue-800 hover:to-white-500 rounded-tl-3xl  hover:bg-blue-800 py-4 '> Student Registration</h1>
    </div>
    {
      Studentedit.map((val)=>(

      
        <form   id='RegisterForm' onSubmit={studentupdateform} className=' py-9 px-9 '>
       <input type="hidden" name='id' value={val.id}/>
          
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Student Name
                </label>
                <input type="text" name="sname"  placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" onChange={(ev) => {updateform(ev,'sname')}} value={val.stude_name}/>
            </div>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Father Name
                </label>
                <input type="text" name="fname"  placeholder="Father Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_fname} onChange={(ev) => {updateform(ev,'fname')}}/>
            </div>
            
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_email} onChange={(ev) => {updateform(ev,'email')}}/>
            </div>
            <div class="mb-5">
             <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Date Of Birth
                        </label>
                        <input type="date" name="dob" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_dob} onChange={(ev) => {updateform(ev,'date')}}/>
            </div>
          
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                    <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Student's Number
                </label>
                <input type="text" name="sphone"  placeholder="Enter phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_snum} onChange={(ev) => {updateform(ev,'sphone')}}/>
                    </div>
                </div>
                
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                    <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Parent's Number
                </label>
                <input type="text" name="fphone"  placeholder="Enter phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.stude_pnum} onChange={(ev) => {updateform(ev,'fphone')}}/>
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
                           <select name="gender"  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.gender} onChange={(ev) => {updateform(ev,'gender')}}>
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
                        <select name="category"  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.category} onChange={(ev) => {updateform(ev,'category')}}>
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
                    Batch Name
                </label>
                <select name="batch"  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.betch_id} onChange={(ev) => {updateform(ev,'batch')}}>
                        <option value="">Select Class</option>
                        {
                            selectbetch.map((option)=>(
                                <option value={option.id}>{option.batch_name}</option>
                            ))
                        }
                           </select>
                       
                        </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                        <div class="mb-5">
                        <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Education/Class
                </label>
                        <select name="classname" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.education} onChange={(ev) => {updateform(ev,'classname')}}>
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
                    </div>
                    

                </div>
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
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-400 focus:shadow-md" value={val.address} onChange={(ev) => {updateform(ev,'address')}}/>
            </div>
                <div class="-mx-3 flex flex-wrap">
                    
                <div class="w-full px-3 sm:w-1/2">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    City 
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
                        <div  class="rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 cursor-pointer" onClick={openModal}>
                          Add
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
            <Addcity isOpen={isModalOpen} onClose={closeModal} registerstudent={registerstudent} handleChange={handleChange}>
        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
       Add Villages
        </h3>
      </Addcity>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2 ">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Village 
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
                        <div class="rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 cursor-pointer" onClick={openModalv}>
                          Add
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>

            <Addvillage isOpen={isModalvOpen} onClose={closeModal} registerstudents={registerstudents} handleChangevilllage={handleChangevilllage}>
            <div className='m-auto'>
            <h3 className="text-lg leading-6 font-medium text-gray-900 " id="modal-headline">
       Add Villages
        </h3>
            </div>
        
      </Addvillage>
            <div>
                <button type='submit'
                    class="hover:shadow-form w-full rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-11 py-3 text-white hover:from-blue-800 hover:to-white-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Edit
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
